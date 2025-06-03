import generateDivisibilityLabel from "../utils/generateDivisibilityLabel";
function AllRowInfo({ rows }) {
  return (
    <div className="all-counter-info-container">
      <ul>
        {rows.map((row) => {
          const divisibleBy = generateDivisibilityLabel({ item: row });
          return (
            <li key={row.id}>
              {row.name} counter : value is: {row.counterValue}, it is divisible
              by {divisibleBy}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllRowInfo;
