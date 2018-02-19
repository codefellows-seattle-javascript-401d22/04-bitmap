'use strict';

const constructor = require('./constructor.js');
const allwhite = require('./all-black.js');
const fs = require('fs');
const path = require('path');


const readFileHelper = module.exports = function(file, newFile, callback) {
  let filePathRead = path.join(__dirname, '..', 'data', file);

  // console.log('path to read from', filePathRead);
  
  // console.log('file path we sent', `${file}`);
  let filePathWrite = `${__dirname}/../data/${newFile}`;

  fs.readFile(filePathRead, function(err, data){
    // if(err)
    // console.log('this is our file from the fileRead', data);
    let bitMap = constructor(data);
    // console.log('this is our callback', callback);
    let newBitmapObj = callback(bitMap);
    // RECEIVES STRINGS!!! v v v 
    let newBitmapTotal = bitMap.header + newBitmapObj.colorPalette + newBitmapObj.colorString + bitMap.end;
    let newBitmap = Buffer.from(newBitmapTotal, 'hex');
    // console.log(newBitmap.toString('hex'));
    // console.log('new bitmap buffer', newBitmap);
    fs.writeFile(filePathWrite, newBitmap, 'hex', function(err, data){
      // if(err)
      // console.log('file successfully created');

    });
  });
  

};