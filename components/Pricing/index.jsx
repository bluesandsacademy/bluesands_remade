"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const pricingData = [
  {
    title: "Free Plan",
    userType: "Individual",
    description:
      "Outstanding value, because we believe in enhancing science ed everywhere!",
    price: "₦0",
    features: [
      "1 Month",
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
      "Amazing  for fast 3D virtual labs with all the essential features.",
    price: ["₦20,000", "₦15,000"],
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

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(pricingData[1].userType[0]);

  return (
    <div className="w-full h-full bg-white space-y-5 py-10 md:px-16 px-2">
      <div className="container mx-auto flex flex-col items-start justify-center h-full">
        <h3 className="text-3xl font-bold">Our Pricing</h3>
        <p>Explore flexible pricing that fits your program budget.</p>
      </div>
      <div className="flex md:flex-col flex-row items-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-60 gap-y-8">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between h-full rounded-md shadow-md border border-gray-200 p-3 space-y-2 bg-[#F5F8FE]/70"
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
                  {Array.isArray(item.price)
                    ? item.price[item.userType.indexOf(selectedPlan)]
                    : item.price}
                </p>
              </div>
              <div className="bg-white rounded-md w-full h-fit shadow-sm space-y-3">
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
                <button className="bg-blue-500 text-white rounded-b-md px-2 py-3 w-full">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
