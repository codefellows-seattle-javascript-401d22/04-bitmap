'use strict';

module.exports = function(buff, transformType){
  switch(transformType){
  case 'blackout':
    var start = buff.readInt32LE(14) + 14;
    var offset = buff.readInt32LE(10);
    for (let i = start; i < offset; i++){
      buff[i] = 0;
    }
    return buff;
  case 'invert':
    start = buff.readInt32LE(10);
    console.log('file size:', buff.readInt32LE(2));
    console.log('start:', start);
    var end = start + buff.readInt32LE(34);
    console.log('end:', end);
    console.log('original buff string length: ', buff.toString().length);
    var pixels = buff.toString('hex', start, end).match(/.{8}/g).reverse().join('').match(/.{2}/g);
    console.log('pixels:', pixels.length);
    buff = buff.toString('hex').match(/.{2}/g);
    console.log('original buff:', buff.length);
    buff.splice(start, (end - start + 1));
    buff = buff.concat(pixels);
    console.log('second buff:', buff.length);
    buff = buff.toString().replace(/[,]/g, '');
    buff = Buffer.from(buff, 'hex');
    console.log('buffend', buff);
    return buff;
  case 'grayscale':
    start = buff.readInt32LE(14) + 14;
    offset = buff.readInt32LE(10);
    var colors = buff.toString('hex', start, offset).match(/.{8}/g);
    console.log('beforecolors', colors.length);
    // Looking at the below stack overflow helped me figure out hex to decimal
    // https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
    // The website below is where I got the math for grayscale conversion
    // https://www.johndcook.com/blog/2009/08/24/algorithms-convert-color-grayscale/
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
    console.log('aftercolors:', graycolors);
    graycolors = graycolors.join('');
    console.log('graycolors.length:', graycolors.length);
    buff = buff.toString('hex', 0, start) + graycolors + buff.toString('hex', offset, buff.readInt32LE(2));
    console.log(buff.length);
    buff = Buffer.from(buff, 'hex');
    console.log(buff.length);
    return buff;
 
  case 'invcolors':
    start = buff.readInt32LE(14) + 14;
    offset = buff.readInt32LE(10);
    var colors = buff.toString('hex', start, offset).match(/.{8}/g);
    console.log('beforecolors', colors.length);
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
    console.log('aftercolors:', invcolors);
    invcolors = invcolors.join('');
    console.log('invcolors.length:', invcolors.length);
    buff = buff.toString('hex', 0, start) + invcolors + buff.toString('hex', offset, buff.readInt32LE(2));
    console.log(buff.length);
    buff = Buffer.from(buff, 'hex');
    console.log(buff.length);
    return buff;
  }
  return buff;
};