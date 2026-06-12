"use client";

import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function About() {
    const [showDelay, setshowDelay] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setshowDelay(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
                <h1>
                    <Typewriter
                        options={{
                            strings: "about me",
                            autoStart: true,
                            loop: false,
                            delay: 50,
                        }}
                    />
                </h1>
                <p className="text-secondary mt-4 animate-page-entrance">
                    A brief introduction to who I am and my journey so far.
                </p>
            </div>

            <div className={`transition-all duration-1000 transform space-y-16 
                ${showDelay ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-4 blur-sm"}
            `}>

                {/* 1. Introduction & Profile Section */}
                <section className="flex flex-col md:flex-row items-center gap-10">
                    <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl flex-shrink-0">
                        <Image
                            src="/images/temp.jpg" // ใช้รูปจำลองจากที่มีอยู่
                            alt="Profile Picture"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl font-serif"><span className="text-foreground">Hi, I'm</span> Vigo Thirapat</h2>
                        <p className="text-secondary leading-relaxed">
                            Hello! I'm Vigo, a 3nd-year Computer Science student passionate about Full-Stack Web Application development and solving Cybersecurity challenges. I enjoy writing clean code, collaborating effectively with others, and am always open to learning new technologies.
                        </p>
                    </div>
                </section>

                {/* 2. Education Section */}
                <section>
                    <h2 className="mb-8 border-b border-white/10 pb-2">Education</h2>
                    <div className="space-y-8">
                        {/* Example Education 1 */}
                        <div className="relative pl-8 border-l border-primary/30">
                            <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-primary" />
                            <h3 className="text-xl font-bold">Mahasharakham University(MSU)</h3>
                            <p className="text-sm text-primary/80 font-medium mb-2">[Degree Name] • [Year - Year]</p>
                            <p className="text-secondary text-sm">
                                [Briefly describe what you studied, your major, or any notable achievements.]
                            </p>
                        </div>

                        {/* Example Education 2
                        <div className="relative pl-8 border-l border-primary/30">
                            <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-primary" />
                            <h3 className="text-xl font-bold">[High School Name]</h3>
                            <p className="text-sm text-primary/80 font-medium mb-2">[Major/Focus] • [Year - Year]</p>
                        </div> */}
                    </div>
                </section>

                {/* 3. Skills Section */}
                <section>
                    <h2 className="mb-6 border-b border-white/10 pb-2">Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Git", "Docker"].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 rounded-full bg-secondary/10 border border-white/10 text-sm hover:border-primary/50 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                        <span className="px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-sm italic">
                            + More to come!
                        </span>
                    </div>
                </section>

                {/* 4. Contact/Connect Section */}
                <section className="bg-secondary/5 rounded-2xl p-8 border border-white/5 text-center">
                    <h2 className="mb-4">Let's Connect</h2>
                    <p className="text-secondary mb-8">
                        I'm always open to new opportunities, collaborations, or just a friendly chat about tech!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                        {/* Facebook */}
                        <a href="#" className="group flex flex-col items-center gap-2 hover:text-primary transition-all duration-300">
                            <div className="p-4 rounded-xl bg-secondary/10 group-hover:bg-primary/20 group-hover:-translate-y-1 transition-all duration-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </div>
                            <span className="text-xs font-medium">Facebook</span>
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/CallMeSova" target="_blank" className="group flex flex-col items-center gap-2 hover:text-primary transition-all duration-300">
                            <div className="p-4 rounded-xl bg-secondary/10 group-hover:bg-primary/20 group-hover:-translate-y-1 transition-all duration-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </div>
                            <span className="text-xs font-medium">GitHub</span>
                        </a>

                        {/* Email */}
                        <a href="mailto:[your-email@example.com]" className="group flex flex-col items-center gap-2 hover:text-primary transition-all duration-300">
                            <div className="p-4 rounded-xl bg-secondary/10 group-hover:bg-primary/20 group-hover:-translate-y-1 transition-all duration-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <span className="text-xs font-medium">Email</span>
                        </a>

                        {/* LinkedIn */}
                        <a href="#" className="group flex flex-col items-center gap-2 hover:text-primary transition-all duration-300">
                            <div className="p-4 rounded-xl bg-secondary/10 group-hover:bg-primary/20 group-hover:-translate-y-1 transition-all duration-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </div>
                            <span className="text-xs font-medium">LinkedIn</span>
                        </a>


                    </div>
                </section>
            </div>
        </div>
    );
}