import ActionElement from "./ActionElement";
import CounterBlock from "./CounterBlock";
import ResetButton from "./ResetButton";
import ColorBlock from "./ColorBlock";

function RowContainer({ rows, increment, decrement, reset, setRows }) {
  return (
    <div className="row-container">
      {rows.map((row) => {
        return (
          <div key={row.id} className="row">
            <ActionElement
              type={row.typeId}
              id={row.id}
              operation="increment"
              optFunction={increment}
            />
            <ActionElement
              type={row.typeId}
              id={row.id}
              operation="decrement"
              optFunction={decrement}
            />
            <CounterBlock id={row.id} rows={rows} setRows={setRows} />
            <ResetButton id={row.id} reset={reset} />
            <ColorBlock divBy={row.divBy} />
          </div>
        );
      })}
    </div>
  );
}

export default RowContainer;
