import AllRowInfo from "./AllRowInfo";
import LastUpdatedInfo from "./LastUpdatedInfo";
import { Box } from "@chakra-ui/react";
function Stats({ rows, lastUpdatedId }) {
  return (
    <Box className="counter-stats-container">
      <LastUpdatedInfo rows={rows} lastUpdatedId={lastUpdatedId} />
      <AllRowInfo rows={rows} />
    </Box>
  );
}

export default Stats;
