'use strict';

const readFileHelper = require('../lib/cross-section.js');
require('jest');

describe('#cross-section', function() {
  describe('with improper file paths', function() {
    it('should return an error', function(done) {
      readFileHelper([`${__dirname}/dont-exist.txt`], function(err) {
        expect(err).toBeTruthy();
        expect(err.code).toEqual('ENOENT');
        done();
      });
    });
  });
  describe('with proper file paths', function() {
    it('should return a proper file name', function() {
      expect(err).toBe(false);
      expect()
    })
    `${__dirname}/../data/pallette-bitmap.bmp`,
     done();
    });
    it('should have the correct order of hex strings', done => {
      var expectedResult = [];
      readFileHelper(this.paths, function(err, data) {
        console.log('data array', data);
        expect(err).toEqual(null);
        expect(data[0]).toEqual(expectedResult[0]);
        expect(data[0]).toEqual(expectedResult[1]);
        expect(data[0]).toEqual(expectedResult[2]);
        done();
      });
    });
  });
});