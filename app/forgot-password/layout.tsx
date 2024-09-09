import type { Metadata } from "next"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
    title: "Forgot Password | BlueSands STEM Labs",
    description: "Reset Your Password"
}

export default function ResetPasswordLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                {/* Metadata and other head elements */}
            </head>
            <body>
                <ToastContainer closeOnClick={true} />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}