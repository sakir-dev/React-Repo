import { useState, useCallback } from "react";
import RowContainer from "./components/RowContainer";
import Stats from "./components/Stats.jsx";
import defaultRows from "./data/rowData.jsx";
import { Box } from "@chakra-ui/react";
function sortRows(rows) {
  return [...rows].sort((a, b) => a.counterValue - b.counterValue);
}

const calculateUpdatedItem = (item, delta) => {
  const newCounterValue = item.counterValue + delta;
  if (newCounterValue <= item.defaultCounterValue) {
    return setToDefault(item);
  }
  return {
    ...item,
    counterValue: newCounterValue,
    divBy: {
      divBy2: newCounterValue % 2 === 0,
      divBy3: newCounterValue % 3 === 0,
      divBy2and3: newCounterValue % 6 === 0,
    },
  };
};

function setToDefault(item) {
  return {
    ...item,
    counterValue: item.defaultCounterValue,
    divBy: {
      divBy2and3: false,
      divBy3: false,
      divBy2: false,
    },
  };
}

function App() {
  const [rows, setRows] = useState(defaultRows);
  const [lastUpdatedId, setLastUpdatedId] = useState(0);

  const reset = useCallback((id) => {
    setRows((prevRows) => {
      const updatedItem = setToDefault(prevRows.find((item) => item.id == id));
      const newRows = prevRows.map((item) =>
        item.id == id ? updatedItem : item
      );
      return sortRows(newRows);
    });
    setLastUpdatedId(id);
  }, []);

  const increment = useCallback((id) => {
    setRows((prevRows) => {
      const updatedItem = calculateUpdatedItem(
        prevRows.find((item) => item.id == id),
        1
      );
      const newRows = prevRows.map((item) =>
        item.id == id ? updatedItem : item
      );
      return sortRows(newRows);
    });
    setLastUpdatedId(id);
  }, []);

  const decrement = useCallback((id) => {
    setRows((prevRows) => {
      const updatedItem = calculateUpdatedItem(
        prevRows.find((item) => item.id == id),
        -1
      );
      const newRows = prevRows.map((item) =>
        item.id == id ? updatedItem : item
      );
      return sortRows(newRows);
    });
    setLastUpdatedId(id);
  }, []);

  return (
    <>
      <Box >
        <RowContainer
          rows={rows}
          increment={increment}
          decrement={decrement}
          reset={reset}
        />
        <Stats rows={rows} lastUpdatedId={lastUpdatedId} />
      </Box>
    </>
  );
}

export default App;
