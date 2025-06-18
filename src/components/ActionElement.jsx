import getIconForOperation from "../utils/getIconForOperation";
import getContentFromType from "./getContentFromType";

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
