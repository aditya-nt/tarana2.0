export function filterUndefined<T>(array: (T | undefined)[]): T[] {
  return array.filter((item) => item !== undefined) as T[];
}
