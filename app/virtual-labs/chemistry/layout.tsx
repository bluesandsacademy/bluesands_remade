import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Virtual Chemistry Labs | BlueSands STEM Labs",
    description: "Virtual Chemistry Labs of BlueSands STEM Labs"
}

export default function ChemistryLayout({ children }: { children: React.ReactNode }) {
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