'use strict';

const reader = require(`${__dirname}/lib/reader.js`);
const transformer = require(`${__dirname}/lib/transformer.js`);
const writer = require(`${__dirname}/lib/writer.js`);

reader(`${__dirname}/data/palette-bitmap.bmp`, function (err, data) {
  let buff = transformer(data, 'blackout');

  writer(`${__dirname}/data/newbitmap.bmp`, buff, function (err, data) {
    console.log('done!');
  });

});