"use client";

import {
  Accordion,
  Box,
  Checkbox,
  Flex,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import StepNavigationBtns from "../shared/navigation-btns";
import BookingSummary from "./booking-summary";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { updateAppointment } from "@/store/slices/appointment-slice";
import { useEffect, useState } from "react";
import { useGetServices } from "@/services/api/book-appointment";
import { CategoriesType, ServicesType } from "@/types/book-appointment";

const SelectServicePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { data: services, isLoading } = useGetServices();

  const storedService = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.serviceSelections
  );

  // Initialize state with existing selections or empty array
  const [selectedServices, setSelectedServices] = useState<
    { serviceId: string; categoryIds: CategoriesType[] }[]
  >(storedService || []);

  // Handle service category selection toggle
  const handleServiceToggle = (serviceId: string, category: CategoriesType) => {
    setSelectedServices((prev) => {
      const existingService = prev.find(
        (service) => service.serviceId === serviceId
      );

      if (existingService) {
        // Service exists, toggle the category
        const isSelected = existingService.categoryIds.some(
          (cat) => cat.id === category.id
        );

        return prev.map((service) =>
          service.serviceId === serviceId
            ? {
                ...service,
                categoryIds: isSelected
                  ? service.categoryIds.filter((cat) => cat.id !== category.id)
                  : [...service.categoryIds, category],
              }
            : service
        );
      } else {
        // Service doesn't exist, add it with this category
        return [...prev, { serviceId, categoryIds: [category] }];
      }
    });
  };

  useEffect(() => {
    // Filter out services with empty categoryIds before dispatching
    const filteredServices = selectedServices.filter(
      (service) => service.categoryIds.length > 0
    );

    dispatch(updateAppointment({ serviceSelections: filteredServices }));
  }, [selectedServices, dispatch]);

  // Check if a specific service category is selected
  const isServiceSelected = (serviceId: string, categoryId: string) => {
    const service = selectedServices.find(
      (service) => service.serviceId === serviceId
    );
    return service?.categoryIds.some((cat) => cat.id === categoryId) || false;
  };

  const handleNextClick = () => {
    dispatch(
      updateAppointment({
        serviceSelections: selectedServices,
      })
    );
    router.push("/book-appointment/select-technician");
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
          mb="2rem"
          lineHeight={1.3}
          textTransform={"uppercase"}
        >
          SELECT SERVICES
        </Heading>
        {isLoading ? (
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Spinner my="15rem" />
          </Flex>
        ) : (
          <Accordion.Root
            collapsible
            variant={"plain"}
            h={{ base: "90vh", md: "66vh" }}
            pb={{ base: "5rem", md: "2rem" }}
            overflowY={"auto"}
          >
            {services?.map((service: ServicesType) => (
              <Accordion.Item
                key={service?.id}
                value={service?.id || ""}
                py=".4rem"
              >
                <Accordion.ItemTrigger
                  bg="gray.250"
                  py="2.5rem"
                  px={{ base: "1.5rem", sm: "2.5rem" }}
                  borderRadius={"0rem"}
                >
                  <Box mr="1rem" flex="1">
                    <Text
                      fontSize={{ base: "1.5rem", md: "1.6rem" }}
                      lineHeight={1.4}
                      textTransform={"uppercase"}
                      fontFamily="playfair"
                      mb=".7rem"
                    >
                      {service?.name}
                    </Text>
                    <Text
                      fontSize={{ base: "1.4rem", md: "1.5rem" }}
                      lineHeight={1.4}
                      color="gray.100"
                    >
                      {service?.description}
                    </Text>
                  </Box>
                  <Accordion.ItemIndicator fontSize={"2rem"} color="black" />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent
                  bg="gray.250"
                  borderRadius={"0rem"}
                  pb="1rem"
                >
                  {service?.categories?.map((category: CategoriesType) => {
                    return (
                      <Accordion.ItemBody
                        key={category?.id}
                        px={{ base: "1.7rem", sm: "2.5rem" }}
                        pb="2rem"
                      >
                        <Checkbox.Root
                          size="lg"
                          checked={isServiceSelected(
                            service?.id || "",
                            category?.id || ""
                          )}
                          onCheckedChange={() =>
                            handleServiceToggle(service?.id || "", category)
                          }
                        >
                          <Checkbox.HiddenInput />
                          <Checkbox.Control scale={"1.25"}>
                            <Checkbox.Indicator />
                          </Checkbox.Control>
                          <Checkbox.Label ml=".6rem">
                            <Text
                              fontSize={{ base: "1.4rem", sm: "1.45rem" }}
                              fontWeight={"600"}
                            >
                              {category?.name}
                            </Text>
                            <Text
                              fontSize={{ base: "1.35rem", sm: "1.4rem" }}
                              mt=".7rem"
                            >
                              {category?.estimatedTime} mins - £
                              {category?.price}
                            </Text>
                          </Checkbox.Label>
                        </Checkbox.Root>
                      </Accordion.ItemBody>
                    );
                  })}
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        )}
        <StepNavigationBtns
          prevOnClick={() => router.back()}
          nextOnClick={handleNextClick}
          nextDisabled={selectedServices.length === 0}
        />
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

export default SelectServicePage;
