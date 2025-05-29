import React from "react";
import ContentRow from "./ContentRow";

function RowContainer({ rows, operations, icons, setRows }) {
  return (
    <div className="row-container">
      {rows.map((item, _index) => {
        return (
          <ContentRow
            key={_index}
            rows={rows}
            id={item.id}
            type={item.typeId}
            handleReset={operations.reset}
            operations={operations}
            icons={icons}
            setRows={setRows}
          />
        );
      })}
    </div>
  );
}

export default RowContainer;
