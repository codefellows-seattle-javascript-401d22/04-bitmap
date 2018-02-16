'use strict';

module.exports = function(bitmapObj){
    let middleX = Math.floor(bitmapObj.width);
    console.log('middleX:', middleX);
    
    for(var i = middleX; i < bitmapObj.pixelArray.length; i += bitmapObj.width){
        console.log('pixel array length', bitmapObj.pixelArray.length);
        bitmapObj.pixelArray[i] = 'ffffffff';
        bitmapObj.pixelArray[i+1] = 'ffffffff';
        bitmapObj.pixelArray[i+2] = 'ffffffff';
        bitmapObj.pixelArray[i-1] = 'ffffffff';
        bitmapObj.pixelArray[i-2] = 'ffffffff';
        console.log('value of i', i);
    }
    // console.log('bitmapObj:', bitmapObj);
    return {colorString: bitmapObj.pixelArray.join(''), colorPalette: bitmapObj.colorPalette}
}