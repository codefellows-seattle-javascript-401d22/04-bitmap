'use strict';

const fs = require('fs');
//const reader = require('./bitmap-reader.js');
//const constructor = require('./bitmap-constructor.js');

const bitMapWriter = module.exports = function(file, newBM, callback) {
    
    let newPath = `${__dirname}/../data/${newBM}.bmp`;

    fs.readFile(file, function(err,data) {
        if(err) return callback(err);

        //console.log(data);
        let fileBuffer = data;
        console.log(fileBuffer);
        
        fs.writeFile(newPath, fileBuffer, function(err,data){
            if(err) throw err;
            
    
        });
    });
}

    
    
    
    