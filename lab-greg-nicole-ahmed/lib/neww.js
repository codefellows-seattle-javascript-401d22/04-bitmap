'use strict';

module.exports = function(bitmapObj){
    
    for (var i = bitmapObj.pixelArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = bitmapObj.pixelArray[i];
        bitmapObj.pixelArray[i] = bitmapObj.pixelArray[j];
        bitmapObj.pixelArray[j] = temp;
    }
    console.log('new pixel Array', bitmapObj.pixelArray);
    return {colorString: bitmapObj.pixelArray.join(''), colorPalette: bitmapObj.colorPalette}
}