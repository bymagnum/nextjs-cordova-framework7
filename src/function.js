const shelljs = require('shelljs');

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

module.exports = {
    shelljsExec,
}