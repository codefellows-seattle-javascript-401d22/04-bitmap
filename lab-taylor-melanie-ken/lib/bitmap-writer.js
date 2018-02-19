'use strict';

const fs = require('fs');
const constructor = require('./bitmap-constructor.js');
const transform = require('./transform.js');

const bitMapWriter = module.exports = function(file, newBM, transformMethod) {
  let newPath = `${__dirname}/../data/${newBM}.bmp`;

  fs.readFile(file, function(err,data) {
    if(err) return (err);
    let newBitMap = constructor(data);
    console.log('transform method passed through:',transformMethod);

    if (transformMethod === 'blkToWhite') {
      transform.blkToWhite(newBitMap);
    }
    if (transformMethod === 'toLateEighties') {
      transform.toLateEighties(newBitMap);
    }
    if (transformMethod === 'invert') {
      transform.invert(newBitMap);
    }
    if (transformMethod === 'diagonal') {
      transform.diagonal(newBitMap);
    }
    if (transformMethod === 'redAndBlack') {
      transform.redAndBlack(newBitMap);
    }
    if (transformMethod === 'greyscale') {
      transform.greyscale(newBitMap);
    }
    if (transformMethod === 'solid') {
      transform.solid(newBitMap);
    }
    if (transformMethod === 'redscale') {
      transform.redscale(newBitMap);
    }
    if (transformMethod === 'greenscale') {
      transform.greenscale(newBitMap);
    }
    if (transformMethod === 'bluescale') {
      transform.bluescale(newBitMap);
    }

    fs.writeFile(newPath, data, function(err, data) {
      if(err) return err;
      console.log(`File ${newBM}.bmp created with ${transformMethod} transform method.`);
    });
  });
};