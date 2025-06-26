"use client";

import loadingIcon from "../../assets/images/loading-icon.gif";
import { Center } from "@chakra-ui/react";
import Image from "next/image";

const LoadingIcon = () => {
  return (
    <Center h="100vh">
      <Image src={loadingIcon} height={80} width={80} alt="loading icon" />
    </Center>
  );
};

export default LoadingIcon;
