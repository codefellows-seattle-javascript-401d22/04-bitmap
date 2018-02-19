'use strict';

const reader = require('../lib/read-write-file.js'); 
require('jest');


describe('Reader Module', function() {
  describe('With an improper file path', function() {
    it('should return an error', function(done) {
      reader(`${__dirname}/notafile.js`, function(err) {
        expect(err).toBeTruthy();
        expect(typeof err).toBe('object');
        expect(err.code).toBe('ENOENT');
      })
      done();
    })
  })
})