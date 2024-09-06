import type { Metadata } from "next"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
    title: "Sign Up | BlueSands STEM Labs",
    description: "Sign Up to BlueSands STEM Labs",
};

export default function SignUpLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <ToastContainer closeOnClick={true} />
                {children}
            </body>
        </html>
    );
}