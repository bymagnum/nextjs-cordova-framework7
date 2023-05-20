const shelljs = require('shelljs');
const fse = require('fs-extra');

function shelljsExec(command) {
    return new Promise(function (resolve, reject) {
        shelljs.exec(command, {}, function (code, value, error) {
            if (error) {
                return resolve(error);
            }
            resolve(value);
        });
    });
}

function editConfig ({ action, method, cwd, url }) {
    return new Promise(async function (resolve, reject) {

        action = action ?? null;
        url = url ?? null;
        cwd = cwd ?? null;
        method = method ?? false;

        if (!action) {
            reject('Action not specified');
        }

        if (!cwd) {
            reject('cwd not specified');
        }

        if (action == 'content' && !url) {
            reject('Url not specified');
        }

        const getFile = await fse.promises.readFile(cwd + '/config.xml');

        let data = getFile.toString();

        if (action == 'content') {
            
            console.log('Setting the url: ' + url);

            data = data.replace(/(<content [\S\s]*?src=")[^"]+("[\S\s]*?>)/gmi, '<content src="' + url + '" />');

        } else if (action == 'usesCleartextTraffic') {


            if (method) {

                if (!/<widget.+xmlns:android/i.test(data)) {

                    console.log('Added config.xml <widget> -> @xmlns:android="http://schemas.android.com/apk/res/android"');

                    data = data.replace(/<widget(.+?)>/gmi, '<widget$1 xmlns:android="http://schemas.android.com/apk/res/android">');

                }

                if (!/usesCleartextTraffic/i.test(data)) {

                    console.log('Added android:usesCleartextTraffic="true"');
                    
                    data = data.replace(/<platform\sname="android"([\s\S]+?)<\/platform>/gmi, '<platform name="android"$1<edit-config file="app/src/main/AndroidManifest.xml" mode="merge" target="/manifest/application"><application android:usesCleartextTraffic="true" /></edit-config><\/platform>');

                }

            } else {

                console.log('Remove config.xml <widget> -> @xmlns:android="http://schemas.android.com/apk/res/android"');

                data = data.replace(/<widget(.+?)\sxmlns:android=".+">/gmi, '<widget$1>');

                console.log('Remove android:usesCleartextTraffic="true"');

                data = data.replace(/<edit-config[\s\S]+usesCleartextTraffic[\s\S]+<\/edit-config>/gmi, '');

            }

        }

        await fse.promises.writeFile(cwd + '/config.xml', data);

        resolve(true);

    });
}

module.exports = {
    shelljsExec,
    editConfig,
}