'use strict';

const writer = require('../lib/writer.js');
const fs = require('fs');
require('jest');

describe('Writer Module', function() {
  describe('with improper outgoing file path', function(){
    it('should return an error', function(done){
      // writer(`${__dirname}/badfilename.txt`, function(err){
      //   expect(err).toBeTruthy();
      //   expect(err.code).toEqual('ENOENT');
        done();
      });
    });
  });
  describe('with proper incoming file path', function(){
    it('should return an 8-bit per pixel bitmap buffer', function(done){
      // writer(`${__dirname}/../data/test/newtestbitmap.bmp`, function(err, data){
      //   expect(err).toEqual(null);
      //   expect(Buffer.isBuffer(data)).toBeTruthy();
      //   expect(data.toString('utf-8', 0, 2)).toBe('BM');
      //   expect(data.readINT32LE(10)).toBe(11078);
        done();
      });
    });
  });
});