"use client"; // ต้องใส่บรรทัดนี้เสมอ เพื่อให้ใช้ useState และ useEffect ได้

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`w-full max-w-4xl mx-auto px-8 py-2 text-sm flex items-center justify-between sticky top-5 z-100 transition-all duration-300 ${isScrolled
            ? "bg-background/60 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20 rounded-2xl"
            : "bg-transparent border border-transparent"
            }`}>
            <Link className="text-xl font-bold" href="/">VOGI</Link>
            <div className="flex items-center gap-6">
                <Link className="cursor-pointer hover:text-primary transition-colors duration-500" href="/">Home</Link>
                <Link className="cursor-pointer hover:text-primary transition-colors duration-500" href="/blog">Blog</Link>
                <Link className="cursor-pointer hover:text-primary transition-colors duration-500" href="/about">About</Link>
                <a className="flex items-center gap-1 bg-primary p-2 rounded-lg text-white cursor-pointer hover:bg-primary-hover transition-all duration-500 hover:-translate-y-1" href="https://github.com/CallMeSova" target="_blank">
                    <div className="font-bold">GitHub</div>
                    <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M14 2H5.50003L4.00003 3.5L6.83581 6.33579L0.585815 12.5858L3.41424 15.4142L9.66424 9.16421L12.5 12L14 10.5L14 2Z" fill="#ffffff"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </nav>
    );
}