import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Make Payment | BlueSands STEM Labs",
    description: "Make Payment to BlueSands STEM Labs",
};

export default function MakePaymentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}