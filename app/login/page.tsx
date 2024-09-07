"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Puff } from "react-loader-spinner";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAuth } from "@/context/AuthContext";
import { baseUrl } from "@/utils/data/sample";

export default function Login() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        emailAddress: "",
        password: "",
    });
    const [viewPassword, setViewPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { storeToken } = useAuth();

    function clearForm() {
        setFormData({
            emailAddress: "",
            password: "",
        })
    }

    function handlePasswordView() {
        setViewPassword(!viewPassword);
    }

    function handleChange(e: any) {
        const { value, id } = e.target;
        setFormData((formData) => ({ ...formData, [id]: value }));
    }

    async function handleSubmit(e: any) {
        setLoading(true);
        e.preventDefault();
        try {
            const response = await axios.post(`${baseUrl}/auth/login`, formData);
            storeToken(response.data.token);
            toast.success("Login successful");
            router.push("/dashboard");
        } catch (error) {
            console.error(error);
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    if (error.response.status === 400) {
                        toast.error(error.response.data.message || "Invalid email or password");
                    } else if (error.response.status === 401) {
                        toast.error("Incorrect password");
                    } else {
                        toast.error("An error occurred. Please try again.");
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    toast.error("No response from server. Please try again later.");
                } else {
                    // Something happened in setting up the request that triggered an Error
                    toast.error("An error occurred. Please try again.");
                }
            } else {
                toast.error("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
            clearForm();
        }
    }

    return (
        <>
            <Navbar />
            <div className="w-full h-full flex md:flex-row flex-col-reverse items-start justify-between gap-x-5 py-20 md:px-20 px-4 bg-[#F5F8FE]">
                <form className="md:w-6/12 mx-auto w-full h-full flex flex-col items-center justify-center bg-white shadow-sm rounded-lg py-5 gap-y-5 md:px-20 px-4" onSubmit={handleSubmit}>
                    <h1 className="text-5xl font-semibold text-center">Login</h1>
                    <p className="text-gray-500 font-normal text-xl text-center">Greetings! We kindly request you to enter your details.</p>
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
                    <div className="mx-auto w-full space-y-2 relative">
                        <label htmlFor="password" className="text-gray-600 font-bold">
                            Password
                        </label>
                        <input
                            type={viewPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            id="password"
                            name="password"
                            className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            onClick={handlePasswordView}
                            className="absolute right-3 top-9"
                        >
                            {viewPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                        </button>
                    </div>
                    <button type="submit" className="w-full h-12 rounded-md bg-blue-500 text-white flex flex-row items-center justify-center gap-x-2">{loading ? <Puff color="#fff" height={20} width={20} /> : "Login"}</button>
                    <p className="w-full flex flex-row items-center justify-center gap-x-2">Don&apos;t have an account? <Link href="/signup" className="underline">Sign Up</Link></p>
                </form>
            </div>
            <Footer />
        </>
    )
}