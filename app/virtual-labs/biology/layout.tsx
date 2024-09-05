import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Virtual Biology Labs | BlueSands STEM Labs",
    description: "Virtual Biology Labs of BlueSands STEM Labs"
}

export default function BiologyLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}