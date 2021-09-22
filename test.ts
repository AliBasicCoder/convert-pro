import convert from "./convert.ts";
import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.73.0/testing/asserts.ts";

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

Deno.test({
  name: "converting multiple units",
  fn() {
    assertEquals(convert.length([10, "FT", 100, "IN", 1, "KM"]), 1005.588);
    assertEquals(
      convert.length([10, "FT", 100, "IN", 1, "KM"], "FT"),
      3299.1732283464567
    );
  },
});

Deno.test({
  name: "convert multiple units string",
  fn() {
    assertEquals(
      convert.bytes("10 Megabytes 10 gigabytes 1 kb 8 bit 1 MiB"),
      10011049577
    );
    assertEquals(
      convert.bytes("10 Megabytes 10 gigabytes 1 kb 8 bit 1 MiB", "KB"),
      10011049.577
    );
    assertEquals(
      convert.bytes("10 Megabytes 10 gigabytes 1 kb 8 bit 1 MiB", "KB", {
        stringify: true,
      }),
      "10011049.577 KB"
    );
    assertThrows(() => convert.bytes("10 notReal 11 notReal"));
    assertThrows(() => convert.bytes("error10 mb 11 kb"));
    assertThrows(() => convert.bytes("10 mb 11 kb error"));
    assertThrows(() => convert.bytes("error10 mb 11 kb error"));
  },
});

Deno.test({
  name: "convert multiple units string degrees",
  fn() {
    assertEquals(
      convert.degrees("10d1'10'' 10r 10g 1000mrad 1 arcminute"),
      649.2896857550165
    );
    assertEquals(
      convert.degrees("10d1'10'' 10r 10g 1000mrad 1 arcminute", {
        stringify: true,
        shortcut: false,
      }),
      "649.28969 degrees"
    );
    assertThrows(() => convert.degrees("10 notReal"));
  },
});
