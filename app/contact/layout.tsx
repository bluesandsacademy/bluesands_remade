import type { Metadata } from "next"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const metadata: Metadata = {
    title: "Contact | BlueSands STEM Labs",
    description: "Contact BlueSands STEM Labs"
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                {/* Metadata and other head elements */}
            </head>
            <body>
                <ToastContainer />
                {children}
            </body>
        </html>
    )
}