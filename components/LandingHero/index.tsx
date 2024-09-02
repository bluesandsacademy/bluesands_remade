import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function LandingHero() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-full h-full bg-[url('/background/blocks.png')] bg-cover bg-center flex items-center justify-center">
                <div className="w-5/10">
                    <h1 className="text-6xl font-bold">Virtual & Augmented Reality <br /> in STEM Education for<br /> Secondary Schools.</h1>
                    <p className="text-2xl mt-10">Virtual Science Labs offering engaging STEM courses<br /> accessible on tablet or PC anywhere, anytime.</p>
                    <div className="mt-10 flex items-center gap-x-3">
                        <Link href="/pricing" className="bg-blue-500 text-white px-6 py-3 rounded-md">Get Pricing</Link>
                        <Link href="/features" className="text-blue-500 flex items-center gap-x-2 hover:gap-x-3 transition-all duration-300 font-bold">Watch Video <FaArrowRightLong /></Link>
                    </div>
                </div>
                <div className="w-5/10">
                    <Image src="/stock/young man & woman.png" alt="Hero" width={500} height={500} />
                </div>
            </div>
        </div>
    )
}