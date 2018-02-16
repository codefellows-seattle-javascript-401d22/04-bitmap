'use strict';

module.exports = function(data) {
  function Bitmap (data) {
    this.size = data.readInt32LE(34);
    console.log('size:', this.size);
    this.width = data.readInt32LE(18);
    console.log('width:', this.width);
    this.height = data.readInt32LE(22);
    console.log('height', this.height);
    this.pixelAddress = data.readInt32LE(10);
    this.pixels = data.toString('hex', this.pixelAddress, (this.pixelAddress + this.size));

    
    this.header = data.slice(0, 54).toString('hex');
    this.colorPalette = data.slice(54, this.pixelAddress).toString('hex');
    this.pixelArray = this.pixels.match((/.{1,8}/g));
    this.end = data.slice(this.pixelAddress + this.size, data.length).toString('hex');
  }

  return new Bitmap(data);
}