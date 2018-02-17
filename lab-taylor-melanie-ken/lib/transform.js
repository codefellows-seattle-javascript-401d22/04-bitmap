'use strict';

const fs = require('fs');
const writer = require('./bitmap-writer.js');
const constructor = require('./bitmap-constructor.js');

module.exports = exports = {};

exports.blkToWhite = function(data) {
  for (let i = 0; i < data.colorTable.length; i++) {
    if (data.colorTable[i] !== 0) {
      data.colorTable[i] = 255;
    }
  }
  return data;
};

exports.invert = function(data) {
    data.pixels.reverse();

    return data;

};

exports.pixelExperiment = function(data) {
  console.log(data);

  for (let i = 0; i < data.pixels.length; i++) {
    data.pixels[i * 2] = 0; // vertical lines
    data.pixels[i * 3] = 1; // diagonal lines
  }

  for (let i = 2500; i > 0; i--) {
    // data[i * 2] = 1; // vertical lines
    // data[i * 3] = 20; // diagonal lines

    // NOTE: you can combine these two:
    data.pixels[i * 2] = 20; // vertical lines
    // data[i * 3] = 1; // diagonal lines
  }
  
  // turns everything black except one red slash
  // for (let i = 0; i < data.length; i++) {
  //   data[i] = data[i] * 3;
  // }
  return data;
};
