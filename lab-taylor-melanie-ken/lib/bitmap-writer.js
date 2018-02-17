'use strict';

const fs = require('fs');
const reader = require('./bitmap-reader.js');
const constructor = require('./bitmap-constructor.js');
const transform = require('./transform.js');


const bitMapWriter = module.exports = function(file, newBM, callback) {
    
    let newPath = `${__dirname}/../data/${newBM}.bmp`;

    fs.readFile(file, function(err,data) {
        if(err) return callback(err);
        
        let newBitMap = constructor(data);
        transform(newBitMap.colorTable);

        fs.writeFile(newPath, data, function(err,data){
            if(err) throw err;
        });
    });
}

    
    
    
    