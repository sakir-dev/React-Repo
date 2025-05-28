import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import GetContextObject from "../../utils/GetContextObject";
function Button({ type, id, operation }) {
  const contextObj = GetContextObject(operation);
  let content;
  switch (type) {
    case 1:
      content = (
        <h1 onClick={() => contextObj.function(id)}>{contextObj.text}</h1>
      );
      break;
    case 2:
      content = (
        <p onClick={() => contextObj.function(id)}>{contextObj.text}</p>
      );
      break;
    case 3:
      content = (
        <Router>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              contextObj.function(id);
            }}
          >
            {contextObj.text}
          </Link>
        </Router>
      );
      break;
    case 4:
      content = (
        <button onClick={() => contextObj.function(id)}>
          {contextObj.icon} {contextObj.text}
        </button>
      );
      break;
    case 5:
      content = (
        <span onClick={() => contextObj.function(id)}>{contextObj.icon}</span>
      );
      break;
    default:
      content = (
        <button onClick={() => contextObj.function(id)}>
          {contextObj.text}
        </button>
      );
  }

  return <div className="row-item">{content}</div>;
}

export default Button;
