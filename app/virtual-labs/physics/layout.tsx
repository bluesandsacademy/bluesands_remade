import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Virtual Physics Labs | BlueSands STEM Labs",
    description: "Virtual Physics Labs of BlueSands STEM Labs"
}

export default function PhysicsLayout({ children }: { children: React.ReactNode }) {
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