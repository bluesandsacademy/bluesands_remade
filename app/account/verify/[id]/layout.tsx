import type { Metadata } from "next"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const metadata: Metadata = {
    title: "Verify Account | BlueSands STEM Labs",
    description: "Verify your account to access BlueSands STEM Labs",
}


export default function VerifyLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <ToastContainer position="top-right" />
                {children}
            </body>
        </html>
    )
}