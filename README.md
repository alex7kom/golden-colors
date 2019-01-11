# golden-colors

Random color generation for JavaScript and Node.js based on [How To Generate Random Colors Programmatically](http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/) by __Martin Ankerl__. Colors generated using Golden ratio conjugate can be used as background colors for easily readable labels, buttons, etc.

## Installation

Download [the latest version](https://github.com/Alex7Kom/golden-colors/releases/latest) from Github or use npm or Bower:

```
npm install golden-colors
```

Then just include `dist/golden-colors.js` or `dist/golden-colors.min.js` in your html. AMD-version of the library that also supports Browserify also available as `dist/golden-colors-amd.js`/`dist/golden-colors-amd.min.js`.

and require it in your code:

```js
var goldenColors = require('golden-colors');
```

## API

### goldenColors

There are three functions for color generation. All three functions return an instance of [WebColor](#webcolor).

#### getHsvGolden(s, v)

Random color in [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) system with random values for hue normalized using [Golden ratio conjugate](https://en.wikipedia.org/wiki/Golden_ratio#Golden_ratio_conjugate) with specified saturation and value.

#### getHsvSimple(s, v)

Random color in [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) system with random values for hue with specified saturation and value.

#### getHsvGoldenDistributed(s, v)

Random initial color in [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) with specified saturation and value followed by a better distribution of colors.

#### getNaive()

Just random values for R, G, B.

### WebColor

An object with R, G, and B values that can be converted into CSS2-compatible string.

#### toRgb()

Returns an Array of `[r, g, b]` with decimal values.

#### toRgbString()

Returns a String of `rgb(r, g, b)` with decimal values.

#### toHexString()
#### toString()
#### toJSON()

Returns a String of `#rgb` with hexadecimal values.

## License

The MIT License (MIT)

Copyright (c) 2014-2015 Alexey Komarov <alex7kom@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
