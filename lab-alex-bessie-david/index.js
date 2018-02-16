'use strict';

const reader = require(`${__dirname}/lib/reader.js`);
const transformer = require(`${__dirname}/lib/transformer.js`);
const writer = require(`${__dirname}/lib/writer.js`);

// node index.js './data/palette-bitmap.bmp' './data/newpalettebitmap.bmp' 'blackout'
reader(process.argv[2], function(err,data){
    let buff = transformer(data, process.argv[4]);

    writer(process.argv[3], buff, function(err,data){
        console.log('done!');
    });

});
