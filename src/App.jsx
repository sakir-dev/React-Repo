import { useState } from "react";
import RowContainer from "./components/RowContainer";
import Stats from "./components/Stats.jsx";
import defaultRows from "./data/row.jsx";

function App() {
  const [rows, setRows] = useState(defaultRows);
  const [lastUpdatedId, setLastUpdatedId] = useState(0);

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
          let newCounterValue = item.counterValue + 1;
          setLastUpdatedId(id);
          return {
            ...item,
            counterValue: newCounterValue,
            divBy: {
              divBy2: newCounterValue % 2 === 0,
              divBy3: newCounterValue % 3 === 0,
              divBy2and3: newCounterValue % 6 === 0,
            },
          };
        }
        return item;
      })
    );
  };

  const decrement = (id) => {
    setRows(
      rows.map((item) => {
        if (item.id === id) {
          setLastUpdatedId(id);
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
          let newCounterValue = item.counterValue - 1;
          return {
            ...item,
            counterValue: newCounterValue,
            divBy: {
              divBy2: newCounterValue % 2 === 0,
              divBy3: newCounterValue % 3 === 0,
              divBy2and3: newCounterValue % 6 === 0,
            },
          };
        }
        return item;
      })
    );
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
