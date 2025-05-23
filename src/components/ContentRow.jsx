import React from "react";
import Button from "./buttons/Button";
import ColorBox from "./ColorBox";
import ResetButton from "./buttons/ResetButton";
import ValueBox from "./ValueBox";

function ContentRow({ type }) {
  return (
    <div className="row">
      <Button type={type} operation={"increment"} />
      <Button type={type} operation={"decrement"} />
      <ValueBox id={type} />
      <ResetButton id={type} />
      <ColorBox id={type} />
    </div>
  );
}

export default ContentRow;
