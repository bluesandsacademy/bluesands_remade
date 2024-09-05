import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Signup | BlueSands STEM Labs",
    description: "Signup to BlueSands STEM Labs", 
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}