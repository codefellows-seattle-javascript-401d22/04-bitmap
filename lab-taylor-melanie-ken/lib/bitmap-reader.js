'use strict';


const fs = require('fs');

const bitMapReader = module.exports = function(file, callback) {
    const bmp = {};
    fs.readFile(file, function(err,data) {
        if(err) return callback(err);


        bmp.type = data.toString('utf-8', 0, 2);
        bmp.size = data.readInt32LE(2);
        bmp.offset = data.readInt32LE(10);
        bmp.headerSize = data.readInt32LE(14);
        bmp.width = data.readInt32LE(18);
        bmp.height = data.readInt32LE(22);
        bmp.colorPlanes = data.readInt32LE(26);
        bmp.bitsPerPix = data.readInt32LE(28);
        bmp.comp = data.readInt32LE(30);
        bmp.colorNum = data.readInt32LE(46);
        bmp.colorTable = data.readInt32LE(54);
        bmp.rowSize = (bmp.bitsPerPix * (bmp.width+31)/32)*4;

        console.log(bmp);
    })
    //bmp.pixels = new Uint32Array(bitmap, bmp.offset); 
    //console.log(bitmap.slice(54,bmp.offset));
    //console.log(bmp.pixels.toString());
}