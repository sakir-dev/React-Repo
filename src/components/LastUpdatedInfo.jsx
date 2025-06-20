import generateDivisibilityLabel from "../utils/generateDivisibilityLabel";
function LastUpdatedInfo({ rows, lastUpdatedId }) {
  let content = "No data available";

  if (lastUpdatedId != 0) {
    const item = rows.find((item) => item.id === lastUpdatedId);

    if (item) {
      const divisibleBy = generateDivisibilityLabel({ item });

      content = `Last Clicked on: ${item.name} - Counter Value: ${item.counterValue}, Divisible by: ${divisibleBy}`;
    } else {
      content = "Row with the last updated ID not found.";
    }
  } else {
    content = `No Interaction with Row has happened!`;
  }

  return <div>{content}</div>;
}

export default LastUpdatedInfo;
