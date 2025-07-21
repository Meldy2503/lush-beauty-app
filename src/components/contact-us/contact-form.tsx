import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { InputElement } from "../shared/input-element";

const ContactForm = () => {
  return (
    <Box>
      <form>
        <Stack gap="2.5rem">
          <InputElement label="Full name" placeholder="Peter Smith" />

          <InputElement
            label="Email address"
            placeholder="peter@gmail.com"
            type="email"
          />
          <InputElement
            label="Phone number"
            placeholder="+447056835551"
            type="tel"
          />
          <InputElement
            label="How can we help you?"
            placeholder="Enter your message"
            type="textarea"
          />
        </Stack>
      </form>
    </Box>
  );
};

export default ContactForm;
