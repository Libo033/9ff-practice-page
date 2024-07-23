import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation/NavigationBar";
import Footer from "@/components/navigation/Footer";
import FloatingButtonTop from "@/components/navigation/FloatingButtonTop";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "9FF German Engineering",
  description: "Practice page of 9ff german engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className + " relative"}>
        <NavigationBar />
        {children}
        <Footer />
        <FloatingButtonTop />
      </body>
    </html>
  );
}
