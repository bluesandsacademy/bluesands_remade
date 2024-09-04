import Image from "next/image";
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'
import WhyBlueSands from '@/components/WhyBlueSands'
import { features } from "@/utils/data/sample"

export default function Features() {
    return (
        <main className="w-full h-full md:px-10 px-4 ">
            <Navbar />
            {/* Features Hero Section */}
            <section className="w-full md:h-[400px] h-full py-5 flex flex-col md:flex-row items-center justify-between gap-3 bg-[#F5F8FE]">
                <div className="md:w-6/12 w-full h-full flex flex-col items-center md:items-start justify-center md:text-left text-center space-y-5">
                    <h1 className="text-gray-600 text-lg font-semibold">Why BlueSands STEM Labs?</h1>
                    <p className="md:text-5xl text-lg font-bold">Explore the Future of STEM Education: Unleash the Power of Innovation with Our Cutting-Edge Features</p>
                </div>
                <div className="md:w-6/12 w-full h-full">
                    <Image src="/labs/lab space.png" alt="Features Hero Image" width={450} height={450} className="w-full h-full object-contain" />
                </div>
            </section>
            {/* Features Hero Section */}
            {/* Features */}
            <section className="w-full h-full py-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm border-[0.3px] border-gray-200 py-5 px-3 md:w-[90%] w-full space-y-3">
                                <Image src={feature.icon} alt={feature.title} width={50} height={50} />
                                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Features */}
            <WhyBlueSands />
            <Footer />
        </main>
    );
}