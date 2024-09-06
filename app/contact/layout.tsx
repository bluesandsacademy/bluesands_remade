import type { Metadata } from "next"

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
                {children}
            </body>
        </html>
    )
}