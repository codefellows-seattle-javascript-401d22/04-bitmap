'use strict';

module.exports = function(bitmapObj) {
  let colorString = '';
  let colorPalette = '';
  let numOfZeros = bitmapObj.pixelArray.length * 8;

  for(var i = 0; i < numOfZeros; i++) {
    colorString += '0';
  }

  for(var j = 0; j < bitmapObj.colorPalette.length; j++) {
    colorPalette += 'f';
  }

  return {colorString: colorString, colorPalette: colorPalette};
}