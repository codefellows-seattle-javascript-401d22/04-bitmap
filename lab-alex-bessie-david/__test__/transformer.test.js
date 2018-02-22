'use strict';

const transformer = require('../lib/transformer.js');
const fs = require('fs');
require('jest');

describe('Transformer Module', function() {
  describe('if passed improper buffer', () => {
    it('should throw an error', (done) => {
      let buff = [];
      expect(() => {transformer(buff, 'invert');}).toThrow('not a buffer');      
      done();
    });
  });
  describe('if passed proper buffer', () => {
    describe('#notsupported', () => {
      it('should throw an error', (done) => {
        fs.readFile(`${__dirname}/test-data/palette-bitmap.bmp`, function(err, data){
          expect(() => transformer(data,'notsupported')).toThrow('transform type not supported');
          done();
        });
      });
    });
    describe('#blackout', () => {
      it('should return a blackout bitmap buffer', (done) => {
        fs.readFile(`${__dirname}/test-data/palette-bitmap.bmp`, function(err, data){
          fs.readFile(`${__dirname}/test-data/blackout.bmp`, function(err, data2){
            let blackout = transformer(data, 'blackout');
            expect(blackout).toEqual(data2);
            done();
          });
        });
      });
    });
    describe('#invert', () => {
      it('should return a invert bitmap buffer', (done) => {
        fs.readFile(`${__dirname}/test-data/palette-bitmap.bmp`, function(err, data){
          fs.readFile(`${__dirname}/test-data/invert.bmp`, function(err, data2){
            let invert = transformer(data, 'invert');
            expect(invert).toEqual(data2);
            done();
          });
        });
      });
    });
    describe('#grayscale', () => {
      it('should return a grayscale bitmap buffer', (done) => {
        fs.readFile(`${__dirname}/test-data/palette-bitmap.bmp`, function(err, data){
          fs.readFile(`${__dirname}/test-data/grayscale.bmp`, function(err, data2){
            let grayscale = transformer(data, 'grayscale');
            expect(grayscale).toEqual(data2);
            done();
          });
        });
      });
    });
    describe('#invcolors', () => {
      it('should return a invcolors bitmap buffer', (done) => {
        fs.readFile(`${__dirname}/test-data/palette-bitmap.bmp`, function(err, data){
          fs.readFile(`${__dirname}/test-data/invcolors.bmp`, function(err, data2){
            let invcolors = transformer(data, 'invcolors');
            expect(invcolors).toEqual(data2);
            done();
          });
        });
      });
    });
  });
});