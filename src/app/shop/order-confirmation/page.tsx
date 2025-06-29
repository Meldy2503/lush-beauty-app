import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import OrderConfirmationPage from "@/components/shop-page/order-confirmation";

export const metadata = {
  title: "Lush Beauty - Premium Beauty Products",
  description:
    "Experience luxury beauty products and services with Lush Beauty.",
};

export default function OrderConfirmation() {
  return (
    <>
      <Navbar />
      <OrderConfirmationPage />
      <Footer />
    </>
  );
}
