"use client"

import { useEffect, useState } from "react"
import axios from "axios"

export default function VerifyPage({ params }: { params: { id: string } }) {
    const [verificationMessage, setVerificationMessage] = useState(
        "Verifying your email..."
    );
    const [isVerified, setIsVerified] = useState<boolean | null>(null);

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:4000/auth/verify/${params.id}`
                );
                if (response.status === 200) {
                    setIsVerified(true);
                    setVerificationMessage(
                        "Your email has been successfully verified! A representative will reach out to you soon"
                    );
                } else {
                    setIsVerified(false);
                    setVerificationMessage("Invalid or expired verification link.");
                }
            } catch (error) {
                console.error(error);
                setIsVerified(false);
                setVerificationMessage(
                    "Something went wrong while trying to verify your email. Please try again later."
                );
            }
        };

        verifyEmail();
    }, [params.id]);
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                {isVerified === null ? (
                    <>
                        <img
                            src="/logo/logo.png"
                            className="w-auto h-[80px] mx-auto"
                        />
                        <p className="text-gray-600 text-xl">{verificationMessage}</p>
                    </>
                ) : (
                    <>
                        <img
                            src="/logo/logo.png"
                            className="w-auto h-[80px] mx-auto"
                        />
                        <p
                            className={`text-xl ${isVerified ? "text-green-600" : "text-red-600"
                                }`}
                        >
                            {verificationMessage}
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}