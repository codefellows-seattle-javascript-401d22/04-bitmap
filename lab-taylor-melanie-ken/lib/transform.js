'use strict';

const fs = require('fs');
const writer = require('./bitmap-writer.js');
const constructor = require('./bitmap-constructor.js');

const bitMapTransform = module.exports = function(data, callback) {
  console.log('Color table data transform:',data)

  for (let i = 0; i < data.length; i++) {
    if (data[i] === 0) {
      data[i] = 255;
    }
  }

  console.log('Color table data post-transform:',data)
  return data;
}

    
    
    
    