'use strict';

const reader = require(`${__dirname}/lib/reader.js`);
const fs = require('fs');

const bitmap = reader(`${__dirname}/data/palette-bitmap.bmp`, function(err,data){
    console.log(data);

    let bmp = {};
    bmp.length = data.length;
    bmp.type = data.toString('utf-8', 0, 2);
    bmp.size = data.readInt32LE(2);
    bmp.offset = data.readInt32LE(10);
    bmp.headersize = data.readInt32LE(14);
    bmp.width = data.readInt32LE(18);
    bmp.height = data.readInt32LE(22);
    bmp.colorpanes = data.readInt32LE(26);
    bmp.pixels = data.readInt32LE(28);
    bmp.compression = data.readInt32LE(30);
    bmp.imgsize = data.readInt32LE(34);
    bmp.horizresolution = data.readInt32LE(38);
    bmp.vertresolution = data.readInt32LE(42);
    bmp.numcolors = data.readInt32LE(46);
    bmp.numimpcolors = data.readInt32LE(50);
    // bmp.redbitmask = data.readInt32LE(54);
    // bmp.greenbitmask = data.readInt32LE(58);
    // bmp.bluebitmask = data.readInt32LE(62);
    // bmp.alphabitmask = data.readInt32LE(66);
    // bmp.colorspacetype = data.readInt32LE(70);
    // bmp.colorspaceendpoints = data.readInt32LE(74);
    // bmp.gammared = data.readInt32LE(110);
    // bmp.gammagreen = data.readInt32LE(114);
    // bmp.gammablue = data.readInt32LE(118);

    data.slice(54, bmp.offset).toString('hex').replace(/./gi,0);
    
    console.log('new data color table:', data.toString('hex', 54, bmp.offset));

    fs.writeFile(`${__dirname}/data/newbitmap.bmp`, data, 'buffer', function(err,data){
        console.log('file created!');
    });
});



















