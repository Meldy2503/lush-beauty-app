"use client";

import { Flex, Text } from "@chakra-ui/react";
interface PropType {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
}

const Pagination = ({
  totalCount,
  currentPage,
  pageSize,
  totalPages,
  onNext,
  onPrevious,
}: PropType) => {
  const startPage = (currentPage - 1) * pageSize + 1;
  const endPage = Math.min(currentPage * pageSize, totalCount);

  return (
    <Flex
      align="center"
      justify="end"
      gap="2rem"
      flexWrap={"wrap"}
      borderTopWidth={"1px"}
      borderTopColor="gray.250"
      p="2rem"
      alignItems={"center"}
    >
      <Text fontSize={"1.5rem"}>
        Pages {startPage} - {endPage} of {totalCount}
      </Text>
      <Flex gap="1rem">
        {/* Previous */}
        <Flex
          p=".7rem 3rem"
          alignItems="center"
          justifyContent="center"
          borderWidth="2px"
          borderColor={currentPage === 1 ? "gray.300" : "black"}
          color={currentPage === 1 ? "gray.350" : "black"}
          cursor={currentPage === 1 ? "not-allowed" : "pointer"}
          onClick={() => currentPage > 1 && onPrevious()}
        >
          <Text>Prev</Text>
        </Flex>

        {/* Next */}
        <Flex
          p=".7rem 3rem"
          alignItems="center"
          justifyContent="center"
          cursor={currentPage === totalPages ? "not-allowed" : "pointer"}
          bg={currentPage === totalPages ? "gray.300" : "black"}
          color={currentPage === totalPages ? "gray.350" : "white"}
          onClick={() => currentPage < totalPages && onNext()}
        >
          <Text>Next</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Pagination;
