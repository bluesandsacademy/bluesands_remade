import Image from "next/image";
import Navbar from "@/components/Navbar";
import LandingHero from "@/components/LandingHero";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import NewsLetterForm from "@/components/NewsLetterForm";
import WhyBlueSands from "@/components/WhyBlueSands";
import AccessStats from "@/components/AccessStats";
export default function Home() {
  return (
    <main className="w-full h-full bg-[#F5F8FE]">
      <Navbar />
      <LandingHero />
      <Brands />
      <NewsLetterForm />
      <AccessStats />
      <WhyBlueSands />
      <Footer />
    </main>
  );
}
