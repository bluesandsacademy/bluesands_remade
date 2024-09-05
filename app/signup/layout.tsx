import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Signup | BlueSands STEM Labs",
    description: "Signup to BlueSands STEM Labs",
};

export default function SignUpLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}