'use strict';

module.exports = function (buff, transformType) {
  switch (transformType) {
  case 'blackout':
    var start = buff.readInt32LE(14) + 14;
    var offset = buff.readInt32LE(10);
    for (let i = start; i < offset; i++) {
      buff[i] = 0;
    }
    return buff;
  }
};