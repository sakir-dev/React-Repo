import React from "react";
import { useContext } from "react";
import oneContext from "../context/OneContext";
function GetContextObject(operation) {
  const {
    incrementIcon,
    decrementIcon,
    incrementText,
    decrementText,
    increment,
    decrement,
  } = useContext(oneContext);
  return operation == "increment"
    ? { text: incrementText, icon: incrementIcon, function: increment }
    : { text: decrementText, icon: decrementIcon, function: decrement };
}

export default GetContextObject;
