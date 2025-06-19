import getContentFromType from "./getContentFromType";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function getIconForOperation(operation) {
  const icon = operation == "increment" ? <FaArrowUp /> : <FaArrowDown />;
  return icon;
}

function ActionElement({ type, id, operation, optFunction }) {
  let content;
  const icon = getIconForOperation(operation);

  const handleClick = (e) => {
    e.preventDefault();
    optFunction(id);
  };

  content = getContentFromType(type, handleClick, operation, icon);

  return <div className="row-item">{content}</div>;
}

export default ActionElement;
