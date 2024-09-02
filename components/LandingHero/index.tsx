import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function LandingHero() {
    return (
        <div className="w-full h-full md:h-screen flex items-center justify-center">
            <div className="w-full h-full container bg-[url('/background/blocks.png')] bg-cover bg-center flex items-center justify-center md:flex-row flex-col">
                <div className="md:w-6/12 w-full h-full flex flex-col justify-center p-10">
                    <h1 className="md:text-6xl text-4xl font-bold">Virtual & Augmented Reality in STEM Education for Secondary Schools.</h1>
                    <p className="md:text-2xl text-lg mt-10">Virtual Science Labs offering engaging STEM courses<br /> accessible on tablet or PC anywhere, anytime.</p>
                    <div className="mt-10 flex items-center gap-x-3">
                        <Link href="/pricing" className="bg-blue-500 text-white px-6 py-3 rounded-md">Get Pricing</Link>
                        <Link href="/features" className="text-blue-500 flex items-center gap-x-2 hover:gap-x-3 transition-all duration-300 font-bold">Watch Video <FaArrowRightLong /></Link>
                    </div>
                </div>
                <div className="md:w-6/12 w-full h-full flex items-center justify-center">
                    <Image src="/stock/young man & woman.png" alt="Hero" width={750} height={750} className="w-[750px] h-[750px] md:w-auto md:h-[80%] object-cover" />
                </div>
            </div>
        </div>
    )
}