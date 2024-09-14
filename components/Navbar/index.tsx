"use client";

import Image from "next/image";
import Link from "next/link";
import { topNav } from "@/utils/data/sample";
import { usePathname } from 'next/navigation';
import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion"
import { IoMdClose } from "react-icons/io";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className="w-full flex items-center justify-between py-4 px-4 md:px-10 relative">
            <Link href="/">
                <Image src="/logo/logo.png" alt="BlueSands STEM Labs" width={100} height={100} />
            </Link>
            <div className="md:hidden flex items-center gap-x-5">
                {isAuthenticated ? (
                    <Link href="/dashboard" className="bg-blue-500 text-white px-6 py-3 rounded-md">Dashboard</Link>
                ) : (
                    <Link href="/signup" className="bg-blue-500 text-white px-6 py-3 rounded-md">Sign Up</Link>
                )}
                <GiHamburgerMenu className="text-3xl" onClick={() => setIsMobile(!isMobile)} />
            </div>
            <ul className="md:flex hidden items-center justify-between gap-x-3 ">
                {topNav.map((item, index) => (
                    <li key={index}>
                        {item.href !== null ? (
                            <Link href={item.href} className={`${pathname === item.href ? 'text-blue-500' : 'text-gray-800'} hover:text-blue-500 transition-all duration-800`}>{item.title}</Link>
                        ) : (
                            <button className="text-gray-800 hover:text-blue-500 transition-all duration-800 flex items-center gap-x-1 relative" onClick={() => setIsOpen(!isOpen)}>
                                {item.title} <RxCaretDown className="text-xl" />
                                
                            </button>
                        )}
                    </li>
                ))}
            </ul>
            <div className="hidden md:block">
                {isAuthenticated ? (
                    <Link href="/dashboard" className="bg-blue-500 text-white px-6 py-3 rounded-md">Dashboard</Link>
                ) : (

                    <div className="flex items-center gap-x-3">
                        <Link href="/signup" className="bg-blue-500 text-white px-6 py-3 rounded-md">Sign Up</Link>
                        <Link href="/login" className="border border-gray-300 px-6 py-3 rounded-md">Login</Link>
                    </div>
                )}
            </div>
            {isMobile && (
                <AnimatePresence>
                    <motion.div className="absolute top-0 left-0 w-full h-screen bg-white z-50" initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} exit={{ opacity: 0.5 }} transition={{ duration: 0.5 }}>
                        <ul className="flex flex-col items-center justify-center h-full">
                            <IoMdClose className="text-3xl absolute top-10 right-10" onClick={() => setIsMobile(!isMobile)} />
                            {topNav.map((item, index) => (
                                <li key={index}>
                                    {item.href !== null ? (
                                        <Link href={item.href} className="text-gray-800 hover:text-blue-500 transition-all duration-800">{item.title}</Link>
                                    ) : (
                                        <button className="text-gray-800 hover:text-blue-500 transition-all duration-800 flex items-center gap-x-1 relative" onClick={() => setIsOpen(!isOpen)}>
                                            {item.title} <RxCaretDown className="text-xl" />
                                            
                                        </button>
                                    )}
                                </li>
                            ))}
                            {isAuthenticated && (
                                <button
                                    onClick={() => {
                                        logout();
                                        setIsMobile(false);
                                    }}
                                    className="mt-4 text-gray-800 hover:text-blue-500 transition-all duration-800"
                                >
                                    Logout
                                </button>
                            )}
                        </ul>
                    </motion.div>
                </AnimatePresence>
            )}
        </nav>
    )
}