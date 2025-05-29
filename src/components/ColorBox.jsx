import React from "react";
function ColorBox({ rows, id }) {
  const itemDiv = rows.filter((item) => item.id == id)[0]?.divBy;
  let className = "";
  if (itemDiv.divBy2and3) {
    className = "yellow";
  } else if (itemDiv.divBy3) {
    className = "green";
  } else if (itemDiv.divBy2) {
    className = "red";
  }
  return <div className={`row-item ${className}`}> </div>;
}

export default ColorBox;
