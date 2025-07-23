"use client";

import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoGridSharp } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import Button from "../shared/button";
import { InputElement } from "../shared/input-element";
import StepNavigationBtns from "../shared/navigation-btns";
import BookingSummary from "./booking-summary";
import { useDispatch } from "react-redux";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { updateAppointment } from "@/store/slices/appointment-slice";
import { useRouter } from "next/navigation";
import { useGetSpecialists } from "@/services/api/book-appointment";
import { SpecialistType } from "@/types/book-appointment";
import { useDebounce } from "use-debounce";
import { Params } from "@/types";

const SelectTechnicianPage = () => {
  const [isGridOrientation, setIsGridOrientation] = useState(true);
  const [params, setParams] = useState<Params>({
    page: 1,
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const [debouncedSearchQuery] = useDebounce(params?.term, 500);

  const { data: specialists, isLoading } = useGetSpecialists({
    ...(debouncedSearchQuery && { term: debouncedSearchQuery }),
    page: params?.page,
  });

  const storedSpecialist = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.selectedSpecialist
  );

  const [selectedTechnician, setSelectedTechnician] = useState<
    string | undefined
  >(storedSpecialist?.id);

  const handleNextClick = () => {
    const selectedSpecialistObj = specialists?.find(
      (specialist: SpecialistType) => specialist?.id === selectedTechnician
    );
    dispatch(
      updateAppointment({
        selectedSpecialist: selectedSpecialistObj,
      })
    );
    router.push("/book-appointment/select-date-time");
  };

  return (
    <Flex gap="2rem" alignItems="stretch">
      <Box
        w={{ base: "100%", md: "65%" }}
        bg="white"
        px="2rem"
        pt="2rem"
        shadow={"sm"}
      >
        <Heading
          as="h3"
          fontSize={{ base: "1.7rem", md: "1.8rem" }}
          fontFamily="playfair"
          lineHeight={1.3}
          textTransform={"uppercase"}
        >
          Select Technician
        </Heading>
        <Flex justify={"space-between"} gap="2rem 3rem" py="2rem">
          <InputElement
            inputItem
            placeholder="Search stylist.."
            border="1px solid gray.100"
            onChange={(e) => {
              setParams((prevState) => ({
                ...prevState,
                term: e.target.value,
                page: 1,
              }));
            }}
          />
          <HStack gap="1rem">
            <Box
              onClick={() => setIsGridOrientation(true)}
              bg={isGridOrientation ? "yellow.100" : "transparent"}
              color={isGridOrientation ? "white" : "black"}
              p=".5rem"
              cursor={"pointer"}
            >
              <IoGridSharp />
            </Box>
            <Box
              onClick={() => setIsGridOrientation(false)}
              bg={!isGridOrientation ? "yellow.100" : "transparent"}
              color={!isGridOrientation ? "white" : "black"}
              p=".5rem"
              cursor={"pointer"}
            >
              <FaListUl />
            </Box>
          </HStack>
        </Flex>
        <Flex
          flexDir={"column"}
          justifyContent={"space-between"}
          h={{ base: "100%", md: "71vh" }}
          overflowY={"auto"}
        >
          {isLoading ? (
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Spinner my="20rem" />
            </Flex>
          ) : !isLoading && specialists.length === 0 ? (
            <Flex alignItems="center" justifyContent="center" my="10rem">
              <Text fontSize="1.6rem">
                {`No results found for "${params?.term}"`}
              </Text>
            </Flex>
          ) : (
            <Flex
              justifyContent={"space-between"}
              gap="1rem"
              flexWrap={"wrap"}
              pb={{ base: "5rem", md: "2rem" }}
              cursor={"pointer"}
            >
              {specialists?.map((staff: SpecialistType) => {
                return (
                  <Flex
                    key={staff?.id}
                    p="2rem"
                    textAlign={"center"}
                    alignItems={"center"}
                    onClick={() => {
                      setSelectedTechnician(staff?.id);
                      const selectedSpecialistObj = specialists?.find(
                        (specialist: SpecialistType) =>
                          specialist?.id === staff?.id
                      );
                      if (selectedSpecialistObj) {
                        dispatch(
                          updateAppointment({
                            selectedSpecialist: selectedSpecialistObj,
                          })
                        );
                      }
                    }}
                    flexDirection={
                      isGridOrientation
                        ? "column"
                        : { base: "column", sm: "row" }
                    }
                    justifyContent={
                      isGridOrientation ? "center" : "space-between"
                    }
                    mx="auto"
                    w={
                      isGridOrientation
                        ? { base: "100%", sm: "48%", xl: "31.5%" }
                        : "100%"
                    }
                    bg="gray.250"
                    borderWidth={"2px"}
                    borderColor={
                      selectedTechnician === staff.id
                        ? "yellow.100"
                        : "gray.250"
                    }
                    rounded="md"
                    _hover={{ borderColor: "yellow.100" }}
                  >
                    <Avatar.Root size="2xl" boxSize={"6rem"}>
                      <Avatar.Fallback name={staff?.name} />
                      <Avatar.Image src={staff?.imageUrl} />
                    </Avatar.Root>
                    <VStack
                      mt={
                        isGridOrientation ? "1rem" : { base: "1rem", sm: "0" }
                      }
                    >
                      <Heading
                        as="h4"
                        fontFamily="playfair"
                        lineHeight={1.4}
                        textTransform={"uppercase"}
                        fontSize="1.45rem"
                      >
                        {staff?.name}
                      </Heading>
                      <Text
                        lineHeight={1.3}
                        fontSize="1.3rem"
                        fontStyle={"italic"}
                      >
                        Beauty Specialist - {staff?.age}yrs
                      </Text>
                    </VStack>
                    <Flex
                      fontSize={"1.1rem"}
                      gap={
                        isGridOrientation ? "1rem" : { base: "1rem", sm: "0" }
                      }
                      my={
                        isGridOrientation
                          ? "1.3rem"
                          : { base: "1.3rem", sm: "0" }
                      }
                      fontStyle={"italic"}
                      flexDirection={
                        isGridOrientation
                          ? "row"
                          : { base: "row", sm: "column" }
                      }
                    >
                      <HStack>
                        <PiUsersThree />
                        <Text>{staff?.totalCompletedAppointments} clients</Text>
                      </HStack>
                      <HStack>
                        <IoIosStar color="orange" />
                        <Text>
                          {staff?.rating === 0 ? 1 : staff?.rating} rating
                        </Text>
                      </HStack>
                    </Flex>
                    <Button
                      px="3rem"
                      py=".5rem"
                      fontSize="1.2rem"
                      bg="transparent"
                      color="black"
                      borderColor="black"
                    >
                      SELECT
                    </Button>
                  </Flex>
                );
              })}
            </Flex>
          )}
          <StepNavigationBtns
            prevOnClick={() => router.back()}
            nextOnClick={handleNextClick}
            nextDisabled={!selectedTechnician}
          />
        </Flex>
      </Box>
      <Box
        w={{ base: "100%", md: "35%" }}
        display={{ base: "none", md: "flex" }}
      >
        <BookingSummary />
      </Box>
    </Flex>
  );
};

export default SelectTechnicianPage;
