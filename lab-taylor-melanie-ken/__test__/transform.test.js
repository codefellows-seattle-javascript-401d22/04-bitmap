'use strict';

const fs = require('fs');
const bitMapWriter = require('../lib/bitmap-writer.js');
const constructor = require('../lib/bitmap-constructor.js');
const transform = require('../lib/transform.js');
require('jest');

let bm = fs.readFileSync(`${__dirname}/../data/palette-bitmap.bmp`);
// console.log('data in test:', bm);
let bitMap = constructor(bm);
// console.log('bitmap obj in test:', bitMap);

describe('File Reader/Writer Module', function() {
  describe('with an incorrect file path', function() {
    it('should return an error', function(done) {
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
      bitMapWriter(`${__dirname}/../data/palette-bitmap.bmp`, 'new', 'invert', function(err, data) {
        expect(err).toBe(null);
        expect(fs.writeFile).toBeCalled();
      });
      done();
    });
  });
});

describe('Constructor Module', function() {
  describe('with an improper file path', function() {
    it('should return an error', function(done) {
      constructor(`${__dirname}/notHere.txt`, function(err) {
        expect(err).toBeTruthy();
        expect(typeof err).toBe('object');
        expect(err.code).toBe('ENOENT');
      });
      done();
    });
  });
  describe('with the proper file path', function() {
    it('should return the content of the file', function(done) {
      constructor(`${__dirname}/../data/palette-bitmap.bmp`, function(err, data) {
        expect(err).toBe(null);
        expect(typeof data).toBe('data');
      });
      done();
    });
  });
});

describe('Transform Module', function() {
  describe('#invert', function() {
    describe('with an improper file path', function() {
      it('should return an error', function(done) {
        transform.invert(`${__dirname}/notta.txt`, function(err) {
          expect(err).toBeTruthy();
          expect(typeof err).toBe('object');
          expect(err.code).toBe('ENOENT');
        });
        done();
      });
    });
    describe('with the correct file path', function() {
      it('should return the content of the file', function(done) {
        transform.invert(bitMap, function(err, data) {
          expect(err).toBe(null);
          expect(typeof data).toBe('object');
          expect(data.pixels.slice(0,10)).toEqual('<Buffer 16 16 00 00 16 00 00 16 00 16>');
        });
        done();
      });
    });
  });
  describe('#diagonal', function() {
    describe('with an improper file path', function() {
      it('should return an error', function(done) {
        transform.diagonal(`${__dirname}/notta2.txt`, function(err) {
          expect(err).toBeTruthy();
          expect(typeof err).toBe('object');
          expect(err.code).toBe('ENOENT');
        });
        done();
      });
    });
    describe('with the correct file path', function() {
      it('should return the content of the file', function(done) {
        transform.diagonal(bitMap, function(err, data) {
          expect(err).toBe(null);
          expect(typeof data).toBe('object');
          expect(data.pixels.slice(0,10)).toEqual('<Buffer 00 00 14 01 14 1c 01 1c 14 01>');
        });
        done();
      });
    });
  });
  describe('#toLateEighties', function() {
    describe('with an improper file path', function() {
      it('should return an error', function(done) {
        transform.toLateEighties(`${__dirname}/notta3.txt`, function(err) {
          expect(err).toBeTruthy();
          expect(typeof err).toBe('object');
          expect(err.code).toBe('ENOENT');
        });
        done();
      });
    });
    describe('with the correct file path', function() {
      it('should return the content of the file', function(done) {
        transform.toLateEighties(bitMap, function(err, data) {
          expect(err).toBe(null);
          expect(typeof data).toBe('object');
          expect(data.colorTable.slice(0,10)).toEqual('<Buffer 9a 00 00 9d 34 20 a0 00 3c a3>');
        });
        done();
      });
    });
  });
  describe('#blkToWhite', function() {
    describe('with an improper file path', function() {
      it('should return an error', function(done) {
        transform.blkToWhite(`${__dirname}/notta.txt`, function(err) {
          expect(err).toBeTruthy();
          expect(typeof err).toBe('object');
          expect(err.code).toBe('ENOENT');
        });
        done();
      });
    });
    describe('with the correct file path', function() {
      it('should return the content of the file', function(done) {
        transform.blkToWhite(bitMap, function(err, data) {
          expect(err).toBe(null);
          expect(typeof data).toBe('object');
          expect(data.colorTable.slice(0,10).toEqual('<Buffer ff ff ff ff 34 20 22 ff 3c 28>'));
        });
        done();
      });
    });
  });
  describe('#greyscale', function() {
    describe('with an improper file path', function() {
      it('should return an error', function(done) {
        transform.greyscale(`${__dirname}/notta.txt`, function(err) {
          expect(err).toBeTruthy();
          expect(typeof err).toBe('object');
          expect(err.code).toBe('ENOENT');
        });
        done();
      });
    });
    describe('with the correct file path', function() {
      it('should return the content of the file', function(done) {
        transform.greyscale(bitMap, function(err, data) {
          expect(err).toBe(null);
          expect(typeof data).toBe('object');
          expect(data.colorTable.slice(0,10).toEqual('<Buffer 00 00 00 00 27 27 27 00 38 38>'));
        });
        done();
      });
    });
  });
  describe('#redAndBlack', function() {
    describe('with an improper file path', function() {
      it('should return an error', function(done) {
        transform.redAndBlack(`${__dirname}/notta.txt`, function(err) {
          expect(err).toBeTruthy();
          expect(typeof err).toBe('object');
          expect(err.code).toBe('ENOENT');
        });
        done();
      });
    });
    describe('with the correct file path', function() {
      it('should return the content of the file', function(done) {
        transform.redAndBlack(bitMap, function(err, data) {
          expect(err).toBe(null);
          expect(typeof data).toBe('object');
          expect(data.pixels.slice(0,10).toEqual('<Buffer 54 00 54 54 00 54 54 54 54 54>'));
        });
        done();
      });
    });
  });
});