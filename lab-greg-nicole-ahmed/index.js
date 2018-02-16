'use strict';

const fileReader = require('./lib/read-write-file.js');
const allwhite = require('./lib/all-black.js');


fileReader('palette-bitmap.bmp', 'new.bmp', allwhite);