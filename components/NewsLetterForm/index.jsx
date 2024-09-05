"use client";

import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import { Puff } from "react-loader-spinner";

export default function NewsLetterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubscribe(e) {
    setLoading(true);
    e.preventDefault();
    const endpoint = `https://email-delivery-api.onrender.com/newsletter`;
    try {
      await axios.post(endpoint, { emailAddress: email });
      toast("Successfully Subscribed");
      setEmail("");
    } catch (error) {
      console.error(error);
      toast("Subscription Failed... Please Try Again Later");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-full bg-[#F5F8FE] bg-repeat-x bg-center py-16 relative">
      <div className="w-full h-full container flex flex-col gap-y-2 items-center text-center justify-center p-3">
        <Image
          src="/icons/icon.png"
          alt="Little VR User"
          width={50}
          height={50}
          className="absolute top-5 md:right-[10rem] right-5"
        />
        <Image
          src="/icons/noto_microscope.png"
          alt="Microscope"
          width={50}
          height={50}
          className="absolute bottom-5 md:left-[10rem] left-5"
        />
        <h3 className="text-5xl font-bold">Newsletter</h3>
        <p className="text-3xl font-bold">
          Stay Ahead with Blue Sands STEM Labs!
        </p>
        <p className="text-sm md:w-3/6 w-full font-normal">
          Join our community and get the latest Updates! Resources , and
          exclusive offers, subscribe to our newsletter and stay informed on how
          Blue sands STEM Labs can enhance your STEM teaching experiences.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex items-center border border-gray-300 rounded-md w-full md:w-2/6"
        >
          <input
            type="emailAddress"
            placeholder="Enter your email"
            className="px-4 h-12 w-full py-2 rounded-l-md"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 h-12 text-white px-4 py-2 rounded-r-md"
            onChange={(e) => setEmail(e.target.value)}
          >
            {loading ? "Loading..." : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
}
