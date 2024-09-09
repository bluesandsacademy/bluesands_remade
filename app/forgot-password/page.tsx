"use client"
import { useState } from "react"
import axios from 'axios'
import { Puff } from "react-loader-spinner";
import { toast } from 'react-toastify';
import { baseUrl } from "@/utils/data/sample";
import { useRouter } from "next/navigation";

function SetNewPassword({ formData, handleChange, handleSubmitNewPassword, loading }: any) {
    return (
        <form className="md:w-6/12 mx-auto w-full h-full flex flex-col items-center justify-center bg-white shadow-sm rounded-lg py-5 gap-y-5 md:px-20 px-4" onSubmit={handleSubmitNewPassword}>
            <h1 className="text-5xl font-semibold text-center">Set New Password</h1>
            <p className="text-gray-500 font-normal text-xl text-center">Create a new password for your account to complete the reset process.</p>
            <div className="mx-auto w-full space-y-2">
                <label htmlFor="emailAddress" className="text-gray-600 font-bold">
                    New Password
                </label>
                <input
                    type="password"
                    placeholder="Enter New Password"
                    id="password"
                    name="password"
                    className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                    required
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit" className="w-full h-12 rounded-md bg-blue-500 text-white flex flex-row items-center justify-center gap-x-2">{loading ? <Puff color="#fff" height={20} width={20} /> : "Submit"}</button>
            </div>
        </form>
    )
}

function OTPForm({ formData, handleChange, handleSubmitOTP, loading, resendPassword }: any) {
    return (
        <form className="md:w-6/12 mx-auto w-full h-full flex flex-col items-center justify-center bg-white shadow-sm rounded-lg py-5 gap-y-5 md:px-20 px-4" onSubmit={handleSubmitOTP}>
            <h1 className="text-5xl font-semibold text-center">Submit OTP</h1>
            <p className="text-gray-500 font-normal text-xl text-center">Enter the one-time password (OTP) sent to your email or phone to proceed.</p>

            <div className="mx-auto w-full space-y-2">
                <label htmlFor="otp" className="text-gray-600 font-bold">
                    OTP
                </label>
                <input
                    type="text"
                    placeholder="Enter (OTP)"
                    id="otp"
                    name="otp"
                    className="w-full h-12 rounded-md border bg-gray-100 border-gray-300 px-3 py-2"
                    required
                    value={formData.otp}
                    onChange={handleChange}
                />
                <button type="submit" className="w-full h-12 rounded-md bg-blue-500 text-white flex flex-row items-center justify-center gap-x-2">{loading ? <Puff color="#fff" height={20} width={20} /> : "Submit"}</button>
                <p className="text-gray-500 font-normal text-xl text-center">
                    Didn't receive the OTP? <button onClick={resendPassword} className="text-blue-500 font-semibold">Resend OTP</button>.
                </p>
            </div>
        </form>
    )
}
function EmailForm({ formData, handleChange, handleSubmitEmail, loading }: any) {
    return (
        <form className="md:w-6/12 mx-auto w-full h-full flex flex-col items-center justify-center bg-white shadow-sm rounded-lg py-5 gap-y-5 md:px-20 px-4" onSubmit={handleSubmitEmail}>
            <h1 className="text-5xl font-semibold text-center">Reset Password</h1>
            <p className="text-gray-500 font-normal text-xl text-center">Please enter your details to receive a one-time password (OTP) for resetting your password.</p>
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
                <button type="submit" className="w-full h-12 rounded-md bg-blue-500 text-white flex flex-row items-center justify-center gap-x-2">{loading ? <Puff color="#fff" height={20} width={20} /> : "Submit"}</button>
            </div>
        </form>
    )
}

export default function ForgotPassword() {
    const [page, setPage] = useState<number>(0);
    const [formData, setformData] = useState({
        emailAddress: '',
        otp: "",
        password: ""
    })
    const [loading, setLoading] = useState<boolean>(false)
    const { push } = useRouter();

    function handleChange(e: any) {
        const { id, value } = e.target;
        setformData((formData) => ({
            ...formData,
            [id]: value
        }))
    }

    async function resendPassword() {
        try {
            setLoading(true)
            await axios.post(`${baseUrl}/auth/request-password-reset`, {
                emailAddress: formData.emailAddress
            })

            toast("Successfully Resent OTP")
        } catch (error: any) {
            if (error && error.response) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Failed to Deliver OTP... Please Try Again later.")
            }
        } finally {
            setLoading(false)
        }
    }

    async function handleSubmitEmail(e: any) {
        e.preventDefault()
        try {
            setLoading(true)
            await axios.post(`${baseUrl}/auth/request-password-reset`, {
                emailAddress: formData.emailAddress
            })

            toast("Successfully Delivered OTP")
            setPage(page + 1)
        } catch (error: any) {
            if (error && error.response) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Failed to Deliver OTP... Please Try Again later.")
            }
        } finally {
            setLoading(false)
        }
    }

    async function handleSubmitOTP(e: any) {
        e.preventDefault()
        try {
            setLoading(true)
            await axios.post(`${baseUrl}/auth/verify-otp`, {
                otp: formData.otp
            })

            toast("Successfully Verified OTP")
            setPage(page + 1)
        } catch (error: any) {
            if (error && error.response) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Failed to Deliver OTP... Please Try Again later.")
            }
        } finally {
            setLoading(false)
        }
    }

    async function handleSubmitNewPassword(e: any) {
        e.preventDefault()
        try {
            setLoading(true)
            await axios.post(`${baseUrl}/auth/set-new-password`, {
                emailAddress: formData.emailAddress,
                newPassword: formData.password
            })

            toast("Successfully Set New Password")
            push("/login")
        } catch (error: any) {
            if (error && error.response) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Failed to Set New Password... Please Try Again later.")
            }
        } finally {
            setLoading(false)
        }
    }

    const components = [
        <EmailForm key={0} formData={formData} handleChange={handleChange} handleSubmitEmail={handleSubmitEmail} loading={loading} />,
        <OTPForm key={1} formData={formData} handleChange={handleChange} handleSubmitOTP={handleSubmitOTP} loading={loading} resendPassword={resendPassword} />,
        <SetNewPassword key={2} formData={formData} handleChange={handleChange} handleSubmitNewPassword={handleSubmitNewPassword} loading={loading} />
    ]

    return (
        <div className="w-full h-full flex md:flex-row flex-col-reverse items-start justify-between gap-x-5 py-20 md:px-20 px-4 bg-[#F5F8FE]">
            {components[page]}
        </div>
    )
}