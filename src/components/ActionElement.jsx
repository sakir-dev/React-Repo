import { BrowserRouter as Router, Link } from "react-router-dom";
import getIconForOperation from "../utils/getIconForOperation";

function ActionElement({ type, id, operation, optFunction }) {
  let content;
  const icon = getIconForOperation(operation);

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
      content = <span onClick={handleClick}>{icon}</span>;
      break;
    default:
      content = <button onClick={handleClick}>{operation}</button>;
  }

  return <div className="row-item">{content}</div>;
}

export default ActionElement;
