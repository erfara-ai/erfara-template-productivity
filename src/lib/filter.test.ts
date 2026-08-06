import { describe, expect, it } from "vitest";
import { byTag, sortByFocusMin } from "./filter";
import type { Task } from "../api/types";

const row = (id: string, focusMin: number, tags: string[]): Task => ({
  id,
  title: id,
  focusMin,
  dueInHours: 6,
  context: "deep",
  tags,
});

describe("byTag", () => {
  it("keeps only the rows carrying the tag", () => {
    const rows = [row("a", 25, ["keep"]), row("b", 60, ["other"])];
    expect(byTag(rows, "keep").map((r) => r.id)).toEqual(["a"]);
  });
});

describe("sortByFocusMin", () => {
  it("puts the lowest first", () => {
    const rows = [row("high", 60, []), row("low", 25, [])];
    expect(sortByFocusMin(rows).map((r) => r.id)).toEqual(["low", "high"]);
  });
  it("does not modify the array it was given", () => {
    const rows = [row("high", 60, []), row("low", 25, [])];
    sortByFocusMin(rows);
    expect(rows.map((r) => r.id)).toEqual(["high", "low"]);
  });
});
