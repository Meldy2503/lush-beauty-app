"use client";

import { Box, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";

const SelectLocation = () => {
  return (
    <Box>
      <Heading
        as="h3"
        fontSize={{ base: "2rem", md: "2.2rem" }}
        fontFamily="playfair"
        mb="2rem"
        lineHeight={1.3}
        textTransform={"uppercase"}
      >
        SELECT LOCATION
      </Heading>
      <Flex gap="2rem" flexDir="column">
        <Checkbox.Root
          display={"flex"}
          justifyContent={"space-between"}
          w="full"
          bg="white"
          p={{ base: "2rem", sm: "2.5rem" }}
          size="lg"
          gap="3rem"
        >
          <Checkbox.HiddenInput />

          <Checkbox.Label>
            {" "}
            <Box fontSize={{ base: "1.45rem", sm: "1.6rem" }}>
              <Heading
                as="h4"
                fontFamily="playfair"
                mb="1rem"
                lineHeight={1.4}
                textTransform={"uppercase"}
                fontSize={"1.7rem"}
              >
                Lush & Luxe – Central London{" "}
              </Heading>
              <Text color={"gray.100"} lineHeight={1.35} w="95%">
                68 Charlotte Street, Fitzrovia, London, W1T 4QF
              </Text>
            </Box>
          </Checkbox.Label>
          <Checkbox.Control scale={1.5}>
            <Checkbox.Indicator />
          </Checkbox.Control>
        </Checkbox.Root>
        <Checkbox.Root
          display={"flex"}
          justifyContent={"space-between"}
          w="full"
          bg="white"
          p={{ base: "2rem", sm: "2.5rem" }}
          size="lg"
          gap="3rem"
        >
          <Checkbox.HiddenInput />

          <Checkbox.Label>
            {" "}
            <Box fontSize={{ base: "1.45rem", sm: "1.6rem" }}>
              <Heading
                as="h4"
                fontFamily="playfair"
                mb="1rem"
                lineHeight={1.4}
                textTransform={"uppercase"}
                fontSize={"1.7rem"}
              >
                Lush & Luxe – Manchester{" "}
              </Heading>
              <Text color={"gray.100"} lineHeight={1.35} w="95%">
                68 Charlotte Street, Fitzrovia, London, W1T 4QF
              </Text>
            </Box>
          </Checkbox.Label>
          <Checkbox.Control scale={1.5}>
            <Checkbox.Indicator />
          </Checkbox.Control>
        </Checkbox.Root>
      </Flex>
    </Box>
  );
};

export default SelectLocation;
