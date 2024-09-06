"use client"

import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
import { toast } from "react-toastify"

export default function Contact() {

    function handleSubmit(e: any) {
        e.preventDefault();
        toast.info("The contact form is currently under maintenance. Please try again later.");
    }

    return (
        <main className="w-full h-full">
            <Navbar />
            <section className="w-full h-full py-5 flex flex-col md:flex-row items-center justify-between md:px-10 px-4 gap-3 bg-[#F5F8FE]">
                <form onSubmit={handleSubmit} className="md:w-[70%] w-full mx-auto h-full flex flex-col md:flex-row items-start justify-center bg-white shadow-sm border border-gray-300 rounded-md px-3">
                    <div className="md:w-9/12 w-full h-full md:border-r border-b border-gray-300 py-10 flex items-center justify-center flex-col gap-y-5 px-5">
                        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-x-10 gap-y-5">
                            <div className="w-full space-y-2">
                                <label htmlFor="firstName" className="text-gray-600 font-bold">First Name</label>
                                <input type="text" placeholder="Enter First Name" id="firstName" className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2" required />
                            </div>
                            <div className="w-full space-y-2">
                                <label htmlFor="lastName" className="text-gray-600 font-bold">Last Name</label>
                                <input type="text" placeholder="Enter Last Name" id="lastName" className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2" required />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-x-10 gap-y-5">
                            <div className="w-full space-y-2">
                                <label htmlFor="emailAddress" className="text-gray-600 font-bold">Email Address</label>
                                <input type="email" placeholder="Enter Email Address" id="emailAddress" className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2" required />
                            </div>
                            <div className="w-full space-y-2">
                                <label htmlFor="phoneNumber" className="text-gray-600 font-bold">Phone Number</label>
                                <input type="text" placeholder="Enter Phone Number" id="phoneNumber" className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2" required />
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full gap-y-5">
                            <div className="w-full space-y-2">
                                <label htmlFor="subject" className="text-gray-600 font-bold">Subject</label>
                                <input type="text" placeholder="Enter Your Subject" id="subject" className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2" required />
                            </div>
                            <div className="w-full space-y-2">
                                <label htmlFor="message" className="text-gray-600 font-bold">Message</label>
                                <textarea name="message" id="message" placeholder="Enter Your Message" className="w-full h-32 rounded-md border bg-gray-100 border-gray-300 px-3 py-2" required></textarea>
                            </div>
                        </div>
                        <button className="w-full h-12 rounded-md bg-blue-500 text-white font-bold" type="submit">Send Message</button>
                    </div>
                    <div className="md:w-3/12 w-full h-full flex flex-col gap-y-3 items-center justify-between p-2">
                        <div className="flex flex-col items-center justify-center gap-y-5 h-fit w-full border p-2 rounded-md border-gray-300">
                            <Image
                                src="/icons/social/envelope.png"
                                alt="envelope"
                                width={50}
                                height={50}
                                className="mx-auto"
                            />
                            <p className="text-gray-600 font-semibold text-sm text-center lowercase">info@bluesandsstemlabs.com</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-y-5 h-fit w-full border p-2 rounded-md border-gray-300">
                            <Image
                                src="/icons/social/telephone.png"
                                alt="telephone"
                                width={50}
                                height={50}
                                className="mx-auto"
                            />
                            <p className="text-gray-600 font-semibold text-sm text-center">+234-905-493-0215<br />+234-703-419-4669</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-y-5 h-fit w-full border p-2 rounded-md border-gray-300">
                            <Image
                                src="/icons/social/location.png"
                                alt="location"
                                width={50}
                                height={50}
                                className="mx-auto"
                            />
                            <p className="text-gray-600 font-semibold text-sm text-center">EDO STATE<br />No 7 Omokhale Street, Off Federal Government Girls College Road. UBTH Back Gate, Benin City.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-y-5 h-fit w-full border p-2 rounded-md border-gray-300">
                            <div className="flex items-center justify-center gap-x-5">
                                <Link href="#">
                                    <Image
                                        src="/icons/social/facebook.png"
                                        alt="facebook"
                                        width={50}
                                        height={50}
                                        className="mx-auto"
                                    />
                                </Link>
                                <Link href="#">
                                    <Image
                                        src="/icons/social/twitter.png"
                                        alt="twitter"
                                        width={50}
                                        height={50}
                                        className="mx-auto"
                                    />
                                </Link>
                                <Link href="#">
                                    <Image
                                        src="/icons/social/instagram.png"
                                        alt="instagram"
                                        width={50}
                                        height={50}
                                        className="mx-auto"
                                    />
                                </Link>
                            </div>
                            <p className="text-gray-600 font-semibold text-sm text-center">Social Profiles</p>
                        </div>
                    </div>
                </form>
            </section>
            <div className="w-full py-10 h-full bg-white">
                <div className="h-full mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="md:w-6/12 w-full h-full">
                        <div className="md:w-[70%] w-full h-full p-3 relative">
                            <Image
                                src="/stock/guy using vr.png"
                                alt="guy using vr"
                                width={500}
                                height={500}
                                className="h-full w-full object-contain mx-auto"
                            />
                        </div>
                    </div>
                    <div className="md:w-6/12 w-full h-full space-y-5 p-2 flex items-center justify-center flex-col">
                        <h3 className="md:text-7xl text-4xl font-bold md:text-left text-center">Awesome Game-Like Experience.</h3>
                        <p className="md:text-2xl text-xl text-center md:text-left">
                            Engage students with game-like online experiment simulations in science without limits. With features like an engaging lab partner named Oxi, helpful hints, and the ability to skip ahead (with progress recorded in reports), you can make science learning intuitive and personalized.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}