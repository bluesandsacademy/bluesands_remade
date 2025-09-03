import Image from "next/image";
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'
import WhyBlueSands from '@/components/WhyBlueSands'
import { featuresGrid } from "@/utils/data/sample"
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';


export default function Features() {
    return (
        <main className="w-full h-full">
            <Navbar />
            {/* Features Hero Section */}
            <section className="w-full md:px-10 px-4 md:h-[400px] h-full py-5 flex flex-col md:flex-row items-center justify-between gap-3 bg-[#F5F8FE]">
                <div className="md:w-6/12 w-full h-full flex flex-col items-center md:items-start justify-center md:text-left text-center space-y-5">
                    {/* <h1 className="text-gray-600 text-lg font-semibold">Why BlueSands STEM Labs?</h1> */}
                    <p className="md:text-5xl text-lg font-bold">Unleash the Power of Innovation with Our Cutting-Edge Features</p>
                    <div className="mt-10 flex items-center gap-x-3">
                        <Link href="http://app.bluesandstemlabs.com/auth/register" className="bg-blue-500 text-white px-6 py-3 rounded-md">Sign Up</Link>
                        <Link href="https://youtu.be/6R8EFrK0Vk0?si=1BTzaPa9C6UrS5Ye" className="text-blue-500 flex items-center gap-x-2 hover:gap-x-3 transition-all duration-300 font-bold">Watch Video <FaArrowRightLong /></Link>
                    </div>
                </div>
                <div className="md:w-6/12 w-full h-full">
                    <Image src="/hero/feature.png" alt="Features Hero Image" width={450} height={450} className="w-full h-full object-contain" />
                </div>
            </section>
            {/* Features Hero Section */}
            {/* Features */}
            <section className="w-full h-full py-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-5 justify-center">
                        {featuresGrid.map((feature, index) => (
                            <div key={index} className="bg-white py-5 px-3 w-full space-y-3 flex flex-col items-center md:items-start justify-center">
                                <Image src={feature.img} alt={feature.title} width={500} height={500} className="mx-auto h-full w-full p-5 bg-white shadow-md rounded-md object-contain" />
                                <h3 className="text-lg font-semibold mb-3  md:text-left text-center">{feature.title}</h3>
                                <p className="text-gray-600 md:text-left text-center">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Features */}
            <WhyBlueSands page="features" />       
            <Footer />
        </main>
    );
}