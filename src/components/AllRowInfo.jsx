import React, { useContext } from "react";
import oneContext from "../context/OneContext";
import getDivisibleByText from "../utils/getDivisibleByText";
function AllRowInfo() {
  const { rows } = useContext(oneContext);
  return (
    <div className="all-counter-info-container">
      <ul>
        {rows.map((item, _index) => {
          const divisibleBy = getDivisibleByText({ item });
          return (
            <li key={_index}>
              {item.name} counter : value is: {item.counterValue}, it is
              divisible by {divisibleBy}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllRowInfo;
