import AboutPageModule from "@/modules/AboutPageModule";
import Header from "@/modules/Header";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <>
      <Header />
      <AboutPageModule />
    </>
  );
}
