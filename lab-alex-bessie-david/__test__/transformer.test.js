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
    beforeAll((done) => {
      this.originalbuff = fs.readFile(`${__dirname}/test-data/palette-bitmap.bmp`, function(err, data){
        if(err) console.error(err);
        return data;
      });
      this.blackoutbuff = fs.readFile(`${__dirname}/test-data/blackout.bmp`, function(err, data){
        if(err) console.error(err);
        return data;
      });
      this.invertbuff = fs.readFile(`${__dirname}/test-data/invert.bmp`, function(err, data){
        if(err) console.error(err);
        return data;
      });
      this.grayscalebuff = fs.readFile(`${__dirname}/test-data/grayscale.bmp`, function(err, data){
        if(err) console.error(err);
        return data;
      });
      // var invcolorsbuff = fs.readFile(`${__dirname}/test-data/invcolors.bmp`, function(err, data){
      //   if(err) console.error(err);
      //   return data;
      // });
      done();
    });
    // describe('#blackout', () => {
    //   it('should return a blackout bitmap buffer', (done) => {
    //     expect(() => transformer(this.originalbuff, 'blackout')).toBe(this.blackoutbuff);
    //     done();
    //   });
    //   it('should return an invert bitmap buffer', (done) => {
    //     expect(testinvertbuff).toEqual(invertbuff);
    //     done();
    //   });
    //   it('should return a grayscale bitmap buffer', (done) => {
    //     expect(testgrayscalebuff).toEqual(grayscalebuff);
    //     done();
    //   });
    // });
  });
});