'use strict';

const writer = require('./lib/bitmap-writer.js');
const transform = require('./lib/transform.js');
let bm =`./data/palette-bitmap.bmp`;

/* 
## Minimum Requirements
* The CLI should log useful `Error` messages if used incorrectly
* The CLI should log a success message on completion
*/

/* CLI
Argument 1 - Input file path - ./data/palette-bitmap.bmp - process.argv[2]
Argument 2 - Output file name - hello - - process.argv[3]
Argument 3 - Transform method name (ex. transform.toLateEighties)
*/

process.argv.forEach((val, idx) => {
  // console.log(`${idx}: ${val}`);
});

writer(process.argv[2], process.argv[3], process.argv[4]);