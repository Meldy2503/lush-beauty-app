"use client";

import {
  Box,
  Flex,
  Heading,
  RadioGroup,
  Spinner,
  Text,
} from "@chakra-ui/react";
import StepNavigationBtns from "../shared/navigation-btns";
import BookingSummary from "./booking-summary";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAppointment } from "../../store/slices/appointment-slice";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import { useGetBranches } from "@/services/api/book-appointment";
import { BranchesType } from "@/types/book-appointment";



const SelectLocationPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { data: branches, isLoading } = useGetBranches();

  const storedBranch = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.selectedBranch
  );

  const [selectedBranch, setSelectedBranch] = useState<string | null>(
    storedBranch?.id ?? null
  );

  const handleNextClick = () => {
    const selectedBranchObj = branches?.find(
      (branch: BranchesType) => branch?.id === selectedBranch
    );
    if (selectedBranchObj) {
      dispatch(
        updateAppointment({
          selectedBranch: selectedBranchObj,
        })
      );
      router.push("/book-appointment/select-service");
    }
  };

  return (
    <Flex gap="2rem" alignItems="stretch">
      <Flex
        w={{ base: "100%", md: "65%" }}
        bg="white"
        px="2rem"
        pt="2rem"
        shadow="sm"
        h={{ base: "90vh", md: "82.5vh" }}
        position="relative"
        flexDir="column"
      >
        <Heading
          as="h3"
          fontSize={{ base: "1.7rem", md: "1.8rem" }}
          fontFamily="playfair"
          mb="2rem"
          lineHeight={1.3}
          textTransform="uppercase"
        >
          SELECT LOCATION
        </Heading>
        {isLoading ? (
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Spinner my="15rem" />
          </Flex>
        ) : (
          <RadioGroup.Root
            overflowY={"auto"}
            w="full"
            pb="2rem"
            defaultValue={selectedBranch ?? ""}
            value={selectedBranch ?? ""}
            onValueChange={({ value }) => {
              setSelectedBranch(value);
              const selectedBranchObj = branches?.find(
                (branch: BranchesType) => branch?.id === value
              );
              if (selectedBranchObj) {
                dispatch(
                  updateAppointment({
                    selectedBranch: selectedBranchObj,
                  })
                );
              }
            }}
          >
            <Flex gap="2rem" flexDir="column">
              {branches?.map((branch: BranchesType) => (
                <RadioGroup.Item
                  key={branch?.id}
                  value={branch?.id || ''}
                  gap="1.5rem"
                  display="flex"
                  justifyContent="space-between"
                  bg="gray.250"
                  p={{ base: "1.5rem", sm: "2rem" }}
                >
                  <RadioGroup.ItemText>
                    <Box fontSize={{ base: "1.45rem", sm: "1.5rem" }}>
                      <Heading
                        as="h4"
                        fontFamily="playfair"
                        mb=".6rem"
                        lineHeight={1.4}
                        textTransform="uppercase"
                        fontSize={{ base: "1.5rem", sm: "1.6rem" }}
                      >
                        Lush & Luxe – {branch?.name}
                      </Heading>
                      <Text color="gray.100" lineHeight={1.35}>
                        {branch?.address}, {branch?.state}, {branch?.country}
                      </Text>
                    </Box>
                  </RadioGroup.ItemText>
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator scale="1.7" />
                </RadioGroup.Item>
              ))}
            </Flex>
          </RadioGroup.Root>
        )}
        <StepNavigationBtns
          prevOnClick={() => router.back()}
          nextOnClick={handleNextClick}
          nextDisabled={!selectedBranch}
        />
      </Flex>

      <Box
        w={{ base: "100%", md: "35%" }}
        display={{ base: "none", md: "flex" }}
      >
        <BookingSummary  />
      </Box>
    </Flex>
  );
};

export default SelectLocationPage;
