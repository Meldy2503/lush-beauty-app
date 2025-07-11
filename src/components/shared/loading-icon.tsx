"use client";

import loadingIcon from "../../assets/images/loading-icon.gif";
import { Center } from "@chakra-ui/react";
import Image from "next/image";
// import Pendulum from "../pendulum";

const LoadingIcon = () => {
  return (
    <Center h="100vh">
      {/* <Pendulum /> */}
      <Image src={loadingIcon} height={80} width={80} alt="loading icon" />
    </Center>
  );
};

export default LoadingIcon;
