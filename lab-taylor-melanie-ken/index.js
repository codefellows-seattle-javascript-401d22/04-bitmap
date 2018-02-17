'use strict';

const writer = require('./lib/bitmap-writer.js');
const transform = require('./lib/transform.js');
let bm =`./data/palette-bitmap.bmp`;

process.argv.forEach((val, idx) => {
  // console.log(`${idx}: ${val}`);
});

if (process.argv[2] === 'invert') {
  writer(bm, 'new', transform.invert);
}
if (process.argv[2] === 'diagonal') {
  writer(bm, 'new', transform.diagonal);
}
if (process.argv[2] === 'redAndBlack') {
  writer(bm, 'new', transform.redAndBlack);
}
if (process.argv[2] === 'blkToWhite') {
  writer(bm, 'new', transform.blkToWhite);
}