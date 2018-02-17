'use strict';

module.exports = function(bitmapObj){
    let middleX = Math.floor(bitmapObj.width/2);
    console.log('pixel array length', bitmapObj.pixelArray.length);
    for(var i = middleX; i < bitmapObj.pixelArray.length; i += bitmapObj.width){
      bitmapObj.pixelArray[i] = '1c';
      bitmapObj.pixelArray[i+1] = '1c';
      bitmapObj.pixelArray[i+2] = '1c';
      bitmapObj.pixelArray[i-1] = '1c';
      bitmapObj.pixelArray[i-2] = '1c';
    }

    let crossStart = ((Math.floor(bitmapObj.height/2) * bitmapObj.width) - 200);
    let crossEnd = ((Math.floor(bitmapObj.height/2) * bitmapObj.width) + 200);

    for(var j = crossStart; j < crossEnd; j++) {
      bitmapObj.pixelArray[j] = '1c';
    }

    for(var k = 0; k < bitmapObj.pixelArray.length - 3; k+= 101) {
      bitmapObj.pixelArray[k] = '3f';
      bitmapObj.pixelArray[k+1] = '3f';
      bitmapObj.pixelArray[k+2] = '3f';
      bitmapObj.pixelArray[k+3] = '3f';
    }

    for(var l = 99; l < bitmapObj.pixelArray.length; l+= 99) {
      bitmapObj.pixelArray[l] = '3f';
      bitmapObj.pixelArray[l-1] = '3f';
      bitmapObj.pixelArray[l-2] = '3f';
      bitmapObj.pixelArray[l-3] = '3f';

    }

    return {colorString: bitmapObj.pixelArray.join(''), colorPalette: bitmapObj.colorPalette}
}