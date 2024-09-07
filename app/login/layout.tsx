import type { Metadata } from "next"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
    title: "Login | BlueSands STEM Labs",
    description: "Sign Up to BlueSands STEM Labs",
};

export default function SignUpLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            <html>
                <body>
                    <ToastContainer closeOnClick={true} />
                    {children}
                </body>
            </html>
        </AuthProvider>
    );
}