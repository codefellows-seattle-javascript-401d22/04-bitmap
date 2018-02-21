'use strict';

const transformer = module.exports = function(buff, transformType){
  if(!Buffer.isBuffer(buff)) throw new Error('not a buffer');
  var transformTypes = ['blackout', 'invert', 'grayscale', 'invcolors'];
  if(!transformTypes.includes(transformType)) throw new Error('transform type not supported');
  
  switch(transformType){
  case 'blackout':
    var start = buff.readInt32LE(14) + 14;
    var offset = buff.readInt32LE(10);
    var colors = buff.toString('hex', start, offset).match(/.{8}/g);
    var blackcolors = colors.map(() => {
      var black = 0;
      black = black.toString(16);
      if(black.length === 1){ black = '0' + black;}
      var ans = black + black + black + '01';
      return ans;
    });
    blackcolors = blackcolors.join('');
    buff = buff.toString('hex', 0, start) + blackcolors + buff.toString('hex', offset, buff.readInt32LE(2));
    buff = Buffer.from(buff, 'hex');
    return buff;
  case 'invert':
    start = buff.readInt32LE(10);
    var end = start + buff.readInt32LE(34);
    var pixels = buff.toString('hex', start, end).match(/.{8}/g).reverse().join('').match(/.{2}/g);
    buff = buff.toString('hex').match(/.{2}/g);
    buff.splice(start, (end - start + 1));
    buff = buff.concat(pixels);
    buff = buff.toString().replace(/[,]/g, '');
    buff = Buffer.from(buff, 'hex');
    return buff;
  case 'grayscale':
    start = buff.readInt32LE(14) + 14;
    offset = buff.readInt32LE(10);
    colors = buff.toString('hex', start, offset).match(/.{8}/g);
    var graycolors = colors.map(color => {
      var blue = '0x' + color.slice(0,2);
      var green = '0x' + color.slice(2,4);
      var red = '0x' + color.slice(4,6);

      var gray = Math.floor((+red * 0.21) + (+green * 0.72) + (+blue * 0.07));
      gray = gray.toString(16);
      if(gray.length === 1){ gray = '0' + gray;}
      var ans = gray + gray + gray + '01';
      return ans;
    });
    graycolors = graycolors.join('');
    buff = buff.toString('hex', 0, start) + graycolors + buff.toString('hex', offset, buff.readInt32LE(2));
    buff = Buffer.from(buff, 'hex');
    return buff;
 
  case 'invcolors':
    start = buff.readInt32LE(14) + 14;
    offset = buff.readInt32LE(10);
    colors = buff.toString('hex', start, offset).match(/.{8}/g);
    var invcolors = colors.map(color => {
      var blue = '0x' + color.slice(0, 2);
      var green = '0x' + color.slice(2, 4);
      var red = '0x' + color.slice(4, 6);

      blue = Math.floor(255 - +blue).toString(16);
      green = Math.floor(255 - +green).toString(16);
      red = Math.floor(255 - +red).toString(16);

      if (red.length === 1) { red = '0' + red; }
      if (green.length === 1) { green = '0' + green; }
      if (blue.length === 1) { blue = '0' + blue; }

      var ans = blue + green + red + '01';
      return ans;
    });
    invcolors = invcolors.join('');
    buff = buff.toString('hex', 0, start) + invcolors + buff.toString('hex', offset, buff.readInt32LE(2));
    buff = Buffer.from(buff, 'hex');
    return buff;
  }
};