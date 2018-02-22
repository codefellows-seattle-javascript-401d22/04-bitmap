'use strict';

const fs = require('fs');

module.exports = function (path, buff, callback) {
  fs.writeFile(path, buff, function (err, data) {
    if (err) return callback(err);
    return callback(null, data);
  });
};