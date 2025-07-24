import ProtectedRoute from "@/components/auth/protected-route";
import UserAppointmentsPage from "@/components/user-appointments/appointments";

export const metadata = {
  title: "Lush Beauty - Premium Beauty Products",
  description:
    "Experience luxury beauty products and services with Lush Beauty.",
};

export default function UserAppointments() {
  return (
    <ProtectedRoute>
      <UserAppointmentsPage />
    </ProtectedRoute>
  );
}
