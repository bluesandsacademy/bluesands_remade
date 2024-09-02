"use client";

import Image from "next/image";
import Link from "next/link";
import { topNav } from "@/utils/data/sample";
import { usePathname } from 'next/navigation';


export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="w-full flex items-center justify-between p-4">
            <div>
                <Image src="/logo/logo.png" alt="BlueSands STEM Labs" width={100} height={100} />
            </div>
            <div>
                <ul className="flex items-center justify-between gap-x-3">
                    {topNav.map((item, index) => (
                        <li key={index}>
                            {item.href !== null ? (
                                <Link href={item.href} className={`${pathname === item.href ? 'text-blue-500' : 'text-gray-800'}`}>{item.title}</Link>
                            ) : (
                                <button className="text-gray-800">{item.title}</button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-md">Sign Up</button>
            </div>
        </nav>
    )
}