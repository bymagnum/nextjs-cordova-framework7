var fs = require("fs");
var fse = require("fs-extra");
var path = require('path');


async function CreateApp () {

    if (fs.existsSync('dist/template/www')) {
        fse.copySync('dist/template/www', 'www');
        fse.copySync('dist/template/pages', 'pages');
    }



    
}

CreateApp();