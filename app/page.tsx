import Image from "next/image";
import Navbar from "@/components/Navbar";
import LandingHero from "@/components/LandingHero";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#F5F8FE]">
      <Navbar />
      <LandingHero />
      <Brands />
    </main>
  );
}
