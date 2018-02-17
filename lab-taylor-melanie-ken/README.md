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
* **data/** - contains original bitmap file
* **\_\_test\_\_/** - contains unit tests

## Installation

## CLI
To use the Command Line Interface, the user must first type `node index.js` and enter three arguments:
* The original bitmap file path, using the following structure. Ex: **./data/palette-bitmap.bmp**
* The output file _name_ (not the entire path). Ex: **new**
* The transform method name. See below for all transform meethods. Ex: invert

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
