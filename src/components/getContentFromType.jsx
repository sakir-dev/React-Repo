import { BrowserRouter as Router, Link } from "react-router-dom";
const renderMap = {
    1: (props) => <h1 onClick={props.handleClick}>{props.operation}</h1>,
    2: (props) => <p onClick={props.handleClick}>{props.operation}</p>,
    3: (props) => (<Router><Link onClick={props.handleClick}>{props.operation}</Link></Router>),
    4: (props) => (<button onClick={props.handleClick}>{props.operation}</button>),
    5: (props) => <span onClick={props.handleClick}>{props.icon}</span>,
  };

export default function getContentFromType(type, handleClick, operation, icon) {
  
  const Component = renderMap[type] || renderMap[4];
  return Component({ handleClick, operation, icon });
}
