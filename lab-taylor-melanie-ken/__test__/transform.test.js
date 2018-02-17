'use strict';

const bitMapWriter = require('../lib/bitmap-writer.js');
const bitmapConstructor = require('../lib/bitmap-constructor.js');
const bitmapTransform = require('../lib/transform.js');
require('jest');

describe('File Reader/Writer Module', function() {
  describe('with an incorrect file path', function() {
    it('should return an error', function(done) {
      // assertions
      bitMapWriter(`${__dirname}/nothingHere.txt`, function(err) {
        expect(err).toBeTruthy();
        expect(typeof err).toBe('object');
        expect(err.code).toBe('ENOENT');
      });
      done();
    });
  });
  describe('with proper file path', function() {
    it('should return the content of the file', function(done) {
      //assertions
      bitMapWriter(`${__dirname}/..lib/bitmap-writer.js`, function(err, data) {
        expect(err).toBe(null);
        expect(typeof data).toBe('data');
      });
      done();
    });
  });
});

// describe('Constructor Module', function() {
//   describe(' ', function() {
//     it(' ', function(done) {
//       // assertions
//       done();
//     });
//   });
//   describe(' ', function() {
//     it(' ', function(done) {
//       //assertions
//       done();
//     });
//   });
// });

// describe('Transform Module', function() {
//   describe(' ', function() {
//     it(' ', function(done) {
//       // assertions
//       done();
//     });
//   });
//   describe(' ', function() {
//     it(' ', function(done) {
//       //assertions
//       done();
//     });
//   });
// });