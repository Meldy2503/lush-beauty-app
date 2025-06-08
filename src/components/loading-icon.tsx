"use client";

// import loadingIcon from "@/assets/loading.gif";
import { Center, Text } from "@chakra-ui/react";
// import Image from "next/image";

const LoadingIcon = () => {
  return (
    <Center h="100vh">
      <Text>Loading.......</Text>
      {/* <Image src={loadingIcon} height={80} width={80} alt="loading icon" /> */}
    </Center>
  );
};

export default LoadingIcon;
