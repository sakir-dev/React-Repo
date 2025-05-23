import React from "react";
import { useContext } from "react";
import oneContext from "../context/OneContext";

function LastUpdatedInfo() {
  const { lastUpdatedId, rows } = useContext(oneContext);
  let content = "";
  if (lastUpdatedId !== null) {
    const item = rows.filter((item) => item.id == lastUpdatedId)[0];

    const divisibleBy = item.divBy.divBy2and3
      ? "2 and 3 both"
      : item.divBy.divBy3
      ? "3"
      : item.divBy.divBy2
      ? "2"
      : "none";
    content = `Last Clicked on : ${item.name} counter : value is: ${item.counterValue}, it is divisible by ${divisibleBy}`;
  }
  return <div>{content}</div>;
}

export default LastUpdatedInfo;
