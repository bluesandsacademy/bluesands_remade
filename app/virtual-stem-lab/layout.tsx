import type { Metadata } from "next"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
    title: "Virtual Stem Lab | BlueSands STEM Labs",
    description: "Take a look at the Virtual Stem Lab ",
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