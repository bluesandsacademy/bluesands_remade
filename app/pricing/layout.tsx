import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pricing | BlueSands STEM Labs",
    description: "Pricing of BlueSands STEM Labs"
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}