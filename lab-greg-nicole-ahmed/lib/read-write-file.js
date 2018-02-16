'use strict';

const constructor = require('../lib/constructor.js');
const fs = require('fs');


const readFileHelper = module.exports = function(file, newFile, callback) {
  let filePathRead = `${__dirname}/${file}`;
  let filePathWrite = `${__dirname}/${newFile}`;
  fs.readFile(filePathRead, function(err, data){
    // if(err)
    let bitMap = constructor(data);
    //let newBitmapString = allblack(bitMap.pixelArray);
    let newBitmapTotal = bitMap.header + newBitmapString + bitMap.end;
    let newBitmap = Buffer.from(newBitmapTotal);
    fs.writeFile(filePathWrite, newBitmap, function(err, data){
      // if(err)
      console.log('file successfully created');
    });
  });
  

};