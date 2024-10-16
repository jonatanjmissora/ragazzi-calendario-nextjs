export function Sorted(array: string[]) {
  return array.sort((a, b) => a.localeCompare(b))
}