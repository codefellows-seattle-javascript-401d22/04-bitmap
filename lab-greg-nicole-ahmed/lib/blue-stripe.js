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

    console.log('pixel array length', bitmapObj.pixelArray.length);
    console.log('image height', bitmapObj.height);
    console.log('image width', bitmapObj.width);

    // console.log('bitmapObj:', bitmapObj);
    return {colorString: bitmapObj.pixelArray.join(''), colorPalette: bitmapObj.colorPalette}
}