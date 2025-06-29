"use client";

import {
    Box,
    Show,
    useBreakpointValue
} from "@chakra-ui/react";
import Image from "next/image";
import { CiCreditCard1 } from "react-icons/ci";
import { usePaymentInputs } from "react-payment-inputs";
import cardImages, { type CardImages } from "react-payment-inputs/images";
import creditCards from "../../assets/images/credit-cards.svg";

const images = cardImages as unknown as CardImages;

const CreditCards = (props: ReturnType<typeof usePaymentInputs>) => {
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

export default CreditCards;
