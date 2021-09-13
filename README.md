# convert-pro

[![nest badge](https://nest.land/badge-large.svg)](https://nest.land/package/convert-pro)
[![npm](https://img.shields.io/npm/dm/convert-pro)](https://npmjs.com/package/convert-pro)
[![npm](https://img.shields.io/npm/v/convert-pro)](https://npmjs.com/package/convert-pro)

[![GitHub issues](https://img.shields.io/github/issues/AliBasicCoder/convert-pro)](https://github.com/AliBasicCoder/convert-pro/issues)
[![GitHub forks](https://img.shields.io/github/forks/AliBasicCoder/convert-pro)](https://github.com/AliBasicCoder/convert-pro/network)
[![GitHub stars](https://img.shields.io/github/stars/AliBasicCoder/convert-pro)](https://github.com/AliBasicCoder/convert-pro/stargazers)
[![GitHub license](https://img.shields.io/github/license/AliBasicCoder/convert-pro)](https://github.com/AliBasicCoder/convert-pro/blob/master/LICENSE)

convert-pro is a package to convert between units that works on browser, node & deno

covers:
  - temperature
  - length
  - area
  - volume
  - time
  - mass
  - energy
  - frequency
  - pressure
  - degrees
  - bytes

## Usage

```js
// on node (commonjs)
const { default: convert } = require("convert-pro");
// or (es6)
import convert from "convert-pro";
// on deno (replace version with current version)
import convert from "https://x.nest.land/convert-pro@version/mod.ts";
// or
import convert from "https://deno.land/x/convert_pro@version/mod.ts";

// convert from m2 to cm2
convert.area("10 m2", "cm2"); // => 100000
// convert from bit to MiB (1024 base)
convert.bytes(`${10 ** 15} bit`, "MiB") // => 119209289.55078125
// convert degrees to rad
convert.bytes(`10 d`, "r") // => 0.17453
```

## options

### stringify

if true returns output in string (default: false)

example:
```js
import convert from "convert-pro";

convert.length("1 m", "cm", { stringify: true }) // => "100 cm"
convert.length("1 m", "cm") // => 100
```

### accuracy

this options is the accuracy of the size or
how many **digits** are there after the dot

example:

```js
import convert from "convert-pro";

convert.bytes("1024 byte", { accuracy: 0, stringify: true }); // => "1 KB"
```

### shortcut

this option tels the function to use the **shortcuts**
or the **words**

example:

```js
import convert from "convert-pro";

convert.area("100 m2", "cm2", { stringify: true, shortcut: false }); // => "1000000 Square Centimeters"
```

### lowerCase

this option tels the function to use **lower case** letters

```js
import convert from "convert-pro";

convert.mass("10 kg", "g", { lowerCase: true }); // => 1 kb
```

## License

Copyright (c) 2021 AliBasicCoder
