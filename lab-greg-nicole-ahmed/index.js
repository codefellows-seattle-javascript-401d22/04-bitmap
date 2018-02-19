'use strict';

const fileReader = require('./lib/read-write-file.js');
const allwhite = require('./lib/all-black.js');
const blueStripe = require('./lib/blue-stripe.js');
const neww = require('./lib/neww.js');

fileReader('palette-bitmap.bmp', 'new.bmp', allwhite);
fileReader('palette-bitmap.bmp', 'blueStripe.bmp',blueStripe);
fileReader('palette-bitmap.bmp', 'neww.bmp', neww);