import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";



export default function LandingHero() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full container bg-[url('/background/blocks.png')] bg-cover bg-center flex items-center justify-center md:flex-row flex-col mx-auto">
                {/* Desktop View */}
                <div className="md:w-8/12 w-full h-full md:flex hidden flex-col justify-center md:px-0 px-3">
                    <h1 className="md:text-6xl text-4xl font-bold relative">Virtual & Augmented <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><Image src="/icons/little vr user.png" className="absolute -top-6 right-[18rem] z-10" alt="VR" width={95} height={95} /> Reality <br /> in 
                    STEM Education for Secondary Schools.</h1>
                    <p className="md:text-2xl text-lg mt-10">Virtual Science Labs offering engaging STEM courses<br /> accessible on tablet or PC anywhere, anytime.</p>
                    <div className="mt-10 flex items-center gap-x-3">
                        <Link href="/pricing" className="bg-blue-500 text-white px-6 py-3 rounded-md">Get Pricing</Link>
                        <Link href="/features" className="text-blue-500 flex items-center gap-x-2 hover:gap-x-3 transition-all duration-300 font-bold">Watch Video <FaArrowRightLong /></Link>
                    </div>
                </div>
                {/* Mobile View */}
                <div className="md:w-8/12 w-full h-full md:hidden flex flex-col justify-center md:px-0 px-3 gap-y-5 py-10">
                    <h1 className="text-2xl font-bold relative">Virtual & Augmented <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><Image src="/icons/little vr user.png" className="absolute -top-2 right-[7.3rem] z-10" alt="VR" width={40} height={40} /> Reality in <br /> <span className="bg-blue-500 text-white px-5 py-1 rounded-full inline-flex items-center gap-x-2 mx-1 shadow-md"><FaArrowRightLong className="inline-block text-white" size={18} /> </span>STEM Education for Secondary Schools.</h1>
                    <p className="md:text-2xl text-lg ">Virtual Science Labs offering engaging STEM courses<br /> accessible on tablet or PC anywhere, anytime.</p>
                    <div className="flex items-center gap-x-3">
                        <Link href="/pricing" className="bg-blue-500 text-white px-6 py-3 rounded-md">Get Pricing</Link>
                        <Link href="/features" className="text-blue-500 flex items-center gap-x-2 hover:gap-x-3 transition-all duration-300 font-bold">Watch Video <FaArrowRightLong /></Link>
                    </div>
                </div>
                <div className="w-fit h-full flex items-center justify-start relative">
                    <Image src="/icons/icon.png" alt="VR" width={60} height={60} className="absolute top-10 md:-right-10 -right-10" />
                    <Image src="/icons/noto_microscope.png" alt="VR" width={100} height={100} className="absolute md:bottom-10 bottom-0 md:-left-28 -left-20" />
                    <Image src="/stock/young man & woman.png" alt="Hero" width={400} height={400} className="object-cover md:h-[450px] h-[400px] md:w-[400px] w-[300px]" />
                </div>
            </div>
        </div>
    )
}