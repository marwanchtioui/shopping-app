import { Inter } from "next/font/google";
import "./globals.css";
import "./build.css"; 
import HeaderTop from "@/Components/HeaderTop";
import HeaderMain from "@/Components/HeaderMain";
import NavBar from "@/Components/NavBar";
import MobNavbar from "@/Components/MobNavbar";
import Footer from "@/Components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping App",
  description: "Shopping App for Everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <HeaderTop />
        <HeaderMain />
        <NavBar />
        <MobNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
