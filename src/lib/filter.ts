import type { Task } from "../api/types";

/** Everything carrying this tag, in the order the data gave them. */
export function byTag(rows: Task[], tag: string): Task[] {
  return rows.filter((r) => r.tags.includes(tag));
}

/** Lowest focusMin first. Ties keep their original order. */
export function sortByFocusMin(rows: Task[]): Task[] {
  return [...rows].sort((a, b) => a.focusMin - b.focusMin);
}
