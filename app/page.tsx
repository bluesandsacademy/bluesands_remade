import Image from "next/image";
import Navbar from "@/components/Navbar";
import LandingHero from "@/components/LandingHero";

export default function Home() {
  return (
    <main className="w-full h-full px-10">
      <Navbar />
      <LandingHero />
    </main>
  );
}
