"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button as ChakraButton,
} from "@chakra-ui/react";
import Wrapper from "../shared/wrapper";
import Image from "next/image";
import reviewerImg from "../../assets/images/personal-booking-img.webp";
import reviewerImg1 from "../../assets/images/reviewImg1.jpg";
import reviewerImg2 from "../../assets/images/reviewImg2.jpg";
import reviewerImg3 from "../../assets/images/reviewImg3.jpg";
import reviewerImg4 from "../../assets/images/reviewImg4.jpeg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useEffect, useState, useCallback } from "react";

const ReviewSection = () => {
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, containScroll: false },
    [Autoplay({ delay: 3000 }), Fade()]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Update selected index
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  // Scroll to selected slide
  const scrollTo = useCallback(
    (index: number) => {
      if (!embla) return;
      embla.scrollTo(index);
    },
    [embla]
  );

  // Initialize embla event listeners
  useEffect(() => {
    if (!embla) return;

    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <Wrapper>
      <Box zIndex={2} boxShadow="lg" position="relative" mb="3rem">
        <Box
          position="absolute"
          left="-2rem"
          top="-2rem"
          height={{ base: "109%", md: "112%" }}
          zIndex={-1}
          width={{ base: "50%", md: "40%" }}
          bg="yellow.100"
          borderRadius="md"
        />

        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          gap={{ base: "4rem", md: "2rem" }}
          bg="black"
          color="white"
          px={{ base: "2rem", sm: "5rem", lg: "8rem" }}
          py={{ base: "6rem", md: "12rem" }}
          alignItems="center"
          position="relative"
        >
          {/* Left: Embla Carousel */}
          <Box w={{ base: "100%", md: "55%" }} ref={emblaRef} overflow="hidden">
            <Flex
              className="embla__container"
              flexDirection="row"
              flexWrap="nowrap"
            >
              {reviewData.map((review) => (
                <Box
                  key={review.id}
                  className="embla__slide"
                  flex="0 0 100%"
                  pr={{ base: "1rem", md: "2rem" }}
                >
                  <Text>{review.text}</Text>
                  <Flex alignItems="center" gap="2rem" mt="3rem">
                    <Image
                      src={review.imageUrl}
                      alt={`Image of ${review.name}`}
                      width={100}
                      height={100}
                      style={{
                        borderRadius: "50%",
                        height: "5rem",
                        width: "5rem",
                        objectFit: "cover",
                      }}
                    />
                    <Text fontFamily="playfair">{review.name}</Text>
                  </Flex>
                </Box>
              ))}
            </Flex>

            {/* Dots */}
            <Flex
              justify="center"
              bottom={{ base: "3rem", md: "5rem" }}
              left="0"
              right="0"
              gap=".7rem"
              position={"absolute"}
              alignItems={"center"}
            >
              {scrollSnaps.map((_, index) => (
                <ChakraButton
                  key={index}
                  onClick={() => scrollTo(index)}
                  borderRadius="full"
                  bg={index === selectedIndex ? "yellow.100" : "gray.50"}
                  width={index === selectedIndex ? "12px" : "8px"}
                  height={index === selectedIndex ? "12px" : "8px"}
                  minWidth="unset"
                />
              ))}
            </Flex>
          </Box>

          {/* Right: Static Section */}
          <Flex
            w={{ base: "100%", md: "40%" }}
            direction="column"
            alignItems="flex-end"
          >
            <Heading
              as="h3"
              fontSize={{ base: "2.5rem", md: "3.5rem" }}
              fontFamily="playfair"
              mb={4}
            >
              REVIEWS
            </Heading>
            <Text
              color="yellow.50"
              mt={{ base: ".5rem", md: "1rem" }}
              fontSize={{ base: "1.5rem", md: "1.7rem" }}
            >
              YOUR KIND WORDS
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default ReviewSection;

const reviewData = [
  {
    id: 1,
    text: "Lush & Luxe is my go-to for all things beauty. Their facials and makeup services are top-notch. Every visit feels special. I always leave feeling confident and refreshed!",
    name: "Nancy Katherine",
    imageUrl: reviewerImg,
  },
  {
    id: 2,
    text: "From the serene ambiance to the skilled stylists, everything at Lush & Luxe screams luxury. The staff are friendly and attentive. It’s the perfect escape from a hectic week.",
    name: "Emily Johnson",
    imageUrl: reviewerImg1,
  },
  {
    id: 3,
    text: "I've been a regular for over a year now. Their services are consistent and always excellent. The salon is clean, peaceful, and stylish. I highly recommend them to everyone.",
    name: "Sarah Williams",
    imageUrl: reviewerImg2,
  },
  {
    id: 4,
    text: "Booked a pre-wedding pamper session with friends and it was incredible. The atmosphere was calming and cozy. Staff were warm and helpful. It truly felt like a luxury retreat.",
    name: "Jade O’Connell",
    imageUrl: reviewerImg3,
  },
  {
    id: 5,
    text: "Lush & Luxe exceeded my expectations! From the moment I arrived, I felt cared for. My stylist was talented and friendly. I left with glowing skin and a happy heart.",
    name: "Beatrice Mensah",
    imageUrl: reviewerImg4,
  },
  {
    id: 6,
    text: "I love how professional and welcoming the team is. Their attention to detail is amazing. Every session is relaxing, and the results are always flawless. Highly recommend to everyone!",
    name: "Amara Lewis",
    imageUrl: reviewerImg,
  },
];
