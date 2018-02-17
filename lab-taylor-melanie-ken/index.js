'use strict';

const writer = require('./lib/bitmap-writer.js');
const transform = require('./lib/transform.js');

process.argv.forEach((val, idx) => {
});

writer(process.argv[2], process.argv[3], process.argv[4]);