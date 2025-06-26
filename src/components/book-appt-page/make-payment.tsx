"use client";

import {
  Box,
  Flex,
  Group,
  Heading,
  HStack,
  InputGroup,
  Show,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { usePaymentInputs } from "react-payment-inputs";
import cardImages, { type CardImages } from "react-payment-inputs/images";
import creditCards from "../../assets/images/credit-cards.svg";
import Button from "../ui/button";
import { InputElement } from "../ui/input-element";
import BookingSummary from "./booking-summary";
import { CiCreditCard1 } from "react-icons/ci";
import BookingConfirmationModal from "./booking-confirmation-modal";

interface MakePaymentProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const images = cardImages as unknown as CardImages;

const CardImage = (props: ReturnType<typeof usePaymentInputs>) => {
  const { meta, getCardImageProps } = props;
  const isLargeScreen = useBreakpointValue({ base: false, sm: true });

  return (
    <Show
      when={meta.cardType}
      fallback={
        isLargeScreen ? (
          <Image
            src={creditCards}
            alt="a lush & luxe staff"
            style={{
              marginRight: "1rem",
              marginTop: "2rem",
              objectFit: "cover",
            }}
            width={100}
            height={100}
          />
        ) : (
          <Box mt="2rem" mr="1rem">
            <CiCreditCard1 size={24} />
          </Box>
        )
      }
    >
      <svg {...getCardImageProps({ images })} />
    </Show>
  );
};

const MakePayment = ({ setStep, step }: MakePaymentProps) => {
  const payment = usePaymentInputs();
  return (
    <Flex gap="2rem">
      <Flex
        w={{ base: "100%", md: "65%" }}
        bg="white"
        p="2rem"
        shadow={"sm"}
        minH={{ base: "80vh", md: "70vh" }}
        position="relative"
        flexDir={"column"}
      >
        <Heading
          as="h3"
          fontSize={{ base: "1.7rem", md: "1.8rem" }}
          fontFamily="playfair"
          mb="2rem"
          lineHeight={1.3}
          textTransform={"uppercase"}
        >
          Make Payment
        </Heading>

        <VStack spaceY="25px" mt="2rem">
          <InputElement
            label="Card name"
            bg="gray.250"
            placeholder="Edward Martins"
          />
          <InputGroup
            zIndex={{ _focusWithin: "1" }}
            endElement={<CardImage {...payment} />}
          >
            <InputElement
              label="Card number"
              bg="gray.250"
              {...payment.getCardNumberProps()}
            />
          </InputGroup>
          <Group w="full">
            <InputElement
              label="Expiration date"
              bg="gray.250"
              {...payment.getExpiryDateProps()}
            />
            <InputElement
              label="Security code"
              bg="gray.250"
              {...payment.getCVCProps()}
            />
          </Group>
        </VStack>
        <HStack
          mt="auto"
          position="sticky"
          bottom="0"
          w="full"
          gap="1rem"
          justifyContent={"center"}
          alignItems={"center"}
          bg="white"
          py="1rem"
        >
          <Button
            bg="transparent"
            borderWidth="1.5px"
            borderColor="black"
            color="black"
            w="48%"
            onClick={() => setStep(step - 1)}
          >
            Prev
          </Button>
          <BookingConfirmationModal />
        </HStack>
      </Flex>
      <Box
        w={{ base: "100%", md: "35%" }}
        display={{ base: "none", md: "block" }}
      >
        <BookingSummary />
      </Box>
    </Flex>
  );
};
export default MakePayment;
