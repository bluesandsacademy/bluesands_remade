"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import FAQ from "@/components/FAQ";

const content = [
  {
    title: "Get Pricing",
    description: "Explore flexible pricing that fits your program",
    img: "/icons/social/get_pricing.png",
  },
  {
    title: "Receive a Quote",
    description: "Access Customized Pricing",
    img: "/icons/social/quote.png",
  },
  {
    title: "Get an overview ",
    description: "Discuss your specific needs and next steps",
    img: "/icons/social/overview.png",
  },
  {
    title: "Discuss Implementation Timeline",
    description: "Learn how we can support your rollout Designed.",
    img: "/icons/social/timeline.png",
  },
];
const pricingData = [
  {
    title: "Free Plan",
    userType: "Individual",
    description:
      "Outstanding value, because we believe in enhancing science ed everywhere!",
    price: {
      Naira: "₦0",
      Dollar: "$0"
    },
    features: [
      "14 Days Free Trial",
      "Full Access to 10 Simulations",
      "No Credit Card Required",
      "14-Day Money-Back Guarantee",
      "Unlimited repititions of laboratory practicals",
      "Instant guidance",
      "Complementary content",
      "English interface",
      "Access to all updates",
    ],
  },
  {
    title: "Termly Plan",
    userType: ["Individual", "School"],
    description:
      "Amazing for fast 3D virtual labs with all the essential features.",
    price: {
      Naira: ["₦5,000", "₦5,000"],
      Dollar: ["$5", "$5"]
    },
    features: [
      "4 Months plan",
      "Full Access to 10 Simulations",
      "7-Day Money-Back Guarantee",
      "Unlimited Laboratory Exercise",
      "Instant guidance",
      "Complementary content",
      "English interface",
      "Access to all updates",
      "Progress tracking and performance analytics",
    ],
  },
];

const currencyOptions = ["Naira", "Dollar"];


export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState(pricingData[1].userType[0]);
  const [currency, setCurrency] = useState("Naira");

  return (
    <main className="w-full h-full">
      <Navbar />
      <div className="w-full py-10 h-full bg-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-center gap-5">
          <div className="md:w-6/12 w-full space-y-10 p-2">
            <h3 className="text-5xl font-bold relative text-left">
              Virtual & Augmented Reality in STEM Education for Secondary
              Schools.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {content.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center justify-center gap-3 w-fit"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="text-md font-bold">{item.title}</h3>
                    <p className="text-sm text-left">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-6/12 w-full">
            <div className="md:w-[70%] grid grid-cols-2 gap-10 ml-auto w-full h-full p-3 ">
              {[...Array(4)].map((_, index) => (
                <Image
                  key={index}
                  src={`/students/stock_${index + 1}.png`}
                  alt={`Student ${index + 1}`}
                  width={150}
                  height={150}
                  className="rounded-lg object-contain h-full w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-[#F5F8FE] py-10 md:px-20 px-2">
        <div className="flex flex-col items-center h-full space-y-4 md:space-y-0 gap-y-3">
          <h3 className="text-3xl font-bold">Our Pricing</h3>
          <p className="text-center md:text-left">Explore flexible pricing that fits your program budget.</p>
          <div className="flex items-center gap-x-2 flex-wrap justify-center">
            {currencyOptions.map((option, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-md text-lg ${
                  currency === option
                    ? "bg-blue-500 text-white"
                    : "border-blue-500 border text-blue-500"
                }`}
                onClick={() => setCurrency(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-4 gap-y-8">
            {pricingData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between h-full rounded-md shadow-md border border-gray-200 p-3 space-y-2 bg-[#F5F8FE]/50"
              >
                <div className="w-full flex flex-col items-center justify-center gap-y-3">
                  <h3 className="text-3xl font-bold bg-blue-500/30 text-center p-2 w-full rounded-sm">
                    {item.title}
                  </h3>
                  {Array.isArray(item.userType) && (
                    <div className="flex justify-center space-x-2 mb-2">
                      {item.userType.map((type, typeIndex) => (
                        <button
                          key={typeIndex}
                          className={`px-3 py-1 rounded-md text-xl ${
                            selectedPlan === type
                              ? "bg-blue-500 text-white"
                              : "border-blue-500 border text-blue-500"
                          }`}
                          onClick={() => setSelectedPlan(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                  {typeof item.userType === "string" ? (
                    <button className="px-3 py-1 rounded-md text-xl bg-blue-500 text-white mb-2">
                      {item.userType}
                    </button>
                  ) : null}
                  <p className="text-center text-sm">{item.description}</p>
                  <p className="text-center text-7xl my-2 font-bold">
                    {Array.isArray(item.price[currency])
                      ? item.price[currency][
                          item.userType.indexOf(selectedPlan)
                        ]
                      : item.price[currency]}
                  </p>
                </div>
                <div className="bg-white rounded-md w-full flex items-center flex-col justify-center h-fit shadow-sm gap-y-3">
                  <h3 className="font-semibold text-lg text-center mt-2">
                    Available Features
                  </h3>
                  <ul className="text-left space-y-3 p-2">
                    {item.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 rounded-md shadow-sm p-2 border border-gray-200"
                      >
                        <span className="bg-blue-500/30 rounded-md p-2">
                          <FaCheck className="text-blue-500 text-sm" />
                        </span>
                        <p>{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/signup"
                    className="bg-blue-500 text-white rounded-b-md px-2 py-3 w-full text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FAQ page="pricing" />
      <Footer />
    </main>
  );
}