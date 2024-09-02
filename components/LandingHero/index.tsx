import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function LandingHero() {
    return (
        <div className="w-full h-screen flex items-center justify-center my-2">
            <div className="w-full h-full bg-[url('/background/blocks.png')] bg-cover bg-center flex items-center justify-center md:flex-row flex-col">
                <div className="w-5/10 md:p-20 p-10">
                    <h1 className="md:text-6xl text-4xl font-bold">Virtual & Augmented Reality in STEM Education for Secondary Schools.</h1>
                    <p className="md:text-2xl text-lg mt-10">Virtual Science Labs offering engaging STEM courses<br /> accessible on tablet or PC anywhere, anytime.</p>
                    <div className="mt-10 flex items-center gap-x-3">
                        <Link href="/pricing" className="bg-blue-500 text-white px-6 py-3 rounded-md">Get Pricing</Link>
                        <Link href="/features" className="text-blue-500 flex items-center gap-x-2 hover:gap-x-3 transition-all duration-300 font-bold">Watch Video <FaArrowRightLong /></Link>
                    </div>
                </div>
                <div className="w-5/10">
                    <Image src="/stock/young man & woman.png" alt="Hero" width={500} height={500} className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
    )
}