import React from "react";
import { useContext } from "react";
import oneContext from "../context/OneContext";
function ValueBox({ id }) {
  const { rows } = useContext(oneContext);
  const item = rows.filter((item) => item.id == id);
  let counter = item[0].counterValue;
  return <div className="row-item">{counter}</div>;
}

export default ValueBox;
