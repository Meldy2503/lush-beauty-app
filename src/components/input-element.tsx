"use client";

import React, { useState } from "react";

import {
  Box,
  Field,
  Flex,
  Icon,
  Input,
  Text,
  Textarea,
  defineStyle,
} from "@chakra-ui/react";
import { AiOutlineFileText, AiOutlinePlus } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";

interface InputElementProps {
  inputStyle?: "floating" | "filled";
  label?: string;
  placeholder?: string;
  border?: string;
  type?: string;
  value?: string;
  h?: string;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  required?: boolean;
}

export const InputElement = ({
  inputStyle,
  label,
  placeholder,
  h,
  border,
  type = "text",
  value,
  onChange,
  required = false,
  ...props
}: InputElementProps) => {
  // Track the uploaded filename to switch icons and show the name
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  // If this is a file input, style it to show an icon and label, matching the screenshot
  if (type === "file") {
    // Wrap `onChange` so we can capture the file name too
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
      if (e.target.files && e.target.files.length > 0) {
        setSelectedFile(e.target.files[0].name);
      } else {
        setSelectedFile(null);
      }
    };

    return (
      <Field.Root required={required} w="full">
        {label && (
          <Flex mb="1">
            <Field.Label fontWeight="semibold">{label}</Field.Label>
            {required && <Field.RequiredIndicator color="red.500" ml="1" />}
          </Flex>
        )}

        <Box
          as="label"
          p="1.5rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          _hover={{ bg: "gray.50" }}
          cursor="pointer"
          width="full"
        >
          <Flex alignItems="center">
            {/* Show a + icon if no file is selected, otherwise show a file icon */}
            <Icon boxSize={5} mr={2} color="gray.600">
              {selectedFile ? <AiOutlineFileText /> : <AiOutlinePlus />}
            </Icon>
            {/* If `selectedFile` exists, show its name; otherwise fallback to `value` prop or “No file selected” */}
            <Text color="gray.700">
              {selectedFile || value || "No file selected"}
            </Text>
          </Flex>
          {/* Show "Change File" text if a file is selected */}
          {selectedFile && (
            <Flex gap="5px" alignItems={"center"} color="blue.500">
              <BiPlus />
              <Text fontSize="sm">Change File</Text>
            </Flex>
          )}
          {/* Hidden native input that opens the file picker */}
          <Input
            type="file"
            required
            display="none"
            onChange={handleFileChange}
            {...props}
          />
        </Box>
      </Field.Root>
    );
  }
  if (inputStyle == "floating") {
    return (
      <Field.Root required={required}>
        <Box pos="relative" w="full">
          <Input
            required
            fontSize={"1.6rem"}
            border="1px solid"
            py="1.5rem"
            px="1rem"
            type={type}
            {...props}
            value={value}
            onChange={(e) =>
              onChange?.(e as React.ChangeEvent<HTMLInputElement>)
            }
            rounded={"8px"}
          />
          <Field.Label css={floatingStyles}>{label}</Field.Label>
        </Box>
      </Field.Root>
    );
  }
  if (type === "textarea") {
    return (
      <Field.Root required={required}>
        {label && (
          <Field.Label fontSize={"1.6rem"} mb=".8rem">
            {label}
          </Field.Label>
        )}
        <Textarea
          p="1.5rem"
          required
          border={border ?? "none"}
          fontSize={"1.6rem"}
          bg="white"
          height={h ?? "10rem"}
          size={"xl"}
          placeholder={placeholder || label}
          {...props}
          value={value}
          onChange={(e) =>
            onChange?.(e as React.ChangeEvent<HTMLTextAreaElement>)
          }
        />
      </Field.Root>
    );
  }
  return (
    <Field.Root required={required}>
      <Flex>
        {label && (
          <Field.Label fontSize={"1.6rem"} mb=".8rem">
            {label}
          </Field.Label>
        )}
        {required && <Field.RequiredIndicator color={"black"} />}
      </Flex>
      <Input
        border={border ?? "none"}
        fontSize={"1.6rem"}
        height="4.5rem"
        bg="white"
        p="1.5rem"
        required
        placeholder={placeholder || label}
        type={type}
        {...props}
        value={value}
        onChange={onChange}
      />
    </Field.Root>
  );
};

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  fontSize: "1.6rem",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
  },
});
