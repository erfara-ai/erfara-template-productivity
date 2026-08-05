/** The raw dueInHours in, the words people actually use out. */
export function formatDueInHours(value: number): string {
  if (!Number.isFinite(value) || value < 0) return "—";
  return `${Math.round(value)} h`;
}

/** The label people actually use, from the raw focusMin. */
export function focusMinBand(value: number): "short" | "medium" | "deep" {
  if (value < 25) return "short";
  if (value < 60) return "medium";
  return "deep";
}
