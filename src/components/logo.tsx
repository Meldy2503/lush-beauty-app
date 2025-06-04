"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.svg";

const Logo = () => {

  return (
    <Link href={"/"}>
      <Image src={logo} alt="logo" height={150} width={200} />
    </Link>
  );
};

export default Logo;
