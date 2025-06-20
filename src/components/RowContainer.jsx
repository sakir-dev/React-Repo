import ActionElement from "./ActionElement";
import CounterBlock from "./CounterBlock";
import ResetButton from "./ResetButton";
import ColorBlock from "./ColorBlock";
import { Flex } from "@chakra-ui/react";

function RowContainer({ rows, increment, decrement, reset }) {
  return (
    <Flex direction={"column"}>
      {rows.map((row) => {
        return (
          <Flex key={row.id} className="row">
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
            <CounterBlock id={row.id} rows={rows} />
            <ResetButton id={row.id} reset={reset} />
            <ColorBlock divBy={row.divBy} />
          </Flex>
        );
      })}
    </Flex>
  );
}

export default RowContainer;
