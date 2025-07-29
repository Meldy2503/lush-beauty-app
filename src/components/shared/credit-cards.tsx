"use client";

import { Box, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { CiCreditCard1 } from "react-icons/ci";
import creditCards from "../../assets/images/credit-cards.svg";

const CreditCards = () => {
  const isLargeScreen = useBreakpointValue({ base: false, sm: true });

  return (
    <Box>
      {isLargeScreen ? (
        <Image
          src={creditCards}
          alt="a lush & luxe staff"
          style={{
            objectFit: "cover",
          }}
          width={100}
          height={100}
        />
      ) : (
        <CiCreditCard1 size={24} />
      )}
    </Box>
  );
};

export default CreditCards;
