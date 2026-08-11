import type { Task } from "../api/types";
import { formatDueInHours, focusMinBand } from "../lib/format";

export function renderDetail(row: Task): HTMLElement {
  const box = document.createElement("section");
  box.className = "detail";

  const h = document.createElement("h2");
  h.textContent = row.title;

  const p = document.createElement("p");
  p.className = "detail-meta";
  p.textContent = `${row.context} · ${row.focusMin} min focus (${focusMinBand(row.focusMin)}) · ${formatDueInHours(row.dueInHours)}`;

  box.append(h, p);
  return box;
}
