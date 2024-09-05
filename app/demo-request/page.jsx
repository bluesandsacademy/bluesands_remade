"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { countries } from "@/utils/data/sample";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Puff } from "react-loader-spinner";

const content = [
  {
    title: "Get a Platform Overview",
    description:
      "Learn how Blue Sands Stem Labs aligns with your program and engages your students.",
    img: "/icons/social/overview.png",
  },
  {
    title: "Discuss Your Needs",
    description:
      "Discover how Blue Sands Stem Labs can help you drive outcomes and meet your expectations.",
    img: "/icons/social/timeline.png",
  },
  {
    title: "Receive a Quote",
    description: "Access Customized Pricing",
    img: "/icons/social/quote.png",
  },
  {
    title: "Discuss Implementation Timeline",
    description: "Learn how we can support your rollout Designed.",
    img: "/icons/social/beaker.png",
  },
];

export default function DemoRequest() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    institutionType: "",
    position: "",
    country: "",
    course: "",
    emailOptIn: false,
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const baseUrl = `http://email-delivery-api.onrender.com/request-demo`;
    setLoading(true);

    try {
      toast("Successfully Processed Demo Request");
      await axios.post(baseUrl, formData);
      router.push("/demo-request/success");
    } catch (error) {
      toast.error(
        "There was a problem scheduling your demo appointment, please try again later"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="w-full h-full flex md:flex-row flex-col-reverse items-start justify-between gap-x-5 py-20 md:px-20 px-4 bg-[#F5F8FE]">
        <form
          className="md:w-6/12 w-full h-full flex flex-col items-center justify-center bg-white shadow-sm rounded-lg p-5 gap-y-5 px-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-x-10 gap-y-5">
            <div className="w-full space-y-2">
              <label htmlFor="firstName" className="text-gray-600 font-bold">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                required
              />
            </div>
            <div className="w-full space-y-2">
              <label htmlFor="lastName" className="text-gray-600 font-bold">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-x-10 gap-y-5">
            <div className="w-full space-y-2">
              <label htmlFor="email" className="text-gray-600 font-bold">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                required
              />
            </div>
            <div className="w-full space-y-2">
              <label htmlFor="phone" className="text-gray-600 font-bold">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-x-10 gap-y-5">
            <div className="w-full space-y-2">
              <label htmlFor="company" className="text-gray-600 font-bold">
                Institution/Company Name
              </label>
              <input
                type="text"
                placeholder="Enter Institution/Company Name"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                required
              />
            </div>
            <div className="w-full space-y-2">
              <label
                htmlFor="institutionType"
                className="text-gray-600 font-bold"
              >
                Type of Institution
              </label>
              <input
                type="text"
                placeholder="Enter The Type of Institution You're from "
                id="institutionType"
                name="institutionType"
                value={formData.institutionType}
                onChange={handleChange}
                className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-x-10 gap-y-5">
            <div className="w-full space-y-2">
              <label htmlFor="position" className="text-gray-600 font-bold">
                Position
              </label>
              <input
                type="text"
                placeholder="Enter Your Position In The Institution"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                required
              />
            </div>
            <div className="w-full space-y-2">
              <label htmlFor="country" className="text-gray-600 font-bold">
                Country
              </label>
              <select
                name="country"
                id="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                required
              >
                <option value="">-- Select Country --</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-x-10 gap-y-5">
            <div className="w-full space-y-2">
              <label className="block text-gray-700">
                Relevant Course Topic
              </label>
              <select
                value={formData.course}
                onChange={handleChange}
                id="course"
                name="course"
                className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                required
              >
                <option value="">Relevant Course Topic</option>
                <option value="Anatomy &amp; Physiology">
                  Anatomy &amp; Physiology
                </option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Cellular and Molecular Biology">
                  Cellular and Molecular Biology
                </option>
                <option value="General Biology">General Biology</option>
                <option value="General Chemistry">General Chemistry</option>
                <option value="Genetics">Genetics</option>
                <option value="Microbiology">Microbiology</option>
                <option value="Nursing">Nursing</option>
                <option value="Organic Chemistry">Organic Chemistry</option>
                <option value="Physics">Physics</option>
                <option value="Biochemistry">Biochemistry</option>
                <option value="Analytical Chemistry">
                  Analytical Chemistry
                </option>
                <option value="Other Chemistry">Other Chemistry</option>
                <option value="Other Biology">Other Biology</option>
                <option value="Clinical Sciences">Clinical Sciences</option>
                <option value="Engineering">Engineering</option>
                <option value="Environmental Sciences">
                  Environmental Sciences
                </option>
                <option value="High School">High School</option>
              </select>
            </div>
            <div className="w-full space-y-2">
              <label className="block text-gray-700">Email Newsletters</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="emailOptIn"
                  id="emailOptIn"
                  checked={formData.emailOptIn}
                  onChange={handleChange}
                  className="mr-2 h-5 w-5"
                />
                <label htmlFor="emailOptIn">Yes</label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-12 rounded-md bg-blue-600 text-white inline-flex items-center justify-center"
          >
            {!loading ? (
              <span className="relative">Schedule Demo</span>
            ) : (
              <Puff color="#FFF" width={30} height={30} />
            )}
          </button>
        </form>
        <div className="md:w-6/12 w-full h-full flex flex-col gap-5 items-start justify-center">
          <div className="space-y-3">
            <h1 className="text-5xl font-normal">Demo Request</h1>
            <p className="text-gray-500 font-normal text-xl">
              Take a brief guided tour and learn how Blue Sands Stem Labs can
              help your program reach its goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {content.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-start justify-center gap-3 w-fit"
              >
                <Image src={item.img} alt={item.title} width={40} height={40} />
                <div className="flex flex-col items-start justify-center">
                  <h3 className="text-md font-bold">{item.title}</h3>
                  <p className="text-sm text-left">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Image
              src="/stock/child using laptop.png"
              alt="child using laptop"
              width={500}
              height={500}
              className="md:block hidden"
            />
          </div>
        </div>
      </div>
      <div className="w-full py-10 h-full bg-white mx-auto">
        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center gap-5">
          <div className="md:w-6/12 w-full">
            <div className="md:w-[70%] w-full mr-auto h-full p-3 relative bg-[#F5F8FE]">
              <Image
                src="/stock/lady with headphones.png"
                alt="lady with headphones"
                width={500}
                height={500}
                className="mx-auto"
              />
            </div>
          </div>
          <div className="md:w-6/12 w-full space-y-5 p-2 flex items-center flex-col justify-center">
            <h3 className="md:text-5xl text-4xl font-semibold relative text-center md:text-left">
              Is Blue Sands Virtual STEM Labs suitable for all age groups?
            </h3>
            <p className="text-xl text-center md:text-left">
              Yes, Blue Sands Virtual STEM Labs offers a range of labs suitable
              for different age levels, from elementary to high school.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
