import type { Page, Task } from "./types";
import raw from "../data/tasks.json";

/**
 * The data layer.
 *
 * There is no server yet — this app deploys as static files to GitHub Pages,
 * so the "API" reads a JSON file that ships with the build. It is shaped like
 * a network call on purpose: when a real endpoint lands, only this file
 * changes and nothing that calls it has to.
 */
export async function listTasks(limit: number): Promise<Page<Task>> {
  const all = raw as Task[];
  return { items: all.slice(0, limit), total: all.length };
}

export async function getTask(id: string): Promise<Task | null> {
  const all = raw as Task[];
  return all.find((r) => r.id === id) ?? null;
}
