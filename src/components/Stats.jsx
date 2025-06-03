import AllRowInfo from "./AllRowInfo";
import LastUpdatedInfo from "./LastUpdatedInfo";

function Stats({ rows, lastUpdatedId }) {
  return (
    <div className="counter-stats-container">
      <LastUpdatedInfo rows={rows} lastUpdatedId={lastUpdatedId} />
      <AllRowInfo rows={rows} />
    </div>
  );
}

export default Stats;
