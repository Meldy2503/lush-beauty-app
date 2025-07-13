"use client";

import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import {
  Box,
  Field,
  Flex,
  Icon,
  Input,
  InputGroup,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { AiOutlineFileText, AiOutlinePlus } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputElementProps {
  label?: string;
  placeholder?: string;
  border?: string;
  autoComplete?: string;
  type?: string;
  min?: string | number;
  disabled?: boolean;
  bg?: string;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
  value?: string | number;
  defaultValue?: string | number;
  h?: string;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  required?: boolean;
}

export const InputElement = ({
  label,
  placeholder,
  h,
  border,
  bg,
  type = "text",
  value,
  defaultValue,
  autoComplete,
  disabled,
  register,
  errorMessage,
  min,
  onChange,
  required = false,
  ...props
}: InputElementProps) => {
  const [show, setShow] = useState(false);

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
      <Field.Root required={required} invalid={!!errorMessage} w="full">
        {label && (
          <Flex mb="1">
            <Field.Label fontSize={"1.5rem"} lineHeight={1.3}>
              {label}
            </Field.Label>
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
          <Input
            type="file"
            display="none"
            onChange={handleFileChange}
            {...props}
          />
        </Box>
        <Field.ErrorText fontSize={"1.4rem"} mt=".3rem" lineHeight={"1.3"}>
          {errorMessage}
        </Field.ErrorText>
      </Field.Root>
    );
  }

  if (type === "textarea") {
    return (
      <Field.Root required={required} invalid={!!errorMessage}>
        {label && (
          <Flex mb="1">
            <Field.Label fontSize={"1.5rem"} lineHeight={1.3}>
              {label}
            </Field.Label>
            {required && <Field.RequiredIndicator color="red.500" ml="1" />}
          </Flex>
        )}

        <Textarea
          p="1.5rem"
          border={border ?? "none"}
          fontSize={"1.6rem"}
          bg={bg ?? "white"}
          height={h ?? "10rem"}
          size={"xl"}
          placeholder={placeholder || label}
          {...props}
          {...register}
          value={value}
          onChange={(e) =>
            onChange?.(e as React.ChangeEvent<HTMLTextAreaElement>)
          }
        />
        <Field.ErrorText fontSize={"1.4rem"} mt=".3rem" lineHeight={"1.3"}>
          {errorMessage}
        </Field.ErrorText>
      </Field.Root>
    );
  }

  if (type === "password") {
    return (
      <Field.Root required={required} invalid={!!errorMessage}>
        {label && (
          <Flex mb="1">
            <Field.Label fontSize={"1.5rem"} lineHeight={1.3}>
              {label}
            </Field.Label>
            {required && <Field.RequiredIndicator color="red.500" ml="1" />}
          </Flex>
        )}
        <InputGroup
          flex="1"
          endElement={
            <Box mr="1.5rem" onClick={() => setShow(!show)}>
              {show ? <FiEyeOff size={17} /> : <FiEye size={17} />}
            </Box>
          }
        >
          <Input
            type={show ? "text" : "password"}
            border={border ?? "none"}
            fontSize={"1.6rem"}
            height="4.5rem"
            bg={bg ?? "white"}
            p="1.5rem"
            placeholder={placeholder || label}
            {...props}
            {...register}
            value={value}
            onChange={onChange}
          />
        </InputGroup>
        <Field.ErrorText fontSize={"1.4rem"} mt=".3rem" lineHeight={"1.3"}>
          {errorMessage}
        </Field.ErrorText>
      </Field.Root>
    );
  }

  return (
    <Field.Root required={required} invalid={!!errorMessage}>
      {label && (
        <Flex mb="1">
          <Field.Label fontSize={"1.5rem"} lineHeight={1.3}>
            {label}
          </Field.Label>
          {required && <Field.RequiredIndicator color="red.500" ml="1" />}
        </Flex>
      )}
      <Input
        border={border ?? "none"}
        bg={bg ?? "white"}
        fontSize={"1.6rem"}
        height="4.5rem"
        p="1.5rem"
        min={min}
        placeholder={placeholder || label}
        type={type ?? "text"}
        {...props}
        {...register}
        value={value}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        disabled={disabled}
        onChange={onChange}
      />
      <Field.ErrorText fontSize={"1.4rem"} mt=".3rem" lineHeight={"1.3"}>
        {" "}
        {errorMessage}
      </Field.ErrorText>
    </Field.Root>
  );
};
