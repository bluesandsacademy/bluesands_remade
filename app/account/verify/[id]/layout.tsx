import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Verify Account | BlueSands STEM Labs",
    description: "Verify your account to access BlueSands STEM Labs",
}


export default function VerifyLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}