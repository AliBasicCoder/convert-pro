// this files auto gen some types
import * as md from "./convert.ts";

for (const key in md) {
  const item = md[key];
  if (!Array.isArray(item)) continue;
  let str = `type ${key}Units = `;
  for (const item2 of item) {
    str += `"${item2[2]}" | `;
  }
  str = str.slice(0, str.length - 3) + ";";
  console.log(str);
}