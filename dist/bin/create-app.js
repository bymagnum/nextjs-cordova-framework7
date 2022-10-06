var fse = require("fs-extra");
var path = require('path');


async function CreateApp () {

    if (fse.existsSync('dist/template/components')) {
        fse.copySync('dist/template/components', 'components');
    }

    if (fse.existsSync('dist/template/pages')) {
        fse.copySync('dist/template/pages', 'pages');
    }

    if (fse.existsSync('dist/template/config.xml')) {
        fse.copySync('dist/template/config.xml', 'config.xml');
    }

    if (fse.existsSync('dist/template/next.config.js')) {
        fse.copySync('dist/template/next.config.js', 'next.config.js');
    }
 
    if (fse.existsSync('dist/template/.env.development')) {
        fse.copySync('dist/template/.env.development', '.env.development');
    }

    if (fse.existsSync('dist/template/.env.production')) {
        fse.copySync('dist/template/.env.production', '.env.production');
    }

}

CreateApp();