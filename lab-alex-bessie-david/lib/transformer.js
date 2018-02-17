'use strict';

const transformer = module.exports = function(buff, transformType){
    switch(transformType){
        case 'blackout':
            var start = buff.readInt32LE(14) + 14;
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
            var pixels = buff.toString('hex', start, end).match(/.{8}/g).reverse().join('').match(/.{2}/g).join('');
            console.log('pixels:', pixels);
            buff = buff.toString('hex').match(/.{2}/g);
            console.log('original buff:', buff);
            buff.splice(start, (end - start + 1));
            console.log('second buff:', buff);
            buff = buff.toString().replace(/[,]/g, '').concat(pixels);;
            buff = Buffer.from(buff, 'hex');
            console.log('buffend', buff);
    }
}