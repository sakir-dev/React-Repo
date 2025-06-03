function generateDivisibilityLabel({ item }) {
  return item.divBy.divBy2and3
    ? "2 and 3 both"
    : item.divBy.divBy3
    ? "3"
    : item.divBy.divBy2
    ? "2"
    : "none";
}

export default generateDivisibilityLabel;
