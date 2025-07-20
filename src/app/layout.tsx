import type { Metadata } from "next";
import { Provider } from "@/components/shared/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lush & Luxe Beauty Salon",
  description: "Luxury beauty salon services.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
