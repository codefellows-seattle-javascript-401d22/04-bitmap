'use strict';

const reader = require('../lib/reader.js');
require('jest');

describe('Reader Module', function() {
  describe('with improper incoming file path', function(){
    it('should return an error', function(done){
      reader(`${__dirname}/badfilename.txt`, function(err){
        expect(err).toBeTruthy();
        expect(err.code).toEqual('ENOENT');
        done();
      });
    });
  });
  describe('with proper incoming file path', function(){
    it('should return an 8-bit per pixel bitmap buffer', function(done){
      reader(`${__dirname}/../data/palette-bitmap.bmp`, function(err, data){
        expect(err).toEqual(null);
        expect(Buffer.isBuffer(data)).toBeTruthy();
        expect(data.toString('utf-8', 0, 2)).toBe('BM');
        expect(data.readInt32LE(2)).toEqual(11078);
        done();
      });
    });
  });
});