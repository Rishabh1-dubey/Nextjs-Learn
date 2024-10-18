import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhychooseUs from "@/components/WhychooseUs";
import { Testnomial } from "@/components/Testnomial";
import UpcomingWebniar from "@/components/UpcomingWebniar";
import Instractor from "@/components/Instractor";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2] ">
       <HeroSection/>
       <FeaturedCourses/>
       <WhychooseUs/>
    <Testnomial/>
    <UpcomingWebniar/>
    <Instractor/>
      
    </main>
  );
}
