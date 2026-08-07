import { describe, expect, it } from "vitest";
import { getTask, listTasks } from "./client";

describe("listTasks", () => {
  it("stops at the limit and still reports the true total", async () => {
    const page = await listTasks(2);
    expect(page.items).toHaveLength(2);
    expect(page.total).toBeGreaterThan(2);
  });
});

describe("getTask", () => {
  it("answers null for an id that is not there", async () => {
    expect(await getTask("nope")).toBeNull();
  });
});
