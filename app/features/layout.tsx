import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Features | BlueSands STEM Labs",
    description: "Features of BlueSands STEM Labs"
}

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
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