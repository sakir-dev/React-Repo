import { ListItem, ListIcon, UnorderedList, Box } from "@chakra-ui/react";
import { InfoIcon, WarningIcon } from "@chakra-ui/icons";
import generateDivisibilityLabel from "../utils/generateDivisibilityLabel";

function generateAllRowInfo(rows) {
  return rows.map((row) => {
    const divisibleBy = generateDivisibilityLabel({ item: row });
    return (
      <ListItem key={row.id}>
        <ListIcon as={InfoIcon} color="green.500" />
        {row.name} counter : value is: {row.counterValue}, it is divisible by{" "}
        {divisibleBy}
      </ListItem>
    );
  });
}

function AllRowInfo({ rows }) {
  return (
    <Box
      p={6}
      bg="gray.50"
      border="1px solid"
      borderColor="gray.200"
      rounded="lg"
      boxShadow="md"
      maxW="container.md"
      mx="auto"
      mt={6}
      color={"black"}
    >
      <UnorderedList
        spacing={4}
        pl={6}
        color="gray.800"
        fontSize="md"
        fontWeight="medium"
      >
        {generateAllRowInfo(rows)}
      </UnorderedList>
    </Box>
  );
}

export default AllRowInfo;
