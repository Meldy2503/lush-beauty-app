import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProductItem from "@/components/shop-page/product";

export const metadata = {
  title: "Lush Beauty - Premium Beauty Products",
  description:
    "Experience luxury beauty products and services with Lush Beauty.",
};

export default function Product() {
  return (
    <>
      <Navbar />
      <ProductItem />
      <Footer />
    </>
  );
}
