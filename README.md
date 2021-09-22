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
convert.bytes([10 ** 15, "bit"], "MiB"); // => 119209289.55078125
// convert degrees to rad
convert.bytes(`10 d`, "r"); // => 0.17453
// convert multiple units
// 10 ft + 100 inch + 1 km + 1 ft = 3300.1732283464567 ft
convert.length([10, "FT", 100, "IN", 1, "KM", 1, "FT"], "FT"); // => 3300.1732283464567
// or
convert.length("10 ft 100 in 1 km", "ft"); // => 3299.1732283464567
```

## Notes on convert.degrees

1. you could write `10.2d1.2'1.3''` or `10.2°1.2'1.3''` (the numbers here could be replaced with other numbers) instead of `10.2 d 1.2 arcminute 1.3 arcsecond`
1. you could use multiple units at once
1. convert.degrees is the ONLY function allows number and unit names to be directly added together like `10radians`

```js
// examples
convert.degrees("10.2d1.2'1.3''", "radians"); // => 0.178378952

convert.degrees("10.2d1.2'1.3'' 10r", "radians"); // => 10.178378952
```

## options

### stringify

if true returns output in string (default: false)

example:

```js
import convert from "convert-pro";

convert.length("1 m", "cm", { stringify: true }); // => "100 cm"
convert.length("1 m", "cm"); // => 100
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
