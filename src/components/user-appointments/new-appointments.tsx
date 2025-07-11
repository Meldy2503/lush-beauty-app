import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Tag from "../shared/tag";
import ViewAppointmentDetailsModal from "./appointment-details-modal";

const NewAppointments = () => {
  return (
    <Box mt="5rem">
      <Flex
        borderWidth={"2px"}
        borderColor={"gray.250"}
        alignItems={{ base: "flex-start", md: "center" }}
        flexDir={{ base: "column", md: "row" }}
        gap="2rem"
        justifyContent={"space-between"}
        p="1.5rem"
        mb="1rem"
      >
        <Box fontSize="1.6rem">
          <Tag label="ongoing" />
          <Heading
            as="h4"
            fontFamily="playfair"
            mb=".5rem"
            lineHeight={1.4}
            textTransform={"uppercase"}
            fontSize="1.7rem"
          >
            facial treatment{" "}
          </Heading>
          <Text lineHeight={1.3}>Skin Analysis | Exfoliation</Text>

          <Text lineHeight={1.3} fontSize="1.4rem" pt="1.5rem">
            Tue, June 02, 2025{" "}
          </Text>
          <Text lineHeight={1.3} fontSize="1.3rem" pt=".5rem">
            8:00pm
          </Text>
        </Box>
        <Flex alignSelf={{ base: "flex-end", md: "center" }}>
          <ViewAppointmentDetailsModal />
        </Flex>
      </Flex>
      <Flex
        borderWidth={"2px"}
        borderColor={"gray.250"}
        alignItems={{ base: "flex-start", md: "center" }}
        flexDir={{ base: "column", md: "row" }}
        gap="2rem"
        justifyContent={"space-between"}
        p="1.5rem"
        mb="1rem"
      >
        <Box fontSize="1.6rem">
          <Tag label="ongoing" />
          <Heading
            as="h4"
            fontFamily="playfair"
            mb=".5rem"
            lineHeight={1.4}
            textTransform={"uppercase"}
            fontSize="1.7rem"
          >
            facial treatment{" "}
          </Heading>
          <Text lineHeight={1.3}>Skin Analysis | Exfoliation</Text>

          <Text lineHeight={1.3} fontSize="1.4rem" pt="1.5rem">
            Tue, June 02, 2025{" "}
          </Text>
          <Text lineHeight={1.3} fontSize="1.3rem" pt=".5rem">
            8:00pm
          </Text>
        </Box>
        <Flex alignSelf={{ base: "flex-end", md: "center" }}>
          <ViewAppointmentDetailsModal />
        </Flex>
      </Flex>
    </Box>
  );
};

export default NewAppointments;
