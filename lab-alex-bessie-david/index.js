'use strict';

const reader = require(`${__dirname}/lib/reader.js`);
const transformer = require(`${__dirname}/lib/transformer.js`);
const fs = require('fs');

const bitmap = reader(`${__dirname}/data/palette-bitmap.bmp`, function(err,data){
    let buff = transformer(data, 'blackout');

    fs.writeFile(`${__dirname}/data/newbitmap.bmp`, buff, function(err,data){
        console.log('file created!');
    });
});



















