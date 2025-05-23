// /*eslint-disable */
import React from "react";
import { useContext } from "react";
import oneContext from "../../context/OneContext";

function ResetButton({ id }) {
  const { handleReset } = useContext(oneContext);
  return (
    <div className="row-item" onClick={() => handleReset(id)}>
      reset
    </div>
  );
}

export default ResetButton;
