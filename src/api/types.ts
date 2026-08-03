/** One row of the thing this product is about. */
export interface Task {
  id: string;
  title: string;
  /** min focus. The number this product is organised around. */
  focusMin: number;
  /** Stored raw, shown in h — see lib/format. */
  dueInHours: number;
  context: string;
  tags: string[];
}

export interface Page<T> {
  items: T[];
  total: number;
}
