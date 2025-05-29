import React from "react";

function ResetButton({ id, handleReset }) {
  return (
    <div className="row-item" onClick={() => handleReset(id)}>
      reset
    </div>
  );
}

export default ResetButton;
