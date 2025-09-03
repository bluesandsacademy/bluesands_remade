"use client"
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link'

export default function VirtualStemLab() {
    return (
        <main className="w-full h-full">
            <Navbar />
            <div className="w-full h-full bg-white md:px-10 px-4">
                <div className="w-full h-full container flex flex-col md:flex-row mx-auto py-10 justify-between md:px-10 px-2">
                    <div className="w-full h-full flex items-center justify-center gap-3">
                        <div className="w-fit h-full mr-auto flex items-center justify-center bg-[#F5F8FE] p-3 rounded-md relative">
                            <Image
                                src="/page/stem-labs-01.png"
                                alt="Blue Sands STEM Labs"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className=" w-full h-fit flex flex-col justify-between md:items-start items-center gap-5 md:mt-[10rem] mt-0">
                        <div className="space-y-5">
                            <h3 className="md:text-5xl text-3xl font-bold relative md:text-left text-center">
                                <span className="relative">Virtual STEM Labs  <Image
                                    src="/icons/little child vr user.png"
                                    alt="Little Child VR User"
                                    width={100}
                                    height={100}
                                    className="absolute -top-0 -right-20 md:block hidden"
                                /></span>
                                <Image
                                    src="/icons/little child vr user.png"
                                    alt="Little Child VR User"
                                    width={80}
                                    height={80}
                                    className="absolute bottom-1 -right-3 md:hidden block"
                                />
                            </h3>
                            <p className="md:text-lg text-md md:text-left text-center">
                                Blue Sands Virtual STEM Labs offers interactive simulations that bring STEM concepts to life, enabling students to explore, experiment, and build skills in a dynamic digital environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full bg-[#F5F8FE] md:px-10 px-4">
                <div className="w-full h-full container flex flex-col-reverse md:flex-row mx-auto py-10 justify-between md:px-10 px-2">
                    <div className=" w-full h-fit flex flex-col justify-between md:items-start items-center gap-5 md:mt-[10rem] mt-0">
                        <div className="space-y-5">
                            <h3 className="md:text-5xl text-3xl font-bold relative md:text-left text-center">
                                The Virtual Biology Lab
                            </h3>
                            <p className="md:text-lg text-md md:text-left text-center">
                                The virtual lab provides interactive simulations to explore core biological concepts, including cellular structures, metabolic pathways, and gene expression, covering topics from basic chemistry to advanced biotechnology and genomics.
                            </p>
                        </div>
                        <Link href="http://app.bluesandstemlabs.com/auth/register" className="bg-blue-500 text-white px-5 py-3 rounded-md">Enroll Now</Link>
                    </div>
                    <div className="w-full h-full flex items-center justify-center gap-3">
                        <div className="w-fit h-full ml-auto flex items-center justify-center bg-[#F5F8FE] p-3 rounded-md relative">
                            <Image
                                src="/labs/biology_learning_objectives.png"
                                alt="Blue Sands STEM Labs"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full h-full bg-[#F5F8FE] md:px-10 px-4">
                <div className="w-full h-full container flex flex-col md:flex-row mx-auto py-10 justify-between md:px-10 px-2">
                    <div className="w-full h-full flex items-center justify-center gap-3">
                        <div className="w-fit h-full mr-auto flex items-center justify-center bg-[#F5F8FE] p-3 rounded-md relative">
                            <Image
                                src="/labs/chem lab.png"
                                alt="Blue Sands STEM Labs"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className=" w-full h-fit flex flex-col justify-between md:items-start items-center gap-5 md:mt-[10rem] mt-0">
                        <div className="space-y-5">
                            <h3 className="md:text-5xl text-3xl font-bold relative md:text-left text-center">

                                Virtual Chemistry <br className="md:hidden block" /> Lab{" "}
                                <span className="bg-blue-500 text-white px-5 py-1 rounded-full inline-flex items-center gap-x-2 mx-2 shadow-md">
                                    <FaArrowRightLong
                                        className="inline-block text-white"
                                        size={40}
                                    />{" "}
                                </span>

                            </h3>
                            <p className="md:text-lg text-md md:text-left text-center">
                                The virtual lab offers interactive simulations to explore key chemistry concepts like atomic structure, bonding, stoichiometry, gas laws, and calorimetry, helping students build foundational skills and practical knowledge.
                            </p>
                        </div>
                        <Link href="http://app.bluesandstemlabs.com/auth/register" className="bg-blue-500 text-white px-5 py-3 rounded-md">Enroll Now</Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-full bg-[#F5F8FE] md:px-10 px-4">
                <div className="w-full h-full container flex flex-col-reverse md:flex-row mx-auto py-10 justify-between md:px-10 px-2">
                    <div className=" w-full h-fit flex flex-col justify-between md:items-start items-center gap-5 md:mt-[10rem] mt-0">
                        <div className="space-y-5">
                            <h3 className="md:text-5xl text-3xl font-bold relative md:text-left text-center">
                                Virtual Physics Lab
                            </h3>
                            <p className="md:text-lg text-md md:text-left text-center">
                                It uses interactive simulations to teach core physics concepts, including forces, energy, motion, waves, gravitational fields, and satellite orbits, helping students apply theory to practical scenarios.
                            </p>
                        </div>
                        <Link href="http://app.bluesandstemlabs.com/auth/register" className="bg-blue-500 text-white px-5 py-3 rounded-md">Enroll Now</Link>
                    </div>
                    <div className="w-full h-full flex items-center justify-center gap-3">
                        <div className="w-fit h-full ml-auto flex items-center justify-center bg-[#F5F8FE] p-3 rounded-md relative">
                            <Image
                                src="/page/stem-labs-02.png"
                                alt="Blue Sands STEM Labs"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    )
}