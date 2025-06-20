import getContentFromType from "./getContentFromType";
import { TypeMap } from "../Constants";
import { Box } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

function getIconForOperation(operation) {
  const icon =
    operation == "increment" ? <ChevronUpIcon /> : <ChevronDownIcon />;
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

  return <Box className="row-item">{content}</Box>;
}

export default ActionElement;
