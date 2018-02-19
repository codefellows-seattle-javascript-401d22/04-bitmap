'use strict';

const constructor = module.exports = function(data, err) {
  if(err) return err;
  function Bitmap(data) {
    this.size = data.readInt32LE(2);
    this.width = data.readInt32LE(18);
    this.height = data.readInt32LE(22);
    this.offset = data.readInt32LE(10);
    this.header = data.slice(0,54).toString('hex');
    this.colorTable = data.slice(54, this.offset);
    this.pixels = data.slice(this.offset,this.offset + this.size);
  }
  return new Bitmap(data);
};

