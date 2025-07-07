"use client";

import { Box, Flex, Heading, RadioGroup, Text } from "@chakra-ui/react";
import StepNavigationBtns from "../ui/navigation-btns";
import BookingSummary from "./booking-summary";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAppointment } from "../../store/slices/appointment-slice";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface SelectLocationProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  value: string;
}

const SelectLocation = ({ setStep, step }: SelectLocationProps) => {
  const dispatch = useDispatch();
  const branchId = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.branchId
  );

  const initialSelected =
    branches.find((branch) => branch.id === branchId)?.value || null;
  const [selectedBranch, setSelectedBranch] = useState<string | null>(
    initialSelected ?? null
  );

  const handleNextClick = () => {
    const selectedBranchObj = branches.find(
      (branch) => branch.value === selectedBranch
    );
    if (selectedBranchObj) {
      dispatch(
        updateAppointment({
          branchId: selectedBranchObj.id,
        })
      );
      setStep(step + 1);
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

        <RadioGroup.Root
          defaultValue={selectedBranch ?? ""}
          w="full"
          value={selectedBranch ?? ""}
          onValueChange={({ value }) => {
            setSelectedBranch(value);
            const selectedBranchObj = branches.find(
              (branch) => branch.value === value
            );
            if (selectedBranchObj) {
              dispatch(
                updateAppointment({
                  branchId: selectedBranchObj.id,
                })
              );
            }
          }}
        >
          <Flex gap="2rem" flexDir="column">
            {branches.map((branch) => (
              <RadioGroup.Item
                key={branch.id}
                value={branch.value}
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
                      mb="1rem"
                      lineHeight={1.4}
                      textTransform="uppercase"
                      fontSize={{ base: "1.5rem", sm: "1.6rem" }}
                    >
                      Lush & Luxe – {branch.name}
                    </Heading>
                    <Text color="gray.100" lineHeight={1.35}>
                      {branch.address}, {branch.city}, {branch.country}
                    </Text>
                  </Box>
                </RadioGroup.ItemText>
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator scale="1.7" />
              </RadioGroup.Item>
            ))}
          </Flex>
        </RadioGroup.Root>

        <StepNavigationBtns
          prevOnClick={() => setStep(step - 1)}
          nextOnClick={handleNextClick}
        />
      </Flex>

      <Box
        w={{ base: "100%", md: "35%" }}
        display={{ base: "none", md: "flex" }}
      >
        <BookingSummary />
      </Box>
    </Flex>
  );
};

export default SelectLocation;

export const branches: Branch[] = [
  {
    id: "1001",
    name: "Central London",
    address: "68 Charlotte Street, Fitzrovia, W1T 4QF",
    city: "London",
    country: "UK",
    value: "1",
  },
  {
    id: "2001",
    name: "West London",
    address: "68 Charlotte Street, Fitzrovia, W1T 4QF",
    city: "London",
    country: "UK",
    value: "2",
  },
];
