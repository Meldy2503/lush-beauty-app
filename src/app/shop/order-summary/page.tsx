import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import OrderSummaryPage from "@/components/shop-page/order-summary";

export const metadata = {
  title: "Lush Beauty - Premium Beauty Products",
  description:
    "Experience luxury beauty products and services with Lush Beauty.",
};

export default function OrderSummary() {
  return (
    <>
      <Navbar />
      <OrderSummaryPage />
      <Footer />
    </>
  );
}
