'use strict';

module.export = function(data) {
  function Bitmap (data) {
    this.size = data.readInt32LE(2);
    this.width = data.readInt32LE(18);
    this.height = data.readInt32LE(20);
    this.pixelAddress = data.readInt32LE(10);
    this.pixels = data.toString('hex', this.pixelAddress, (this.pixelAddress + this.size));
    this.pixelArray = this.pixels.match((/.{1,8}/g));
  }
}