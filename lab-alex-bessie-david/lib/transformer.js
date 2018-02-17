'use strict';

const transformer = module.exports = function(buff, transformType){
    switch(transformType){
        case 'blackout':
            var start = buff.readInt32LE(14) + 15;
            var offset = buff.readInt32LE(10);
            for (let i = start; i < offset; i++){
                buff[i] = 0;
            }
            return buff;
        case 'invert':
            var start = buff.readInt32LE(10);
            console.log('file size:', buff.readInt32LE(2));
            console.log('start:', start);
            var end = start + buff.readInt32LE(34);
            console.log('end:', end);
            console.log('original buff string length: ', buff.toString().length);
            var pixels = buff.toString('hex', start, end).match(/.{8}/g).reverse().join('').match(/.{2}/g);
            console.log('pixels:', pixels.length);
            buff = buff.toString('hex').match(/.{2}/g);
            console.log('original buff:', buff.length);
            buff.splice(start, (end - start + 1));
            buff = buff.concat(pixels);
            console.log('second buff:', buff.length);
            buff = buff.toString().replace(/[,]/g, '');
            buff = Buffer.from(buff, 'hex');
            console.log('buffend', buff);
            return buff;
    }
}