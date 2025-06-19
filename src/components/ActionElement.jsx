import getContentFromType from "./getContentFromType";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { TypeMap } from "../Constants";

function getIconForOperation(operation) {
  const icon = operation == "increment" ? <FaArrowUp /> : <FaArrowDown />;
  return icon;
}

function ActionElement({ type, id, operation, optFunction }) {
  let content;
  let icon;
  const handleClick = (e) => {
    e.preventDefault();
    optFunction(id);
  };
  if (type == TypeMap.ICON) {
    icon = getIconForOperation(operation);
    content = getContentFromType(type, handleClick, operation, icon);
  } else {
    content = getContentFromType(type, handleClick, operation);
  }

  return <div className="row-item">{content}</div>;
}

export default ActionElement;
