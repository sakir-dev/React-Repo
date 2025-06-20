import { BrowserRouter as Router, Link } from "react-router-dom";
import { TypeMap } from "../Constants";
const renderMap = {
  [TypeMap.HEADING]: (props) => (
    <h1 onClick={props.handleClick}>{props.operation}</h1>
  ),
  [TypeMap.TEXT]: (props) => (
    <p onClick={props.handleClick}>{props.operation}</p>
  ),
  [TypeMap.LINK]: (props) => (
    <Router>
      <Link onClick={props.handleClick}>{props.operation}</Link>
    </Router>
  ),
  [TypeMap.BUTTON]: (props) => (
    <button onClick={props.handleClick}>{props.operation}</button>
  ),
  [TypeMap.ICON]: (props) => (
    <span onClick={props.handleClick}>{props.icon}</span>
  ),
};

export default function getContentFromType(
  type,
  handleClick,
  operation,
  icon = null
) {
  const Component = renderMap[type] || renderMap[4];
  return Component({ handleClick, operation, icon });
}
