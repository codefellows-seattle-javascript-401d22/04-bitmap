# Code Fellows 401 - Lab 04: Bitmap Transformer

## Directory Structure
* **README.md**
* **.gitignore**
* **.eslintrc**
* **.eslintignore**
* **package.json**
  * a `lint` script has been configured for running eslint
  * a `test` script has been configured for running jest
* **lib/** - contains module definitions
  * **bitmap-writer.js** - with an arity of three, this module receives the originating file path, the new file's name, and the desired transformation method. Within this function, the data from a read file is passed through a constructor, passed through a transformation method, and then written to a new file
  * **bitmap-constructor.js** - with an arity of one, this module receives data from the bitmap reader/writer and instantiates a bitmap object, then passing it back to the original module
  * **transform.js** - with an arity of one, this module receives the instantiated bitmap object from the bitmap reader/writer module and contains 6 transform methods (see below for more details) that return data back to the originating file
* **data/** - contains original bitmap file
* **\_\_test\_\_/** - contains unit tests

## Installation
1. To install this bitmap transformer, download the files from this Bitmap Transformer repository: [https://github.com/TrrLrr/04-bitmap](https://github.com/TrrLrr/04-bitmap)
2. `cd` to the repository directory and run `npm i`

## CLI
To use the Command Line Interface, the user must first type `node index.js` and enter three arguments:
* The original bitmap file path, using the following structure. Ex: **./data/palette-bitmap.bmp**
* The output file _name_ (not the entire path). Ex: **new**
* The transform method name. See below for all transform meethods. Ex: **invert**

Example:
```
node index.js ./data/palette-bitmap.bmp new greyscale
```

## Transform Methods
* **blkToWhite** - All black values are changed to white.
* **toLateEighties** - Changes the original bitmap to a rad combination of teals, pink, and purple.
* **invert** - Simultaneously flips and mirrors the original file.
* **diagonal** - Overlays vertical and diagonal stripes over the original image. 
* **redAndBlack** - Transforms lower half of the original bitmap image to red and black values only.
* **greyscale** - Transforms original bitmap to greyscale.

## Contributors
Taylor Stemple, Melanie Cohen, and Ken Unterseher