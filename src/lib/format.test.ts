import { describe, expect, it } from "vitest";
import { formatDueInHours, focusMinBand } from "./format";

describe("formatDueInHours", () => {
  it("turns the raw value into the words people use", () => {
    expect(formatDueInHours(6)).toBe("6 h");
  });
  it("refuses nonsense rather than printing it", () => {
    expect(formatDueInHours(-1)).toBe("—");
    expect(formatDueInHours(Number.NaN)).toBe("—");
  });
});

describe("focusMinBand", () => {
  it("labels the three bands", () => {
    expect(focusMinBand(25 - 1)).toBe("short");
    expect(focusMinBand(25)).toBe("medium");
    expect(focusMinBand(60)).toBe("deep");
  });
});
