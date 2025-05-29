import React, { useEffect } from "react";

function ValueBox({ id, rows, setRows }) {
  const item = rows.find((item) => item.id === id);
  const counter = item?.counterValue;

  useEffect(() => {
    const sortedRows = [...rows].sort(
      (a, b) => a.counterValue - b.counterValue
    );
    setRows(sortedRows);
  }, [counter]);

  return <div className="row-item">{counter}</div>;
}

export default ValueBox;
