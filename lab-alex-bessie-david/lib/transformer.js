'use strict';

const transformer = module.exports = function(buff, transformType){
    switch(transformType){
        case 'blackout':
            let start = buff.readInt32LE(14) + 14;
            let offset = buff.readInt32LE(10);
            for (let i = start; i < offset; i++){
                buff[i] = 0;
            }
            return buff;
    }
}