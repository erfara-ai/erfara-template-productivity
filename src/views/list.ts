import type { Task } from "../api/types";
import { formatDueInHours, focusMinBand } from "../lib/format";

export function renderList(rows: Task[], onPick: (id: string) => void): HTMLElement {
  const ul = document.createElement("ul");
  ul.className = "list";
  for (const r of rows) {
    const li = document.createElement("li");
    li.className = "row";
    li.dataset.band = focusMinBand(r.focusMin);

    const title = document.createElement("button");
    title.className = "row-title";
    title.textContent = r.title;
    title.addEventListener("click", () => onPick(r.id));

    const meta = document.createElement("span");
    meta.className = "row-meta";
    meta.textContent = `${r.focusMin} min focus · ${formatDueInHours(r.dueInHours)}`;

    li.append(title, meta);
    ul.append(li);
  }
  return ul;
}
