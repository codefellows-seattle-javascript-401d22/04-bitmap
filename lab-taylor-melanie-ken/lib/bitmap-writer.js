'use strict';

const fs = require('fs');
const reader = require('./bitmap-reader.js');
const constructor = require('./bitmap-constructor.js');

const bitMapWriter = module.exports = function(file, newBM, callback) {
    
    let newPath = `${__dirname}/../data/${newBM}.bmp`;

    fs.readFile(file, function(err,data) {
        if(err) return callback(err);

        //console.log(data);
        let fileBuffer = data;
        // console.log(fileBuffer);
        
        let newBitMap = constructor(data);
        // console.log(newBitMap);
        console.log(newBitMap.colorTable);

        for (let i = 0; i < newBitMap.colorTable.length; i++) {
            if (newBitMap.colorTable[i] !== 0) {
                newBitMap.colorTable[i] = 39;
            }
        }
        console.log(newBitMap.colorTable);

        fs.writeFile(newPath, fileBuffer, function(err,data){
            if(err) throw err;
        });
    });
}

    
    
    
    