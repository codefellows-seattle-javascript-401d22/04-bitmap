'use strict';

module.exports = function(data) {
  function Bitmap (data) {
    this.size = data.readInt32LE(34);
    this.width = data.readInt32LE(18);
    this.height = data.readInt32LE(22);
    this.pixelAddress = data.readInt32LE(10);
    this.pixels = data.toString('hex', this.pixelAddress);
    this.header = data.slice(0, 54).toString('hex');
    this.colorPalette = data.toString('hex', 54, this.pixelAddress);
    this.colorPaletteArray = this.colorPalette.match((/.{1,8}/g));
    //console.log('colorPalette:', this.colorPaletteArray);
    this.pixelArray = this.pixels.match((/.{1,2}/g));
    //console.log('colorPalette:', this.pixelArray);
    this.end = data.slice(this.pixelAddress + this.size, data.length).toString('hex');
  }

  return new Bitmap(data);
}