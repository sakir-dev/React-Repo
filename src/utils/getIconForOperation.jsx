import { FaArrowUp, FaArrowDown } from "react-icons/fa";
export default function getIconForOperation(operation) {
  const icon = operation == "increment" ? <FaArrowUp /> : <FaArrowDown />;
  return icon;
}
