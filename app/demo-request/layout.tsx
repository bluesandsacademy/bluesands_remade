import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Demo Request | BlueSands STEM Labs",
    description: "Request a demo for BlueSands STEM Labs",
}

export default function DemoRequestLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                {/* Metadata and other head elements */}
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}