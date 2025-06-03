import { useEffect, useState } from "react";

function ColorBlock({ divBy }) {
  const [colorClass, setColorClass] = useState("");

  useEffect(() => {
    if (divBy.divBy2and3) {
      setColorClass("yellow");
    } else if (divBy.divBy3) {
      setColorClass("green");
    } else if (divBy.divBy2) {
      setColorClass("red");
    } else {
      setColorClass("");
    }
  }, [divBy]);

  return <div className={`row-item ${colorClass}`} />;
}

export default ColorBlock;
