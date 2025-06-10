"use client";

import Footer from "../footer";
import Navbar from "../navbar";
import ShopHeroSection from "./shop-hero";
import ShopListSection from "./shop-list";

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <ShopHeroSection />
      <ShopListSection />
      <Footer />
    </>
  );
}
