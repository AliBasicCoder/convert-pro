type unitDef = [string, string, string, ...number[]];
type OptionsBase = {
  base: number;
  lowerCase: boolean;
  shortcut: boolean;
  accuracy: number;
};
type OptionWithSt = OptionsBase & { stringify: true };
type OptionWithoutSt = OptionsBase & { stringify?: false };
type Options = OptionWithSt | OptionWithoutSt;
type byteUnits =
  | "B"
  | "KB"
  | "MB"
  | "GB"
  | "PB"
  | "KiB"
  | "MiB"
  | "GiB"
  | "TiB"
  | "PiB";
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

export const area = higherDim(length, 2);

export const volume = higherDim(length, 3);

export const time: unitDef[] = [
  ["Femtosecond", "Femtoseconds", "FS", 1e-15, 11],
  ["Picosecond", "Picoseconds", "PS", 1e-12],
  ["Nanosecond", "Nanoseconds", "NS", 1e-9],
  ["Microsecond", "Microseconds", "µS", 1e-6],
  ["Millisecond", "Milliseconds", "MS", 0.001],
  ["Second", "Seconds", "S", 1],
  ["Minute", "Minutes", "Min", 60],
  ["Hour", "Hours", "H", 3600],
  ["Day", "Days", "H", 86400],
  ["Week", "Weeks", "H", 604800],
  ["Month", "Months", "M", 2628000],
  ["Year", "Years", "Y", 31556952],
  ["Century", "Centuries", "Cn", 3155695200],
];

export const temperature: unitDef[] = [
  ["Kelvin", "Kelvin", "K", 1, 0],
  // from cel to kel
  ["Celsius", "Celsius", "C", 1, 273.15],
  ["Fahrenheit", "Fahrenheit", "F", 0.55555556, 255.37222],
  ["Rankine", "Rankine", "R", 0.555556, 0],
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
  ["degree", "degrees", "d", 1],
  ["radian", "radians", "r", 180 / Math.PI],
  ["gradian", "gradians", "g", 0.9],
  ["miliradian", "miliradians", "mrad", 180 / Math.PI / 1000],
  ["arcminute", "arcminutes", "'", 1 / 60],
  ["arcsecond", "seconds", "''", 1 / 3600],
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
  ) => [number, number]
) {
  return (
    from: number | string | BigInt,
    toOrOptions?: Partial<Options> | T,
    maybeOptions?: Partial<Options>
  ) => {
    const options = Object.assign(
      {},
      dOp,
      typeof toOrOptions === "object" ? toOrOptions : maybeOptions
    );
    const to = typeof toOrOptions === "object" ? undefined : toOrOptions;
    if (typeof from === "bigint") from = Number(from);
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
      const [value, unitIndex] = stringToAmount(unitGroup, from);
      if (to) {
        const unit2Index = unitIndexByName(unitGroup, to);
        const [value2, index] = convert(
          unitGroup,
          [value, unitIndex],
          unit2Index
        );

        if (options.stringify)
          return amountToString(unitGroup, [value2, index], options);

        return value2;
      }

      return value * unitGroup[unitIndex][3];
    }
  };
}

export function stringToAmount(unitGroup: unitDef[], str: string) {
  const regex = /([0-9.]*) ([\w ]*)/;
  const match = str.match(regex);
  if (!match) throw new Error("Invalid String");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, value, unitName] = match;
  const unitIndex = unitIndexByName(unitGroup, unitName);
  if (unitIndex === -1) throw new Error(`Unknown Unit: '${unitName}'`);

  return [Number(value), unitIndex];
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

export const convertSize = convertCreator<byteUnits>(
  bytes,
  1,
  convertBet,
  findBestBytes
);

const convert = {
  temperature: convertCreator(temperature, 0, convertT),
  length: convertCreator(length, 6, convertBet, findBest),
  area: convertCreator(area, 6, convertBet, findBest),
  volume: convertCreator(volume, 6, convertBet, findBest),
  time: convertCreator(time, 5, convertBet, findBest),
  mass: convertCreator(mass, 5, convertBet, findBest),
  energy: convertCreator(energy, 0, convertBet, findBest),
  frequency: convertCreator(frequency, 0, convertBet, findBest),
  pressure: convertCreator(pressure, 0, convertBet),
  degrees: convertCreator(degrees, 0, convertBet),
  bytes: convertCreator<byteUnits>(bytes, 1, convertBet, findBestBytes),
};

export default convert;
