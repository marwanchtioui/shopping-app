import Hero from "@/Components/Hero";
import NewProducts from "@/Components/NewProducts";
import Testimonial from "@/Components/Testimonial";
import Image from "next/image";

export default function Home() {
  return  (
  <main>
    <Hero/>
    <NewProducts/>
    <Testimonial/>
  </main>
  );
  
}
