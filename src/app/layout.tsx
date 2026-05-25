import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Load Google Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

// Base SEO Metadata
export const metadata: Metadata = {
  title: {
    template: "%s | Learning Beyond the Classroom",
    default: "LBC | Learning Beyond the Classroom",
  },
  description: "A nonprofit educational foundation empowering students through public policy, governance, and civic awareness.",
  keywords: ["education", "nonprofit", "public policy", "civic awareness", "student governance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}