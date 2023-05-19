const fse = require('fs-extra');
const { shelljsExec } = require('./function');


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

        // port
        const port = package?.ncfParams?.port ?? 9090;

        // dev
        if (command1 == 'dev') {

            // run
            await shelljsExec("npx next dev -p " + port);

        // emulate or run
        } else if (command1 == 'emulate' || command1 == 'run') {

            // android
            if (command2 == 'android') {

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
                if (command3 == 'dev') {

                    // copy dir 'platforms/android/platform_www/plugins' -> 'public'
                    if (fse.existsSync(cwd + '/platforms/android/platform_www')) {

                        console.log('Copy dir "/platforms/android/platform_www" -> "public"');

                        fse.copySync(cwd + '/platforms/android/platform_www', 'public');

                    }

                    // rename config.xml: <content src="https://localhost" /> -> <content src="http://10.0.2.2:9090/" />
                    await fse.promises.readFile(cwd + '/config.xml', async function(err, data) {

                        data = data.toString();
                    
                        console.log('Setting the ip: 10.0.2.2');

                        data = data.replace(/(<content [\S\s]*?src=")[^"]+("[\S\s]*?>)/gmi, '<content src="http://10.0.2.2:' + port + '/" />');
                    
                        await fse.promises.writeFile(cwd + '/config.xml', data);
                    
                    });

                }

                console.log('Run next-cordova-static');

                await shelljsExec("npx next-cordova-static");

                console.log('Run cordova ' + command1 + ' android');

                await shelljsExec("npx cordova " + command1 + " android");

                // command3 == 'dev'
                if (command3 == 'dev') {

                    // rename config.xml: <content src="http://10.0.2.2:9090/" /> -> <content src="https://localhost" />
                    await fse.promises.readFile(cwd + '/config.xml', async function(err, data) {

                        data = data.toString();

                        console.log('Setting the ip: localhost');
                    
                        data = data.replace(/(<content [\S\s]*?src=")[^"]+("[\S\s]*?>)/gmi, '<content src="https://localhost" />');
                    
                        await fse.promises.writeFile(cwd + '/config.xml', data);
                    
                    });

                }

            } else {
                console.log('Error: Enter the platform');
                return;
            }

        } else {
            console.log('Error: Enter the command');
            return;
        }
        
    } catch (error) {

        console.log('Fatal error: ', error);

    }
}



