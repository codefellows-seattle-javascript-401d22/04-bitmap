'use strict';

module.exports = function(array) {
  let colorString = '';
  let colorPalette = '';
  let numOfZeros = array.length * 8;



  for(var i = 0; i < numOfZeros; i++) {
    colorString += 'f';
  }

  for(var j = 0; j < 1024; j++) {
    colorPalette += 'f';
  }

  // console.log('black string', blackString);

  return {colorString: colorString, colorPalette: colorPalette};
}