'use strict';

const reader = require(`${__dirname}/lib/reader.js`);

const bitmap = reader(`${__dirname}/data/palette-bitmap.bmp`, function(err,data){
    console.log(data);

    let bmp = {};
    bmp.type = data.toString('utf-8', 0, 2);
    bmp.size = data.readInt32LE(2);
    bmp.width = data.readInt32LE(18);
    bmp.height = data.readInt32LE(22);

    console.log('my current bitmap file: ', bmp);
    return data;
});