"use client";

import Image from "next/image";
import Link from "next/link";
import { faqData } from "@/utils/data/sample";
import { RxCross2 } from "react-icons/rx";
import { LuPlus } from "react-icons/lu";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="w-full h-full bg-white md:px-20 px-4 py-10">
      <div className="h-fit mx-auto flex md:flex-row flex-col items-start justify-between">
        <div className="md:w-6/12 w-full h-full flex flex-col items-stretch gap-y-5 justify-between">
          {faqData[0].questions.map((question, index) => (
            <div
              key={index}
              className="w-full flex-1 p-3 rounded-md border-[0.3px] border-gray-300 flex flex-col text-gray-700 items-center justify-center gap-y-3"
            >
              <h3
                className={`text-xl flex items-center justify-between cursor-pointer w-full`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{question.question}</span>
                <span className="bg-blue-500/50 rounded-md p-2">
                  {openIndex === index ? (
                    <RxCross2 className="text-black text-lg" />
                  ) : (
                    <LuPlus className="text-black text-lg" />
                  )}
                </span>
              </h3>
              {openIndex === index && <hr className="border-gray-300 w-full" />}
              {openIndex === index && (
                <p className="text-sm flex-grow">{question.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className="md:w-4/12 flex flex-col md:items-start items-center justify-center w-full h-full gap-y-5">
          <div className="space-y-3 md:text-left text-center">
            <h3 className="md:text-3xl text-2xl font-bold">
              Frequently Asked Questions
            </h3>
            <p className="text-lg">
              Still you have any questions? Contact our Team via
              support@bluesandsstemlabs.com
            </p>
          </div>
          <Link
            href="/contact"
            className="border border-gray-400  px-6 py-3 rounded-md"
          >
            Contact Us
          </Link>
          <Image
            src="/stock/man using vr 2.png"
            alt="FAQ"
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
