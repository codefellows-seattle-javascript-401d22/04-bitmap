'use strict';

module.exports = function(bitmapObj) {
  let newPalette = bitmapObj.colorPaletteArray.map((x) => {
    let colorArr = x.match((/.{1,2}/g));
    for(var j = 0; j < colorArr.length; j++) {
      colorArr[j] = parseInt(colorArr[j], 16);
      if (colorArr[j] >= 40) {
        colorArr[j] = colorArr[j] - 40;
      } else {
        colorArr[j] = 0;
      }
      colorArr[j] = colorArr[j].toString(16);
      if(colorArr[j].split('').length === 1) {
        let str = '0';
        str += colorArr[j];
        colorArr[j] = str;
      }
    }
    let hexString = colorArr.join('');
    return hexString;
  })

  console.log(newPalette);

  return {colorString: bitmapObj.pixelArray.join(''), colorPalette: newPalette.join('')}
}