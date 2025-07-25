import ProtectedRoute from "@/components/auth/protected-route";
import OrdersPage from "@/components/orders/orders";

export const metadata = {
  title: "Lush Beauty - Premium Beauty Products",
  description:
    "Experience luxury beauty products and services with Lush Beauty.",
};

export default function Orders() {
  return (
    <ProtectedRoute>
      <OrdersPage />
    </ProtectedRoute>
  );
}
