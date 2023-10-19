const fse = require('fs-extra');
const { shelljsExec, editConfig } = require('./function');


module.exports = async function (Args) {
    try {

        // args
        const inputArgs = Args || process.argv;

        // command
        const command1 = inputArgs[2] ?? null;// dev, emulate, run
        const command2 = inputArgs[3] ?? null;// android, ios
        const command3 = inputArgs[4] ?? null;// dev

        // work catalog
        const cwd = process.cwd();
        
        // package
        const package = require(cwd + '/package.json');

        // port http
        const portHttp = package?.ncfParams?.port?.http ?? 9090;

        // port https
        const portHttps = package?.ncfParams?.port?.https ?? 9091;

        // usesCleartextTraffic
        const usesCleartextTraffic = package?.ncfParams?.usesCleartextTraffic ?? true;

        // dev
        if (['dev'].indexOf(command1) !== -1) {

            shelljsExec("npx next dev -p " + portHttp);

            shelljsExec("npx local-ssl-proxy --source " + portHttps + " --target " + portHttp);

        // emulate, run
        } else if (['emulate', 'run'].indexOf(command1) !== -1) {
console.log('command1', command1);
            // android
            if (['android'].indexOf(command2) !== -1) {
console.log('command2', command2);
                // delete dir 'public/plugins'
                if (fse.existsSync(cwd + '/public/plugins')) {

                    console.log('Remove "/public/plugins"');

                    fse.removeSync(cwd + '/public/plugins');
                }

                // delete file 'public/cordova_plugins.js'
                if (fse.existsSync(cwd + '/public/cordova_plugins.js')) {

                    console.log('Remove "/public/cordova_plugins.js"');

                    fse.removeSync(cwd + '/public/cordova_plugins.js');
                }

                // delete file 'public/cordova.js'
                if (fse.existsSync(cwd + '/public/cordova.js')) {

                    console.log('Remove "/public/cordova.js"');

                    fse.removeSync(cwd + '/public/cordova.js');
                }

                // command3 == 'dev'
                if (['dev'].indexOf(command3) !== -1) {

                    // copy dir 'platforms/android/platform_www' -> 'public'
                    if (fse.existsSync(cwd + '/platforms/android/platform_www')) {

                        console.log('Copy dir "/platforms/android/platform_www" -> "public"');

                        fse.copySync(cwd + '/platforms/android/platform_www', 'public');

                    }

                    // rename config.xml: <content src="https://localhost" /> -> <content src="http://10.0.2.2:9090/" />
                    await editConfig({
                        cwd,
                        action: 'content',
                        url: 'https://10.0.2.2:' + portHttps
                    });

                }

                // usesCleartextTraffic
                if (usesCleartextTraffic) {

                    // add usesCleartextTraffic
                    await editConfig({
                        cwd,
                        action: 'usesCleartextTraffic',
                        method: true
                    });

                }

                // command3 == 'dev'
                if (['dev'].indexOf(command3) === -1) {

                    console.log('Run next-cordova-static');

                    await shelljsExec("npx next-cordova-static");

                }

                console.log('Run cordova ' + command1 + ' android');

                await shelljsExec("npx cordova " + command1 + " android");

                // command3 == 'dev'
                if (['dev'].indexOf(command3) !== -1) {

                    // rename config.xml: <content src="http://10.0.2.2:9090/" /> -> <content src="https://localhost" />
                    await editConfig({
                        cwd,
                        action: 'content',
                        url: 'https://localhost'
                    });

                }

                // usesCleartextTraffic
                if (usesCleartextTraffic) {

                    // del usesCleartextTraffic
                    await editConfig({
                        cwd,
                        action: 'usesCleartextTraffic',
                        method: false
                    });

                }

            } else {

                console.log('Error: Enter the platform');
                
            }

        } else {

            console.log('Error: Enter the command');

        }
        
    } catch (error) {

        console.log('Fatal error: ', error);

    }
}



