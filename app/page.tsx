import Navbar from "@/components/Navbar";
import LandingHero from "@/components/LandingHero";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import NewsLetterForm from "@/components/NewsLetterForm";
import WhyBlueSands from "@/components/WhyBlueSands";
import AccessStats from "@/components/AccessStats";
import BookFreeDemo from "@/components/BookFreeDemo";
import ProvidingYourChild from "@/components/ProvidingYourChild";
import Pricing from "@/components/Pricing";
import MeetTheTeam from "@/components/MeetTheTeam";
import LabForSecondarySchools from "@/components/LabForSecondarySchools";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#F5F8FE]">
      <Navbar />
      <LandingHero />
      <Brands />
      <BookFreeDemo />
      {/* Lab for Secondary Schools */}
      <LabForSecondarySchools />
      {/* Lab for Secondary Schools */}
      <ProvidingYourChild />
      <AccessStats />
      <WhyBlueSands />
      <Pricing />
      <MeetTheTeam />
      <NewsLetterForm />
      <FAQ />
      <Footer />
    </main>
  );
}
