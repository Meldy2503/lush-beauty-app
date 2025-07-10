"use client";

import {
  Accordion,
  Box,
  Checkbox,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import StepNavigationBtns from "../ui/navigation-btns";
import BookingSummary from "./booking-summary";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { updateAppointment } from "@/store/slices/appointment-slice";
import { useEffect, useState } from "react";

// Sample data - moved to top to avoid hoisting issues
export const serviceItems = [
  {
    value: "1001",
    name: "facial treatment",
    description:
      "Glow starts with great skin. Hydrate, cleanse, and refresh your face with our custom facials.",
    categories: [
      {
        id: "1",
        name: "Skin Analysis ",
        estimatedTime: "30",
        price: 20,
      },
      {
        id: "2",
        name: "Exfoliation ",
        estimatedTime: "30",
        price: 10,
      },
      {
        id: "3",
        name: "Hydrating Mask",
        estimatedTime: "30",
        price: 25,
      },
      {
        id: "4",
        name: "Face & Neck Massage",
        estimatedTime: "30",
        price: 15,
      },
    ],
  },
  {
    value: "1002",
    name: "body treatment",
    description: "Relax and rejuvenate with our luxurious body treatments.",
    categories: [
      {
        name: "Full Body Massage",
        estimatedTime: "60",
        price: 50,
      },
      {
        name: "Body Scrub",
        estimatedTime: "45",
        price: 35,
      },
      {
        name: "Hot Stone Therapy",
        estimatedTime: "75",
        price: 60,
      },
      {
        id: "4",
        name: "Aromatherapy",
        estimatedTime: "90",
        price: 70,
      },
    ],
  },
  {
    value: "1003",
    name: "nail care",
    description: "Perfect your nails with our professional nail care services.",
    categories: [
      {
        name: "Manicure",
        estimatedTime: "45",
        price: 25,
      },
      {
        name: "Pedicure",
        estimatedTime: "60",
        price: 30,
      },
      {
        name: "Gel Polish",
        estimatedTime: "30",
        price: 20,
      },
      {
        id: "4",
        name: "Nail Art",
        estimatedTime: "60",
        price: 40,
      },
    ],
  },
  {
    value: "1004",
    name: "hair styling",
    description:
      "Transform your look with our professional hair styling services.",
    categories: [
      {
        id: "1",
        name: "Cut & Style",
        estimatedTime: "60",
        price: 45,
      },
      {
        id: "2",
        name: "Color Treatment",
        estimatedTime: "120",
        price: 80,
      },
      {
        id: "3",
        name: "Deep Conditioning",
        estimatedTime: "45",
        price: 30,
      },
      {
        id: "4",
        name: "Styling Only",
        estimatedTime: "30",
        price: 25,
      },
    ],
  },
];

const SelectServicePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const serviceSelections = useSelector(
    (state: RootState) => state.appointment.appointments[0]?.serviceSelections
  );

  // Initialize state with existing selections or empty array
  const [selectedServices, setSelectedServices] = useState<
    { serviceId: string; categoryIds: string[] }[]
  >(serviceSelections || []);

  const handleServiceToggle = (serviceId: string, categoryName: string) => {
    setSelectedServices((prev) => {
      const existingService = prev.find(
        (service) => service.serviceId === serviceId
      );

      if (existingService) {
        // Service exists, toggle the category
        const isSelected = existingService.categoryIds.includes(categoryName);

        return prev.map((service) =>
          service.serviceId === serviceId
            ? {
                ...service,
                categoryIds: isSelected
                  ? service.categoryIds.filter((id) => id !== categoryName)
                  : [...service.categoryIds, categoryName],
              }
            : service
        );
      } else {
        // Service doesn't exist, add it with this category
        return [...prev, { serviceId, categoryIds: [categoryName] }];
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
  const isServiceSelected = (serviceId: string, categoryName: string) => {
    const service = selectedServices.find(
      (service) => service.serviceId === serviceId
    );
    return service?.categoryIds.includes(categoryName) || false;
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
        <Accordion.Root
          collapsible
          variant={"plain"}
          h={{ base: "90vh", md: "66vh" }}
          pb={{ base: "5rem", md: "2rem" }}
          overflowY={"auto"}
        >
          {serviceItems.map((item, index) => (
            <Accordion.Item key={index} value={item.value} py=".4rem">
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
                    {item.name}
                  </Text>
                  <Text
                    fontSize={{ base: "1.4rem", md: "1.5rem" }}
                    lineHeight={1.4}
                    color="gray.100"
                  >
                    {item.description}
                  </Text>
                </Box>
                <Accordion.ItemIndicator fontSize={"2rem"} color="black" />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent
                bg="gray.250"
                borderRadius={"0rem"}
                pb="1rem"
              >
                {item.categories.map((service, serviceIndex) => {
                  return (
                    <Accordion.ItemBody
                      key={serviceIndex}
                      px={{ base: "1.7rem", sm: "2.5rem" }}
                      pb="2rem"
                    >
                      <Checkbox.Root
                        size="lg"
                        checked={isServiceSelected(item.value, service.name)}
                        onCheckedChange={() =>
                          handleServiceToggle(item.value, service.name)
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
                            {service.name}
                          </Text>
                          <Text
                            fontSize={{ base: "1.35rem", sm: "1.4rem" }}
                            mt=".7rem"
                          >
                            {service.estimatedTime} mins - £{service.price}
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
