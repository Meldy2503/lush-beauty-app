"use client";

import { Box } from "@chakra-ui/react";
import Wrapper from "../ui/wrapper";
import Navbar from "../navbar";
import Footer from "../footer";

const UserDetailsPage = () => {
  return (
    <>
      <Navbar />
      {/* <Box
        bgImage={`url(${heroImg.src})`}
        bgPos={"top"}
        bgRepeat="no-repeat"
        height="55vh"
        bgSize="cover"
      /> */}
      <Wrapper>
        <Box mt="-20rem" bg="gray.100">
          hh
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};

export default UserDetailsPage;
