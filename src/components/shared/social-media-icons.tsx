import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
interface Props {
    boxSize?: string;
}

const SocialMediaIcons = ({ boxSize }: Props) => {
  return (
    <HStack direction="row" gap="1.5rem">
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          as={FaFacebook}
          boxSize={boxSize ?? "2.5rem"}
          color="white"
          _hover={{ color: "yellow.50" }}
          transition="all 0.3s ease"
        />
      </Link>
      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          as={FaInstagram}
          boxSize={boxSize ?? "2.5rem"}
          color="white"
          _hover={{ color: "yellow.50" }}
          transition="all 0.3s ease"
        />
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          as={FaTwitter}
          boxSize={boxSize ?? "2.5rem"}
          color="white"
          _hover={{ color: "yellow.50" }}
          transition="all 0.3s ease"
        />
      </Link>
    </HStack>
  );
};

export default SocialMediaIcons;
