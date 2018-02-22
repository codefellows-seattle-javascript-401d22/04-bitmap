'use strict';

const writer = require('../lib/writer.js');
require('jest');

describe('Writer Module', function() {
  describe('with improper outgoing file path', function(){
    it('should return an error', function(done){
      // writer(`${__dirname}/badfilewrite.txt`, buff, function(err, callback) {
      //   expect(err).toBeTruthy();
      // });
      done();
    });
  });
  describe('with proper incoming file path', function(){
    it('should return an 8-bit per pixel bitmap buffer', function(done){
      // write tests here

      done();
    });
  });
});
