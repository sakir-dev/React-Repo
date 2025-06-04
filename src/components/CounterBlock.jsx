function CounterBlock({ id, rows }) {
  const item = rows.find((item) => item.id === id);
  const counter = item?.counterValue;

  return <div className="row-item">{counter}</div>;
}

export default CounterBlock;
