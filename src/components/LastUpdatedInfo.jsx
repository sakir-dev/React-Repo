import { Box, Text, Badge, Stack, Flex } from "@chakra-ui/react";
import { InfoIcon, WarningIcon, CheckCircleIcon } from "@chakra-ui/icons";
import generateDivisibilityLabel from "../utils/generateDivisibilityLabel";
function LastUpdatedInfo({ rows, lastUpdatedId }) {
  let content = "No data available";

  if (lastUpdatedId != 0) {
    const item = rows.find((item) => item.id === lastUpdatedId);

    if (item) {
      const divisibleBy = generateDivisibilityLabel({ item });

      content = (
        <Flex direction={"row"} justify={"space-evenly"}>
          <Text fontSize="sm" color="gray.500">
            Last Interaction
          </Text>

          <CheckCircleIcon mr={2} color="green.500" />

          <Text fontSize="md" fontweight="mediumn">
            {item.name}
          </Text>

          <Badge colorScheme="red" mx={2} color={"black"}>
            Counter: {item.counterValue}
          </Badge>
          <Badge colorScheme="purple">Divisible by: {divisibleBy}</Badge>
        </Flex>
      );
    } else {
      content = (
        <Text color="orange.500" fontSize="md" fontWeight="semibold">
          <WarningIcon mr={2} />
          Row with the last updated ID not found.
        </Text>
      );
    }
  } else {
    content = (
      <Text color="gray.600" fontStyle="italic">
        <InfoIcon mr={2} />
        No interaction with any row yet.
      </Text>
    );
  }

  return (
    <>
      <Box
        shadow={"lg"}
        mt={6}
        p={4}
        bg="gray.50"
        border="1px solid"
        borderColor="gray.200"
        rounded="md"
        color={"black"}
        maxW="container.md"
        ml={165}
      >
        {content}
      </Box>
    </>
  );
}

export default LastUpdatedInfo;
