import { Box, Heading, HStack, Tabs, Text } from "@chakra-ui/react";
import Footer from "../footer";
import Navbar from "../navbar";
import Wrapper from "../shared/wrapper";
import NewOrders from "./new-orders";
import PastOrders from "./past-orders";
import { GoBack } from "../shared/go-back";

const OrdersPage = () => {
  return (
    <>
      <Navbar />
      <Wrapper bg="gray.250">
        <GoBack />
        <Box
          mt="1rem"
          bg="white"
          p={{ base: "3rem 1.5rem", md: "3rem 2rem" }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "1.8rem", md: "1.9rem" }}
            fontFamily="playfair"
            mb="3rem"
            lineHeight={1.3}
            textTransform={"uppercase"}
          >
            Orders{" "}
          </Heading>
          <Tabs.Root defaultValue="new-orders" variant="plain">
            <Tabs.List bg="gray.250" p="1">
              <Tabs.Trigger value="new-orders" p="2rem" fontSize={"1.6rem"}>
                <HStack gap=".5rem">
                  <Text>New orders</Text>
                  <Text>(2)</Text>
                </HStack>
              </Tabs.Trigger>
              <Tabs.Trigger value="past-orders" p="2rem" fontSize={"1.6rem"}>
                Past orders
              </Tabs.Trigger>
              <Tabs.Indicator rounded="l2" />
            </Tabs.List>
            <Tabs.Content value="new-orders" my="2rem">
              <NewOrders />
            </Tabs.Content>
            <Tabs.Content value="past-orders">
              <PastOrders />
            </Tabs.Content>
          </Tabs.Root>
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};

export default OrdersPage;
