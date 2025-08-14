"use client";

import { useMakeOrderPaymentMutation } from "@/services/api/cart";
import { setOrderClientSecretKey, setOrderId } from "@/store/slices/cart-slice";
import { Box, Flex, Menu, Portal } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Button from "../shared/button";
import ViewOrderDetailsModal from "./view-order-modal";
import { UserOrderType } from "@/types/user";
import DeleteModal from "../shared/delete-modal";
import { useCancelUserOrder } from "@/services/api/user";
import toast from "react-hot-toast";

interface OrderActionsProps {
  viewOrderDetailsId?: string;
  setViewOrderDetailsId: (id: string) => void;
  orders: UserOrderType;
}

const OrderActions = ({
  viewOrderDetailsId,
  setViewOrderDetailsId,
  orders,
}: OrderActionsProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { mutateAsync: makeOrderPayment } = useMakeOrderPaymentMutation();

  const { mutateAsync: cancelOrder, isPending } = useCancelUserOrder();

  const handleCancelOrder = async (orderId: string) => {
    try {
      await cancelOrder(orderId);
      toast.success("Order cancelled successfully");
    } catch (error) {
      console.error("Error cancelling order:", error);
      toast.error("Failed to cancel order");
    }
  };

  const handlePayForOrder = async (orderId: string) => {
    try {
      const response = await makeOrderPayment({ orderId });
      const clientSecret = response?.data?.clientSecret;

      if (!clientSecret) {
        console.error("No client secret returned");
        return;
      }
      router.push("/shop/order-confirmation");
      dispatch(setOrderClientSecretKey(clientSecret));
      dispatch(setOrderId(orderId));
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <Menu.Root positioning={{ placement: "bottom-end" }}>
      <Menu.Trigger asChild>
        <Button bg="gray.150" px="2rem">
          <BsThreeDotsVertical size={30} />
          Actions
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Flex
                alignSelf="flex-end"
                flexDir={"column"}
                gap="1rem"
                p="1rem"
                flexWrap={"wrap"}
              >
                <ViewOrderDetailsModal
                  onClick={() => setViewOrderDetailsId(orders?.id ?? "")}
                  viewOrderDetailsId={viewOrderDetailsId}
                />
                {orders?.status === "PENDING" && (
                  <Flex gap="1rem" flexDir={"column"}>
                    <Box borderYWidth={"1px"} borderColor="gray.200" py=".5rem">
                      <Button
                        w="100%"
                        py="1.9rem"
                        bg="transparent"
                        color="black"
                        onClick={() => handlePayForOrder(orders?.id || "")}
                      >
                        Pay for Order
                      </Button>
                    </Box>
                    <DeleteModal
                      triggerItem={
                        <Button
                          py="1.9rem"
                          w="100%"
                          color="red.600"
                          bg="transparent"
                        >
                          Cancel Order
                        </Button>
                      }
                      onClick={() => handleCancelOrder(orders?.id || "")}
                      isLoading={isPending}
                      btnText="Cancel"
                      text="This action cannot be undone. The selected order will be removed from your pending payments and you will no longer be able to pay for it."
                    />{" "}
                  </Flex>
                )}
              </Flex>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default OrderActions;
