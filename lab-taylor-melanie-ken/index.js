'use strict';

//const reader = require('./lib/bitmap-reader.js');
const writer = require('./lib/bitmap-writer.js');
//const constructor = require('./lib/bitmap-constructor.js');
const transform = require('./lib/transform.js');
let bm =`./data/palette-bitmap.bmp`;


// reader(bm,function(){
// });

writer(bm, 'new', transform.invert);
    





