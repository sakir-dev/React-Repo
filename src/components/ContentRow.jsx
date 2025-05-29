import React from "react";
import Button from "./buttons/Button";
import ColorBox from "./ColorBox";
import ResetButton from "./buttons/ResetButton";
import ValueBox from "./ValueBox";

function ContentRow({
  rows,
  type,
  id,
  handleReset,
  operations,
  icons,
  setRows,
}) {
  return (
    <div className="row">
      <Button
        type={type}
        id={id}
        operation="increment"
        optFunction={operations.increment}
        icon={icons.increment}
      />

      <Button
        type={type}
        id={id}
        operation="decrement"
        optFunction={operations.decrement}
        icon={icons.decrement}
      />

      <ValueBox id={id} rows={rows} setRows={setRows} />

      <ResetButton id={id} handleReset={handleReset} />

      <ColorBox id={id} rows={rows} />
    </div>
  );
}

export default ContentRow;
