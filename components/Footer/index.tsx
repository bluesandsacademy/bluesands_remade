import { socialMedia } from "@/utils/data/sample";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    {
        title: "Features",
        link: "/features",
    },
    {
        title: "Our Prices",
        link: "/prices",
    },
    {
        title: "Feedbacks",
        link: "/feedbacks",
    },
    {
        title: "Our FAQ",
        link: "/faq",
    }
]

export default function Footer() {
    return (
        <div className="w-full px-10 bg-white py-2">
            <div className="w-full flex items-start justify-center py-10 border-t border-gray-200 md:flex-row flex-col gap-x-10">
                <div className="flex flex-col gap-y-5 w-full md:w-1/3">
                    <Image src="/logo/logo.png" alt="logo" width={100} height={100} />
                    <p>Blue Sands STEM Lab offers a standalone VR headset with a student-friendly interface, integrated educational VR & AR resources, and intuitive teacher controls.</p>
                </div>
                <div className="flex gap-y-5 gap-x-10 w-full md:flex-row flex-col">
                    <div className="flex flex-col gap-y-5 w-full md:w-1/3">
                        <Link href="/" className="text-xl font-bold text-blue-500">Home</Link>
                        <div className="flex flex-col gap-y-2">
                            {footerLinks.map((item, index) => (
                                <Link key={index} href={item.link}>{item.title}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5 w-full md:w-1/3">
                        <h1 className="text-xl font-bold text-blue-500">Contact Us</h1>
                        <div className="flex flex-col gap-y-2">
                            <p>info@bluesandsstemlabs.com</p>
                            <p>+234-905-493-0215</p>
                            <p>+234-703-419-4669</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3 w-full md:w-1/3">
                        <h1 className="text-xl font-bold text-blue-500">Location</h1>
                        <div className="flex flex-col gap-y-2">
                            <h3 className="text-lg font-bold">EDO STATE</h3>
                            <p>No 7 Omokhale Street, Off Federal Government Girls College Road. UBTH Back Gate, Benin City.</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h3 className="text-lg font-bold">LAGOS STATE</h3>
                            <p>Greenland Estate, House 10 Ogombo Rd, Subuola Abu St, Lagos Island, Sangotedo 105102, Lagos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-between border-t border-gray-200 py-10 md:flex-row flex-col gap-y-5">
                <p className="text-md text-gray-500 font-semibold md:text-left text-center capitalize">©{new Date().getFullYear()} Blue Sands STEM Labs. All rights reserved.</p>
                <div className="flex items-center gap-x-3">
                    {socialMedia.map((item, index) => (
                        <Link key={index} href={item.href} target="_blank">
                            <Image src={item.icon} alt={item.title} width={30} height={30} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}