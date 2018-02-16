'use strict';

module.exports = function(bitmapObj){
    let middleX = Math.floor(bitmapObj.width/2);
    console.log('middleX:', middleX);
    
    for(var i = middleX; i < bitmapObj.pixelArray.length; i += bitmapObj.height){
        bitmapObj.pixelArray[i] = 'ffffffff';
        bitmapObj.pixelArray[i+1] = 'ffffffff';
        bitmapObj.pixelArray[i+2] = 'ffffffff';
        bitmapObj.pixelArray[i-1] = 'ffffffff';
        bitmapObj.pixelArray[i-2] = 'ffffffff';
    }
    console.log('bitmapObj:', bitmapObj);
    return {colorString: bitmapObj.pixelArray, colorPalette: bitmapObj.colorPalette}
}