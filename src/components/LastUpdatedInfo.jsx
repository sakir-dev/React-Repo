import React from "react";
import getDivisibleByText from "../utils/getDivisibleByText";
function LastUpdatedInfo({ rows, lastUpdatedId }) {
  let content = "No data available";

  if (lastUpdatedId != null) {
    const item = rows.find((item) => item.id === lastUpdatedId);

    if (item) {
      const divisibleBy = getDivisibleByText({ item });

      content = `Last Clicked on: ${item.name} - Counter Value: ${item.counterValue}, Divisible by: ${divisibleBy}`;
    } else {
      content = "Row with the last updated ID not found.";
    }
  }

  return <div>{content}</div>;
}

export default LastUpdatedInfo;
