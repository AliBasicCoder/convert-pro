type unitDef = [string, string, string, ...number[]];
type OptionsBase = {
  base: number;
  lowerCase: boolean;
  shortcut: boolean;
  accuracy: number;
};
type OptionsWithSt = OptionsBase & { stringify: true };
type OptionsWithoutSt = OptionsBase & { stringify?: false };
type Options = OptionsWithSt | OptionsWithoutSt;
/* auto-gen start */
type areaUnits =
  | "FM2"
  | "PM2"
  | "NM2"
  | "uM2"
  | "MM2"
  | "CM2"
  | "M2"
  | "KM2"
  | "IN2"
  | "FT2"
  | "YD2"
  | "MI2"
  | "NMI2"
  | "AU2"
  | "LY2"
  | "PC2"
  | "Ac"
  | "Da"
  | "Are"
  | "Decare";
type bytesUnits =
  | "bit"
  | "B"
  | "KB"
  | "MB"
  | "GB"
  | "TB"
  | "PB"
  | "KiB"
  | "MiB"
  | "GiB"
  | "TiB"
  | "PiB";
type degreesUnits = "°" | "'" | "''" | "d" | "r" | "g" | "mrad";
type energyUnits =
  | "J"
  | "KJ"
  | "Cal"
  | "KCal"
  | "Wh"
  | "kWh"
  | "eV"
  | "KeV"
  | "MeV"
  | "MeV"
  | "TeV"
  | "Btu"
  | "ft-lb";
type forceUnits = "N" | "Dyn" | "KgF" | "LBF" | "Pdl";
type frequencyUnits = "Hz" | "kHz" | "mHz" | "gHz";
type lengthUnits =
  | "FM"
  | "PM"
  | "NM"
  | "uM"
  | "MM"
  | "CM"
  | "M"
  | "KM"
  | "IN"
  | "FT"
  | "YD"
  | "MI"
  | "NMI"
  | "AU"
  | "LY"
  | "PC";
type massUnits =
  | "Fg"
  | "Pg"
  | "Ng"
  | "ug"
  | "mg"
  | "g"
  | "Kg"
  | "T"
  | "ST"
  | "LB"
  | "OZ";
type pressureUnits = "atm" | "bar" | "Pa" | "psi" | "torr";
type temperatureUnits = "K" | "C" | "F" | "R" | "De";
type timeUnits =
  | "FS"
  | "PS"
  | "NS"
  | "uS"
  | "MS"
  | "S"
  | "Min"
  | "H"
  | "H"
  | "H"
  | "M"
  | "Y"
  | "Fn"
  | "Dec"
  | "Cn"
  | "Ml"
  | "Sk"
  | "TU";
type volumeUnits =
  | "FM3"
  | "PM3"
  | "NM3"
  | "uM3"
  | "MM3"
  | "CM3"
  | "M3"
  | "KM3"
  | "IN3"
  | "FT3"
  | "YD3"
  | "MI3"
  | "NMI3"
  | "AU3"
  | "LY3"
  | "PC3"
  | "L"
  | "ML"
  | "fl-oz"
  | "tbsp"
  | "tsp";
/* auto-gen end */
// default options
const dOp: Options = {
  base: 1000,
  lowerCase: false,
  shortcut: true,
  accuracy: 5,
};

function higherDim(unitGroup: unitDef[], dim: number) {
  const result: unitDef[] = [];
  let str = dim === 2 ? "Square " : "Cubic ";

  for (let i = 0; i < unitGroup.length; i++) {
    const item = unitGroup[i];
    result.push([str + item[0], str + item[1], item[2] + dim, item[3] ** dim]);
  }

  return result;
}

export const length: unitDef[] = [
  ["Femtometer", "Femtometers", "FM", 1e-15, 7],
  ["Picometer", "Picometers", "PM", 1e-12],
  ["Nanometer", "Nanometers", "NM", 1e-9],
  ["Micrometer", "Micrometers", "uM", 1e-6],
  ["Millimeter", "Millimeters", "MM", 0.001],
  ["Centimeter", "Centimeters", "CM", 0.01],
  ["Meter", "Meters", "M", 1],
  ["Kilometer", "Kilometers", "KM", 1000],
  ["Inch", "Inches", "IN", 0.0254],
  ["Foot", "Feet", "FT", 0.3048],
  ["Yard", "Yards", "YD", 0.9144],
  ["Mile", "Miles", "MI", 1609.344],
  ["Nautical Mile", "Nautical Miles", "NMI", 1852],
  ["Astronomical Unit", "Astronomical Units", "AU", 149597870700],
  ["Light Year", "Light Years", "LY", 9460730472580800],
  ["Parsec", "Parsecs", "PC", 30856775814913673],
];

export const area: unitDef[] = [
  ...higherDim(length, 2),
  ["Acre", "Acres", "Ac", 4046.86],
  ["Deciare", "Deciares", "Da", 10],
  ["Are", "Ares", "Are", 100],
  ["Decare", "Decares", "Decare", 1000],
];

export const volume: unitDef[] = [
  ...higherDim(length, 3),
  ["Liter", "Liters", "L", 0.001],
  ["MilliLiter", "MilliLiter", "ML", 1e-6],
  ["Fluid Once", "Fluid Once", "fl-oz", 0.00002841312686461145],
  ["Table Spoon", "Table Spoons", "tbsp", 0.000017758204290382156],
  ["Tea Spoon", "Tea Spoons", "tsp", 0.000005919401430127385],
];

export const time: unitDef[] = [
  ["Femtosecond", "Femtoseconds", "FS", 1e-15, 11],
  ["Picosecond", "Picoseconds", "PS", 1e-12],
  ["Nanosecond", "Nanoseconds", "NS", 1e-9],
  ["Microsecond", "Microseconds", "uS", 1e-6],
  ["Millisecond", "Milliseconds", "MS", 0.001],
  ["Second", "Seconds", "S", 1],
  ["Minute", "Minutes", "Min", 60],
  ["Hour", "Hours", "H", 3600],
  ["Day", "Days", "H", 86400],
  ["Week", "Weeks", "H", 604800],
  ["Month", "Months", "M", 2628000],
  ["Year", "Years", "Y", 31556952],
  ["Fortnight", "Fortnights", "Fn", 1209600],
  ["Decade", "Decades", "Dec", 315569520],
  ["Century", "Centuries", "Cn", 3155695200],
  ["Millennium", "Millenniums", "Ml", 31556952000],
  ["Shake", "Shakes", "Sk", 1e-8],
  ["Time Unit", "Time Units", "TU", 0.001024],
];

export const temperature: unitDef[] = [
  ["Kelvin", "Kelvin", "K", 1, 0],
  // from cel to kel
  ["Celsius", "Celsius", "C", 1, 273.15],
  ["Fahrenheit", "Fahrenheit", "F", 0.55555556, 255.37222],
  ["Rankine", "Rankine", "R", 0.555556, 0],
  ["Delisle", "Delisles", "De", 0.66666667, 339.816666667],
];

export const energy: unitDef[] = [
  ["Joule", "Joules", "J", 1, 1],
  ["Kilojoule", "Kilojoules", "KJ", 1000],
  ["Calorie", "Calories", "Cal", 4.184, 1],
  ["Kilocalorie", "Kilocalories", "KCal", 4184],
  ["Watt-hour", "Watt-hour", "Wh", 3600, 1],
  ["KiloWatthour", "KiloWatthour", "kWh", 3600000],
  ["Electronvolt", "Electronvolt", "eV", 1.602176634e-19, 4],
  ["Kilo-electronvolt", "Kilo-electronvolt", "KeV", 1.602176634e-16],
  ["Mega-electronvolt", "Mega-electronvolt", "MeV", 1.602176634e-13],
  ["Giga-electronvolt", "Giga-electronvolt", "MeV", 1.602176634e-10],
  ["Tera-electronvolt", "Tera-electronvolt", "TeV", 1.602176634e-7],
  ["British Thermal Unit", "British Thermal Units", "Btu", 1055.06],
  ["Foot-pound", "Foot-pounds", "ft-lb", 1.355818],
];

export const frequency: unitDef[] = [
  ["Hertz", "Hertz", "Hz", 1, 3],
  ["Kilohertz", "kilohertz", "kHz", 1000],
  ["Megahertz", "Megahertz", "mHz", 1000000],
  ["Gigahertz", "Gigahertz", "gHz", 1000000000],
];

export const mass: unitDef[] = [
  ["Femtogram", "Femtograms", "Fg", 1e-15, 6],
  ["Picogram", "Picograms", "Pg", 1e-12],
  ["Nanogram", "Nanograms", "Ng", 1e-9],
  ["Microgram", "Micrograms", "ug", 1e-6],
  ["Milligram", "Milligrams", "mg", 0.001],
  ["Gram", "Grams", "g", 1],
  ["Kilogram", "Kilograms", "Kg", 1000],
  ["Ton", "Tons", "T", 1000000],
  ["Stone", "Stones", "ST", 6350.29],
  ["Pound", "Pounds", "LB", 553.592],
  ["Ounce", "Ounces", "OZ", 28.3495],
];

export const pressure: unitDef[] = [
  ["atmosphere", "atmospheres", "atm", 1],
  ["Bar", "Bars", "bar", 0.986923],
  ["Pascal", "Pascals", "Pa", 0.00000986923],
  ["Pound per square inch", "Pound per square inch", "psi", 0.068046],
  ["torr", "torr", "torr", 0.00131579],
];

export const degrees: unitDef[] = [
  ["degree", "degrees", "°", 1],
  ["arcminute", "arcminutes", "'", 1 / 60],
  ["arcsecond", "seconds", "''", 1 / 3600],
  ["degree", "degrees", "d", 1],
  ["radian", "radians", "r", 180 / Math.PI],
  ["gradian", "gradians", "g", 0.9],
  ["milliradian", "milliradians", "mrad", 180 / Math.PI / 1000],
];

export const bytes: unitDef[] = [
  ["bit", "bits", "bit", 1 / 8],
  ["byte", "bytes", "B", 1],
  ["Kilobyte", "kilobytes", "KB", 1000],
  ["Megabyte", "Megabytes", "MB", 1000 ** 2],
  ["Gigabyte", "Gigabytes", "GB", 1000 ** 3],
  ["terabyte", "Terabytes", "TB", 1000 ** 4],
  ["petabyte", "Petabytes", "PB", 1000 ** 5],
  ["Kibibyte", "Kibibytes", "KiB", 1024],
  ["Mebibyte", "Mebibytes", "MiB", 1024 ** 2],
  ["Gibibyte", "Gibibytes", "GiB", 1024 ** 3],
  ["Tebibyte", "Tebibytes", "TiB", 1024 ** 4],
  ["Pebibyte", "Pebibytes", "PiB", 1024 ** 5],
];

export const force: unitDef[] = [
  ["Newton", "Newtons", "N", 1],
  ["Dyne", "Dynes", "Dyn", 1e-5],
  ["Kilogram-force", "Kilogram-force", "KgF", 9.80665],
  ["Pound-force", "Pound-force", "LBF", 4.44822],
  ["Poundal", "Poundals", "Pdl", 0.1382549544],
];

type Convert<T extends string> = {
  (from: number | BigInt, to?: Partial<Options>): string;
  (from: string, to?: Partial<Options>): number;
  (from: (number | BigInt | T)[], to?: Partial<OptionsWithoutSt>): number;
  (from: (number | BigInt | T)[], to?: Partial<OptionsWithSt>): string;
  (
    from: number | BigInt | string | (number | BigInt | T)[],
    to: T,
    options?: Partial<OptionsWithoutSt>
  ): number;
  (
    from: number | BigInt | string | (number | BigInt | T)[],
    to: T,
    options?: Partial<OptionsWithSt>
  ): string;
};

export function convertCreator<T extends string>(
  unitGroup: unitDef[],
  absoluteValueIndex: number,
  convert: (
    unitGroup: unitDef[],
    amount: [number, number],
    unitIndex: number
  ) => [number, number],
  findBest?: (
    unitGroup: unitDef[],
    amount: [number, number],
    options: Options
  ) => [number, number],
  stringToAmounts: (
    unitGroup: unitDef[],
    string: string
  ) => [number, number][] = dStringToAmounts
): Convert<T> {
  function converter(
    from: string | number | BigInt | (number | BigInt | T)[],
    toOrOptions?: T | Partial<Options>,
    maybeOptions?: Partial<Options>
  ) {
    const options = Object.assign(
      {},
      dOp,
      typeof toOrOptions === "object" ? toOrOptions : maybeOptions
    );
    const to = typeof toOrOptions === "object" ? undefined : toOrOptions;
    if (typeof from === "number") {
      if (!to)
        return amountToString(
          unitGroup,
          findBest
            ? findBest(unitGroup, [from, absoluteValueIndex], options)
            : [from, absoluteValueIndex],
          options
        );

      const unitIndex = unitIndexByName(unitGroup, to);
      const [value, index] = convert(
        unitGroup,
        [from, absoluteValueIndex],
        unitIndex
      );
      if (options.stringify)
        return amountToString(unitGroup, [value, index], options);

      return fix(value, options.accuracy);
    }
    if (typeof from === "string") {
      const arr = stringToAmounts(unitGroup, from);
      let value = 0;
      const toIndex = to ? unitIndexByName(unitGroup, to) : absoluteValueIndex;
      for (let i = 0; i < arr.length; i++) {
        value += convert(unitGroup, arr[i], toIndex)[0];
      }

      if (!(arr.length === 1 && !to) && options.stringify)
        return amountToString(unitGroup, [value, toIndex], options);

      return value;
    }
    if (Array.isArray(from)) {
      if (from.length < 2 || from.length & 1)
        throw new Error(
          "array must be string number pairs and have at least 1 pair"
        );
      const toIndex = to ? unitIndexByName(unitGroup, to) : absoluteValueIndex;
      let result = 0;
      for (let i = 0; i < from.length; i += 2) {
        const value = from[i];
        const unitName = from[i + 1];
        if (
          !(typeof value === "number" || typeof value === "bigint") ||
          typeof unitName !== "string"
        )
          throw new Error(
            "array must be string number pairs and have at least 1 pair"
          );

        result += convert(
          unitGroup,
          [Number(value), unitIndexByName(unitGroup, unitName)],
          toIndex
        )[0];
      }
      if (options.stringify)
        return amountToString(unitGroup, [result, toIndex], options);

      return result;
    }
    throw new Error("unreachable");
  }

  return converter as Convert<T>;
}

export function dStringToAmounts(unitGroup: unitDef[], str: string) {
  str = str.trim();
  const regex = /([0-9.]+) ([a-zA-Z ]+)/g;
  let arr;
  const result: [number, number][] = [];
  let first = false,
    last = 0;
  while ((arr = regex.exec(str)) !== null) {
    if (!first && arr.index !== 0)
      throw new Error(`Invalid String: \`${str}\` at range 0:${arr.index}`);
    first = true;
    last = arr.index + arr[0].length;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let [_, value, unitName] = arr;
    unitName = unitName.trimEnd();
    const unitIndex = unitIndexByName(unitGroup, unitName);
    if (unitIndex === -1) throw new Error(`Unknown Unit: '${unitName}'`);

    result.push([Number(value), unitIndex]);
  }

  if (result.length === 0 || last !== str.length)
    throw new Error(
      `Invalid String: \`${str}\` at range ${last}:${str.length}`
    );

  return result;
}

export function amountToString(
  unitGroup: unitDef[],
  amount: [number, number],
  options: { lowerCase?: boolean; shortcut?: boolean; accuracy?: number }
) {
  const [name, nameWithS, shortcut] = unitGroup[amount[1]];
  const value = options.accuracy ? fix(amount[0], options.accuracy) : amount[0];
  const unitName = lower(
    options.shortcut ? shortcut : amount[0] > 1 ? nameWithS : name,
    options.lowerCase
  );

  return `${value} ${unitName}`;
}

export function unitIndexByName(unitGroup: unitDef[], name: string) {
  name = name.toLowerCase();
  const unitIndex = unitGroup.findIndex(
    (item) =>
      item[0].toLowerCase() === name ||
      item[1].toLowerCase() === name ||
      item[2].toLowerCase() === name
  );
  if (unitIndex === -1) throw new Error(`Unit: '${name}' Not Found`);

  return unitIndex;
}

function lower(str: string, bool?: boolean) {
  return bool ? str.toLowerCase() : str;
}

/** function to approximate the number passed to a certain decimal */
export function fix(num: number, decimal: number) {
  const fixer = Math.pow(10, decimal);

  return Math.round(num * fixer) / fixer;
}

export function convertBet(
  unitGroup: unitDef[],
  amount: [number, number],
  unitIndex: number
): [number, number] {
  return [
    amount[0] * (unitGroup[amount[1]][3] / unitGroup[unitIndex][3]),
    unitIndex,
  ];
}

export function convertT(
  unitGroup: unitDef[],
  amount: [number, number],
  unitIndex: number
): [number, number] {
  const unit1 = unitGroup[amount[1]];
  const unit2 = unitGroup[unitIndex];
  const toK = amount[0] * unit1[3] + unit1[4];
  const kToUnit = (toK - unit2[4]) / unit2[3];

  return [kToUnit, unitIndex];
}

function findBestBytes(
  _: any,
  amount: [number, number],
  options: Options
): [number, number] {
  let value = amount[0];
  if (value < options.base) return [value, 1];
  const finalUnitIndex = options.base === 1000 ? 6 : 11;
  let index = options.base === 1000 ? 2 : 7;
  value = value / options.base;
  while (value >= options.base && index < finalUnitIndex) {
    value = value / options.base;
    index++;
  }

  return [value, index];
}

export function findBest(
  unitGroup: unitDef[],
  amount: [number, number]
): [number, number] {
  let index;
  for (let i = amount[1]; i >= 0; i--) {
    if (unitGroup[i][4] !== undefined) {
      index = i;
      break;
    }
  }
  if (index === undefined || unitGroup[index][4] + index < amount[1])
    return amount;

  let value = 0,
    index2 = 0;

  for (let i = index; i <= unitGroup[index][4] + index; i++) {
    value = amount[0] * (unitGroup[amount[1]][3] / unitGroup[i][3]);
    index2 = i;
    const c = unitGroup[i + 1][3] / unitGroup[i][3];
    if (c >= value && Math.abs(c - value) > 0.1) return [value, i];
  }

  return [value, index2];
}

export function stringToAmountsDegrees(_: any, str: string) {
  const dr = /([0-9.]+)[d°](([0-9.]+)')?(([0-9.]+)'')?/g;
  const de = /([0-9.]+)( ?)([a-zA-Z ]+)/g;
  const result: [number, number][] = [];
  let arr;
  while ((arr = de.exec(str)) !== null) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let [_, value, space, unitName] = arr;
    unitName = unitName.trimEnd();
    if (!space && unitName === "d") continue;
    const unitIndex = unitIndexByName(degrees, unitName);
    if (unitIndex === -1) throw new Error(`Unknown Unit: '${unitName}'`);

    result.push([Number(value), unitIndex]);
  }
  while ((arr = dr.exec(str)) !== null) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let [_, value1, _1, value2, _2, value3] = arr;

    result.push([Number(value1), 0]);
    if (value2) result.push([Number(value2), 1]);
    if (value3) result.push([Number(value3), 2]);
  }

  return result;
}

const convert = {
  temperature: convertCreator<temperatureUnits>(temperature, 0, convertT),
  length: convertCreator<lengthUnits>(length, 6, convertBet, findBest),
  area: convertCreator<areaUnits>(area, 6, convertBet, findBest),
  volume: convertCreator<volumeUnits>(volume, 6, convertBet, findBest),
  time: convertCreator<timeUnits>(time, 5, convertBet, findBest),
  mass: convertCreator<massUnits>(mass, 5, convertBet, findBest),
  energy: convertCreator<energyUnits>(energy, 0, convertBet, findBest),
  frequency: convertCreator<frequencyUnits>(frequency, 0, convertBet, findBest),
  pressure: convertCreator<pressureUnits>(pressure, 0, convertBet),
  degrees: convertCreator<degreesUnits>(
    degrees,
    0,
    convertBet,
    undefined,
    stringToAmountsDegrees
  ),
  bytes: convertCreator<bytesUnits>(bytes, 1, convertBet, findBestBytes),
  force: convertCreator<forceUnits>(force, 0, convertBet),
};

export default convert;
