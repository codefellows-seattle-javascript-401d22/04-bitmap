'use strict';


const fs = require('fs');


const bitMapReader = module.exports = function(file, callback) {
    fs.readFile(file, function(err,data) {
        if(err) return callback(err);

        //console.log(data);
        return data;
    })
}
    



            
       
       

       
   