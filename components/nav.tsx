"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

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

    const closeMobile = () => setIsMobileOpen(false);

    return (
        <>
            <div className={`sticky z-100 transition-all duration-300 ${isScrolled ? "top-0" : "top-5"}`}>
                <nav className={`w-full text-sm flex items-center justify-between transition-all duration-300 ${isScrolled
                    ? "bg-background/60 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
                    : "max-w-4xl mx-auto bg-background/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg shadow-black/20"
                    }`}>
                    <div className={`w-full flex items-center justify-between ${isScrolled ? "max-w-4xl mx-auto px-4 sm:px-8" : "px-4 sm:px-6"} py-2`}>
                        <Link className="text-lg sm:text-xl font-bold" href="/">VOGI</Link>

                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="md:hidden p-2 text-foreground cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {isMobileOpen ? (
                                    <>
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </>
                                ) : (
                                    <>
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <line x1="3" y1="12" x2="21" y2="12" />
                                        <line x1="3" y1="18" x2="21" y2="18" />
                                    </>
                                )}
                            </svg>
                        </button>

                        <div className="hidden md:flex items-center gap-6">
                            <Link className="cursor-pointer hover:text-primary transition-colors duration-500" href="/">Home</Link>
                            <Link className="cursor-pointer hover:text-primary transition-colors duration-500" href="/blog">Blog</Link>
                            <Link className="cursor-pointer hover:text-primary transition-colors duration-500" href="/projects">Projects</Link>
                            <Link className="cursor-pointer hover:text-primary transition-colors duration-500" href="/about">About</Link>
                            <a className="flex items-center gap-1 pl-4 pr-3 py-2 bg-primary rounded-lg cursor-pointer hover:bg-primary-hover transition-all duration-500 hover:-translate-y-1" href="https://github.com/CallMeSova" target="_blank">
                                <div className="font-medium">GitHub</div>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

            <div
                className={`md:hidden fixed inset-0 z-50 transition-all duration-500 ease-in-out ${isMobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
                onClick={closeMobile}
            >
                <div className={`absolute inset-0 bg-background/80 backdrop-blur-lg transition-opacity duration-500 ${isMobileOpen ? "opacity-100" : "opacity-0"}`} />
                <div
                    className={`relative h-full w-full flex flex-col items-center justify-center gap-8 text-xl transition-all duration-500 ease-in-out ${isMobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Link className="px-8 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors" href="/" onClick={closeMobile}>Home</Link>
                    <Link className="px-8 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors" href="/blog" onClick={closeMobile}>Blog</Link>
                    <Link className="px-8 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors" href="/projects" onClick={closeMobile}>Projects</Link>
                    <Link className="px-8 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors" href="/about" onClick={closeMobile}>About</Link>
                    <a className="flex items-center justify-center gap-2 px-8 py-3 bg-primary rounded-xl hover:bg-primary-hover transition-colors mt-4" href="https://github.com/CallMeSova" target="_blank" onClick={closeMobile}>
                        GitHub
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}