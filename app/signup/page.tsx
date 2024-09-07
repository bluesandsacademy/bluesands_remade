"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { countries, workPosition, faculties, howYouHeardAboutUsList, nigerianStates, baseUrl } from "@/utils/data/sample";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Puff } from "react-loader-spinner";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

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
        title: "Explore End-to-End Support",
        description: "Hear about how Blue Sands Stem Labs supports your program every step of the way.",
        img: "/icons/social/support.png",
    },
    {
        title: "See Real-Time Impact",
        description: "Understand how Blue Sands STEM Labs provides actionable insights and analytics to track student progress and optimize learning outcomes.",
        img: "/icons/social/beaker.png",
    },
];

const userTypes = [
    "Individual",
    "School"
]

export default function Signup() {
    const [userType, setUserType] = useState<string>("Individual");
    const [formData, setFormData] = useState({
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        password: "",
        position: "",
        institutionCompanyName: "",
        state: "",
        howCanCompanyHelpYou: "",
        howDidYouHearAboutUs: "",
        userRole: userTypes[0],
    });
    const [selectedAccountType, setSelectedAccountType] = useState(userTypes[0]);
    const [viewPassword, setViewPassword] = useState(false);
    const [loading, setLoading] = useState(false);


    function clearForm() {
        setFormData({
            fullName: "",
            emailAddress: "",
            phoneNumber: "",
            password: "",
            position: "",
            institutionCompanyName: "",
            state: "",
            howCanCompanyHelpYou: "",
            howDidYouHearAboutUs: "",
            userRole: userTypes[0],
        })
    }

    function handlePasswordView() {
        setViewPassword(!viewPassword);
    }

    function handleUserTypeSwitch(index: number) {
        const selectedType = userTypes[index];
        setSelectedAccountType(selectedType);
        setUserType(selectedType);
        setFormData((formData) => ({ ...formData, userRole: selectedType }));
    }

    function handleSelect(e: any) {
        const { value, id } = e.target;
        setFormData((formData) => ({ ...formData, [id]: value }));
    }

    function handleChange(e: any) {
        const { value, id } = e.target;
        setFormData((formData) => ({ ...formData, [id]: value }));
    }

    async function handleSubmit(e: any) {
        setLoading(true);
        e.preventDefault();
        try {
            await axios.post(
                `${baseUrl}/auth/signup`,
                formData
            );
            toast("Sign Up Successful");
        } catch (error: any) {
            console.error(error);
            if (error && !error.response) {
                toast("Sign Up Failed... Please Try Again Later");
                return;
            }

            if (error && error.response) {
                toast(error.response.data.message);
            }
        } finally {
            setLoading(false);
            clearForm();
        }
    }

    return (
        <div>
            <Navbar />
            <div className="w-full h-full flex md:flex-row flex-col-reverse items-start justify-between gap-x-5 py-20 md:px-20 px-4 bg-[#F5F8FE]">
                <form className="md:w-6/12 w-full h-full flex flex-col items-center justify-center bg-white shadow-sm rounded-lg py-5 gap-y-5 md:px-20 px-4" onSubmit={handleSubmit}>
                    <h1 className="text-5xl font-semibold">Sign Up</h1>
                    <p className="text-gray-500 font-normal text-xl">Greetings! We kindly request you to enter your details.</p>
                    <div className="w-full h-full flex flex-row items-center gap-x-5 justify-center">
                        {userTypes.map((item, index) => (
                            <button key={index} type="button" className={`w-full h-12 rounded-md ${userType === item ? "bg-blue-500 text-white" : "bg-white text-black"}`} onClick={() => handleUserTypeSwitch(index)}>{item}</button>
                        ))}
                    </div>
                    <div className="mx-auto w-full space-y-2">
                        <label htmlFor="fullName" className="text-gray-600 font-bold">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            id="fullName"
                            name="fullName"
                            className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mx-auto w-full space-y-2">
                        <label htmlFor="emailAddress" className="text-gray-600 font-bold">
                            Email Address
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email Address"
                            id="emailAddress"
                            name="emailAddress"
                            className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                            required
                            value={formData.emailAddress}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mx-auto w-full space-y-2">
                        <label htmlFor="phoneNumber" className="text-gray-600 font-bold">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                            required
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mx-auto w-full space-y-2 relative">
                        <label htmlFor="password" className="text-gray-600 font-bold">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                placeholder="Enter Your Password"
                                id="password"
                                name="password"
                                type={viewPassword ? "text" : "password"}
                                className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2 pr-10"
                                required
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <button
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100"
                                type="button"
                                onClick={handlePasswordView}
                            >
                                {viewPassword ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="gray"
                                            fillRule="evenodd"
                                            d="M1 12c2.028-4.152 6.192-7 11-7s8.972 2.848 11 7c-2.028 4.152-6.192 7-11 7s-8.972-2.848-11-7m11 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="gray"
                                            fillRule="evenodd"
                                            d="m18.922 16.8l3.17 3.17l-1.06 1.061L4.06 4.061L5.12 3l2.74 2.738A11.9 11.9 0 0 1 12 5c4.808 0 8.972 2.848 11 7a12.66 12.66 0 0 1-4.078 4.8m-8.098-8.097l4.473 4.473a3.5 3.5 0 0 0-4.474-4.474zm5.317 9.56A11.9 11.9 0 0 1 12 19c-4.808 0-8.972-2.848-11-7a12.66 12.66 0 0 1 4.078-4.8l3.625 3.624a3.5 3.5 0 0 0 4.474 4.474l2.964 2.964z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="w-full space-y-2">
                        <label
                            className="text-gray-600 font-bold"
                            htmlFor="state"
                        >
                            State
                        </label>
                        <select
                            className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                            id="state"
                            onChange={handleSelect}
                            required
                            value={formData.state}
                        >
                            <option value="" className="text-gray-600 font-bold">
                                {"<--"} Select {"-->"}
                            </option>
                            {nigerianStates.map((state, index) => (
                                <option className="text-gray-600 font-bold" key={index} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>
                    {selectedAccountType === "School" && (
                        <>
                            <div className="mx-auto w-full space-y-2">
                                <label
                                    className="text-gray-600 font-bold"
                                    htmlFor="institutionCompanyName"
                                >
                                    Name of Institution
                                </label>
                                <input
                                    className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                                    id="institutionCompanyName"
                                    type="text"
                                    placeholder="Name of Institution"
                                    onChange={handleChange}
                                    value={formData.institutionCompanyName}
                                    required
                                />
                            </div>
                            <div className="mx-auto w-full space-y-2">
                                <label
                                    className=" text-gray-600 font-bold"
                                    htmlFor="position"
                                >
                                    Position
                                </label>
                                <select
                                    className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                                    id="position"
                                    onChange={handleSelect}
                                    required
                                    value={formData.position}
                                >
                                    <option value="" className="text-gray-600 font-bold">
                                        {"<--"} Select {"-->"}
                                    </option>
                                    {workPosition.map((position, index) => (
                                        <option key={index} value={position} className="text-gray-600 font-bold">
                                            {position}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mx-auto w-full space-y-2">
                                <label
                                    className="text-gray-600 font-bold"
                                    htmlFor="howCanCompanyHelpYou"
                                >
                                    How Can We Help You?
                                </label>
                                <input
                                    className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                                    id="howCanCompanyHelpYou"
                                    type="text"
                                    placeholder="How Can We Help You?"
                                    onChange={handleChange}
                                    value={formData.howCanCompanyHelpYou}
                                    required
                                />
                            </div>
                            <div className="mx-auto w-full space-y-2">
                                <label
                                    className="text-gray-600 font-bold"
                                    htmlFor="howDidYouHearAboutUs"
                                >
                                    How did you hear about us?
                                </label>
                                <select
                                    className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                                    id="howDidYouHearAboutUs"
                                    required
                                    onChange={handleSelect}
                                    value={formData.howDidYouHearAboutUs}
                                >
                                    <option value="" className="text-gray-600 font-bold">
                                        {"<--"} Select {"-->"}
                                    </option>
                                    {howYouHeardAboutUsList.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </>
                    )}
                    <div className="mx-auto flex flex-row items-center justify-center gap-x-2 w-full">
                        <input
                            type="checkbox"
                            id="agree"
                            name="agree"
                            className="h-4 rounded-md border bg-gray-100 border-gray-300"
                            required
                        />
                        <label htmlFor="agree" className="w-full text-gray-600 font-bold">
                            I agree with the <Link href="#" className="underline">Terms of Use</Link> and <Link href="#" className="underline">Privacy Policy</Link>
                        </label>
                    </div>
                    <button type="submit" className="w-full h-12 rounded-md bg-blue-500 text-white flex flex-row items-center justify-center gap-x-2">{loading ? <Puff color="#fff" height={20} width={20} /> : "Sign Up"}</button>
                    <p className="w-full flex flex-row items-center justify-center gap-x-2">Already have an account? <Link href="/login" className="underline">Login</Link></p>
                </form>
                <div className="md:w-6/12 w-full h-full flex flex-col gap-5 items-start justify-center">
                    <div className="space-y-3">
                        <h1 className="text-5xl font-normal">Create an Account</h1>
                        <p className="text-gray-500 font-normal text-xl">
                            Greetings! We kindly request you to enter your details.
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
                            src="/stock/two women looking at laptop.png"
                            alt="two women looking at laptop"
                            width={500}
                            height={500}
                            className="md:block hidden"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}