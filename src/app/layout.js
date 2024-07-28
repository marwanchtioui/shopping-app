import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/Components/HeaderTop";
import HeaderMain from "@/Components/HeaderMain";
import NavBar from "@/Components/NavBar";
import MobNavbar from "@/Components/MobNavbar";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping App",
  description: "Shopping App for Everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop/>
        <HeaderMain/>
        <NavBar/>
        <MobNavbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
