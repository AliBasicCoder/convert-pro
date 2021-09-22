// this files auto gen some types
import * as md from "./convert.ts";

let result = "";
for (const key in md) {
  const item = md[key];
  if (!Array.isArray(item)) continue;
  let str = `type ${key}Units = `;
  for (const item2 of item) {
    str += `"${item2[2]}" | `;
  }
  str = str.slice(0, str.length - 3) + ";\n";
  if (str.length > 80) {
    str = `type ${key}Units =`;
    for (const item2 of item) {
      str += `\n  | "${item2[2]}"`;
    }
    str += ";\n";
  }
  // console.log(str);
  result += str;
}

const file = Deno.readTextFileSync("./convert.ts");
const startString = "/* auto-gen start */\n";
const endString = "/* auto-gen end */\n";
const start = file.indexOf(startString);
const end = file.indexOf(endString);
if (start === -1 || end === -1) {
  console.log(
    "---- SKIPPING AUTO GENERATING TYPE COULDN'T FIND NEEDED COMMENTS ----"
  );
  Deno.exit();
}
const result2 =
  file.slice(0, start + startString.length) + result + file.slice(end);

Deno.writeTextFileSync("./convert.ts", result2);
Deno.run({ cmd: ["npm", "run", "lint", "--", "--fix"] });
