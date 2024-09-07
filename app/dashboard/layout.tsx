import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Dashboard | BlueSands STEM Labs",
    description: "Dashboard for BlueSands STEM Labs",
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <ToastContainer position="top-right" />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}