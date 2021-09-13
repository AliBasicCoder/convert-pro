import convert from "./convert.ts";
import { assertEquals } from "https://deno.land/std@0.73.0/testing/asserts.ts";

Deno.test({
  name: "number",
  fn() {
    assertEquals(convert.bytes(1000), "1 KB");
    assertEquals(convert.bytes(1024, { base: 1024 }), "1 KiB");
  },
});

Deno.test({
  name: "number and string",
  fn() {
    assertEquals(convert.bytes(1000 * 1000, "KB"), 1000);
    assertEquals(convert.bytes(1024 * 1024, "KiB"), 1024);
  },
});

Deno.test({
  name: "string and string",
  fn() {
    assertEquals(convert.bytes("1 GB", "MB"), 1000);
    assertEquals(convert.bytes("1 GiB", "MiB"), 1024);
  },
});

Deno.test({
  name: "options: stringify",
  fn() {
    assertEquals(convert.bytes(1000, "KB", { stringify: true }), "1 KB");
    assertEquals(convert.bytes("10 MB", "KB", { stringify: true }), "10000 KB");
    // should ignore stringify option
    assertEquals(convert.bytes("10 MB", { stringify: true }), 10000000);
  },
});

Deno.test({
  name: "options: accuracy",
  fn() {
    assertEquals(convert.bytes(1000, "KiB", { accuracy: 2 }), 0.98);
    assertEquals(
      convert.bytes(1000, "KiB", { stringify: true, accuracy: 2 }),
      "0.98 KiB"
    );
  },
});

Deno.test({
  name: "options: shortcut",
  fn() {
    assertEquals(convert.bytes(1000, { shortcut: false }), "1 Kilobyte");
  },
});

Deno.test({
  name: "options: lower case",
  fn() {
    assertEquals(
      convert.bytes(1000, "KB", { stringify: true, lowerCase: true }),
      "1 kb"
    );
  },
});
