export default function checkIsSameOrder(origRows, sortedRows) {
  return origRows.every((item, index) => item.id === sortedRows[index]?.id);
}
