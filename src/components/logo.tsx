"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import logo from "@/assets/images/logo.svg";

const Logo = () => {
  const logoWidth = useBreakpointValue({
    base: 120,
    sm: 150,
    md: 180,
    lg: 200,
  });
  const logoHeight = useBreakpointValue({ base: 80, md: 100, lg: 120 });

  return (
    <Link href={"/"}>
      <Image
        src={logo}
        alt="logo"
        width={logoWidth || 150}
        height={logoHeight || 100}
      />
    </Link>
  );
};

export default Logo;
