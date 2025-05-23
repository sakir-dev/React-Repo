import React from "react";
import { OneProvider } from "./context/OneContext";
import RowContainer from "./components/RowContainer";
import Stats from "./components/CounterStats";
function App() {
  return (
    <OneProvider>
      <RowContainer />
      <Stats />
    </OneProvider>
  );
}

export default App;
