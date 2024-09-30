import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tran Thanh Toan Portfolio",
  description:
    "I’m a passionate Frontend Developer with experience in building responsive, interactive, and user-friendly web applications. My expertise spans across HTML5, CSS3, JavaScript, and modern frameworks like React, Vue.js, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100dvh] sm:pt-[74px] max-sm:pb-[74px]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
