'use strict';


const fileReader = require('./lib/read-write-file.js');
const allwhite = require('./lib/all-white.js');
const crosses = require('./lib/cross.js');
const darken = require('./lib/darken.js');
const random = require('./lib/neww.js');

fileReader('palette-bitmap.bmp', 'darkened.bmp', darken);
fileReader('palette-bitmap.bmp', 'neww.bmp', random);
fileReader('palette-bitmap.bmp', 'crosses.bmp', crosses);
fileReader('palette-bitmap.bmp', 'all-white.bmp', allwhite);