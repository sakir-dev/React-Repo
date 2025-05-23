import React from "react";
import ContentRow from "./ContentRow";
import { useContext } from "react";
import oneContext from "../context/OneContext";
function RowContainer() {
  const { types } = useContext(oneContext);
  return (
    <div className="row-container">
      <ContentRow type={types.heading} />
      <ContentRow type={types.button} />
      <ContentRow type={types.text} />
      <ContentRow type={types.icon} />
      <ContentRow type={types.link} />
    </div>
  );
}

export default RowContainer;
