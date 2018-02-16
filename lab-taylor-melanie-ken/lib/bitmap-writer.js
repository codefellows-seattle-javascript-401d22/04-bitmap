'use strict';

const fs = require('fs');
const reader = require('./bitmap-reader.js');
const constructor = require('./bitmap-constructor.js');

const bitMapWriter = module.exports = function(file, newBM, callback) {
    let fileBuffer = reader(file);
    //let bitmap = constructor(fileBuffer);
    let newPath = `${__dirname}/../data/${newBM}.bmp`;
    
    fs.writeFile(newPath, fileBuffer, function(err,data){
        if(err) throw err;
        console.log(data);

    });
}