import React from "react";
import ContentRow from "./ContentRow";
import { useContext } from "react";
import oneContext from "../context/OneContext";
function RowContainer() {
  const { rows } = useContext(oneContext);
  return (
    <div className="row-container">
      {rows.map((item, _index) => {
        return <ContentRow key={_index} type={item.typeId} id={item.id} />;
      })}
    </div>
  );
}

export default RowContainer;
