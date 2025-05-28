import React, { useEffect, useContext } from "react";
import oneContext from "../context/OneContext";
function ValueBox({ id }) {
  const { rows, setRows } = useContext(oneContext);
  const item = rows.filter((item) => item.id == id);
  let counter = item[0]?.counterValue;
  useEffect(() => {
    const sorted = [...rows].sort((a, b) => a.counterValue - b.counterValue);
    setRows(sorted);
  }, [counter]);
  return <div className="row-item">{counter}</div>;
}

export default ValueBox;
