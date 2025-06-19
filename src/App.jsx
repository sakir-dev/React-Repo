import { useState, useEffect } from "react";
import RowContainer from "./components/RowContainer";
import Stats from "./components/Stats.jsx";
import defaultRows from "./data/rowData.jsx";

function sortRows(rows) {
  return [...rows].sort((a, b) => a.counterValue - b.counterValue);
}

function checkIsSameOrder(origRows, sortedRows) {
  return origRows.every((item, index) => item.id === sortedRows[index]?.id);
}

function App() {
  const [rows, setRows] = useState(defaultRows);
  const [lastUpdatedId, setLastUpdatedId] = useState(0);

  useEffect(() => {
    // Sort rows whenever any counterValue changes
    const sortedRows = sortRows(rows);

    const isSameOrder = checkIsSameOrder(rows, sortedRows);
    // if the order is same then we don't change the rows
    //this will also prevent it from going to infinite re-rendering
    if (!isSameOrder) {
      setRows(sortedRows);
    }
  }, [rows]);

  const calculateUpdatedItem = (item, delta) => {
    const newCounterValue = item.counterValue + delta;

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

  const reset = (id) => {
    setRows(
      rows.map((item) => {
        if (item.id === id) {
          let newCounterValue = item.defaultCounterValue;
          setLastUpdatedId(id);
          return {
            ...item,
            counterValue: newCounterValue,
            divBy: {
              divBy2: false,
              divBy3: false,
              divBy2and3: false,
            },
          };
        }
        return item;
      })
    );
  };

  const increment = (id) => {
    setRows(
      rows.map((item) => {
        if (item.id === id) {
          return calculateUpdatedItem(item, 1);
        }
        return item;
      })
    );
    setLastUpdatedId(id);
  };

  const decrement = (id) => {
    setRows(
      rows.map((item) => {
        if (item.id === id) {
          if (item.counterValue - 1 <= item.defaultCounterValue) {
            return {
              ...item,
              counterValue: item.defaultCounterValue,
              divBy: {
                divBy2: false,
                divBy3: false,
                divBy2and3: false,
              },
            };
          }
          return calculateUpdatedItem(item, -1);
        }
        return item;
      })
    );
    setLastUpdatedId(id);
  };

  return (
    <>
      <RowContainer
        rows={rows}
        increment={increment}
        decrement={decrement}
        reset={reset}
        setRows={setRows}
      />
      <Stats rows={rows} lastUpdatedId={lastUpdatedId} />
    </>
  );
}

export default App;
