import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Button({ type, id, operation, optFunction }) {
  let content;

  const handleClick = (e) => {
    e.preventDefault();
    optFunction(id);
  };

  switch (type) {
    case 1:
      content = <h1 onClick={handleClick}>{operation}</h1>;
      break;
    case 2:
      content = <p onClick={handleClick}>{operation}</p>;
      break;
    case 3:
      content = (
        <Router>
          <Link to="#" onClick={handleClick}>
            {operation}
          </Link>
        </Router>
      );
      break;
    case 4:
      content = <button onClick={handleClick}>{operation}</button>;
      break;
    case 5:
      content = <span onClick={handleClick}>{operation}</span>;
      break;
    default:
      content = <button onClick={handleClick}>{operation}</button>;
  }

  return <div className="row-item">{content}</div>;
}

export default Button;
