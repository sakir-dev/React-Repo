export default function sortRows(rows) {
  return [...rows].sort((a, b) => a.counterValue - b.counterValue);
}
