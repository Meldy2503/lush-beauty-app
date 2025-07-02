"use client";

import { HStack } from "@chakra-ui/react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import Button from "./button";
import { useRouter } from "next/navigation";

export const GoBack = () => {
  const router = useRouter();

  return (
    <HStack mt="5rem" mb="1.5rem" >
      <FaCircleArrowLeft size='2.3rem'/>

      <Button
        onClick={() => router.back()}
        bg="transparent"
        color="black"
        px={"0"}
        hover="transparent"
      >
        Go Back
      </Button>
    </HStack>
  );
};
