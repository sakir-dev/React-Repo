import React from "react";
import Button from "./buttons/Button";
import ColorBox from "./ColorBox";
import ResetButton from "./buttons/ResetButton";
import ValueBox from "./ValueBox";

function ContentRow({ type, id }) {
  return (
    <div className="row">
      <Button type={type} id={id} operation={"increment"} />
      <Button type={type} id={id} operation={"decrement"} />
      <ValueBox id={id} />
      <ResetButton id={id} />
      <ColorBox id={id} />
    </div>
  );
}

export default ContentRow;
