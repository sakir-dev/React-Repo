import React from "react";
import { useContext } from "react";
import oneContext from "../context/OneContext";
function ColorBox({ id }) {
  const { rows } = useContext(oneContext);
  const itemDiv = rows.filter((item) => item.id == id)[0].divBy;
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
