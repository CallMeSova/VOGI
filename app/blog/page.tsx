"use client";

import Card from "@/components/card";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

// ⚡ 1. สร้างชุดข้อมูลจำลอง (Mock Data) สำหรับบล็อกทั้งหมด
const ALL_POSTS = [
    {
        id: 1,
        title: "My Journey into Programming",
        description: "Discover how I started programming, the challenges I faced, and the lessons I learned along the way.",
        img: "/images/blog-cover.png",
        href: "/blog/my-journey-into-programming"
    },
    {
        id: 2,
        title: "Understanding Next.js App Router",
        description: "A deep dive into server components, client components, and how layout routing works in modern web apps.",
        img: "/images/projects-cover.png",
        href: "/blog/understanding-nextjs"
    },
    {
        id: 3,
        title: "Introduction to Cybersecurity",
        description: "Basic concepts of cybersecurity, common attack vectors, and how to secure your full-stack applications.",
        img: "/images/contact-cover.png",
        href: "/blog/intro-to-cybersecurity"
    },
    // เพิ่มข้อมูลจำลองสำหรับทดสอบระบบเปลี่ยนหน้า (รวมเป็น 7 บล็อก)
    { id: 4, title: "Web Security Best Practices", description: "How to protect your app against OWASP Top 10 vulnerabilities.", img: "/images/blog-cover.png", href: "#" },
    { id: 5, title: "Mastering Tailwind CSS", description: "Tips and tricks to write clean, reusable, and maintainable Tailwind classes.", img: "/images/projects-cover.png", href: "#" },
    { id: 6, title: "TypeScript Tips for Beginners", description: "Unlock the full power of static typing in JavaScript with these simple steps.", img: "/images/contact-cover.png", href: "#" },
    { id: 7, title: "Building a Portfolio Site", description: "Step-by-step guide on creating a modern portfolio using Next.js and Tailwind.", img: "/images/blog-cover.png", href: "#" },
];

export default function Blog() {
    const [showDelay, setshowDelay] = useState(false);

    // ⚡ 2. สเตทสำหรับระบบ Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6; // กำหนดให้แสดงผลแถวละ 6 บล็อกต่อหน้า

    // คำนวณตำแหน่งข้อมูลและจำนวนหน้าทั้งหมด
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = ALL_POSTS.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(ALL_POSTS.length / postsPerPage);

    useEffect(() => {
        const timer = setTimeout(() => {
            setshowDelay(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    // ฟังก์ชันสลับหน้าและเลื่อนจอขึ้นไปตำแหน่งหัวข้อเบาๆ
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <div className="text-center">
                <h1>
                    <Typewriter
                        options={{
                            strings: "my blog",
                            autoStart: true,
                            loop: false,
                            delay: 50,
                        }}
                    />
                </h1>
                <p className="text-secondary my-8 animate-page-entrance">
                    Welcome to my blog! Here, I share my thoughts and experiences on programming, technology, and more. Stay tuned for updates!
                </p>
            </div>

            <div className={`transition-all duration-1000 transform 
        ${showDelay ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-4 blur-sm"}
      `}>

                {/* แสดงส่วน Featured เฉพาะหน้าแรกเท่านั้นเพื่อความสวยงาม */}
                {currentPage === 1 && (
                    <div className="mb-12">
                        <h2 className="mb-4">Featured</h2>
                        <Card
                            img="/images/blog-cover.png"
                            alt="featured post image"
                            title="My Journey into Programming"
                            description="Discover how I started programming, the challenges I faced, and the lessons I learned along the way."
                            href="/blog/my-journey-into-programming"
                        />
                    </div>
                )}

                <h2 className="mb-4">All Posts (Page {currentPage}/{totalPages})</h2>

                {/* ⚡ 3. วนลูปแสดงผลบล็อกเฉพาะของหน้านั้นๆ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentPosts.map((post) => (
                        <Card
                            key={post.id}
                            img={post.img}
                            alt={post.title}
                            title={post.title}
                            description={post.description}
                            href={post.href}
                        />
                    ))}
                </div>

                {/* ⚡ 4. แผงควบคุมปุ่มเปลี่ยนหน้า (Pagination Controls) */}
                <div className="flex items-center justify-center gap-4 mt-16 mb-8">
                    {/* ปุ่มย้อนกลับ (ซ้าย) */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border border-white/10 bg-secondary/10 text-primary cursor-pointer transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-secondary/20"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    {/* แสดงเลขหน้าปัจจุบัน */}
                    <span className="font-serif text-sm text-secondary">
                        {currentPage} / {totalPages}
                    </span>

                    {/* ปุ่มถัดไป (ขวา) */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg border border-white/10 bg-secondary/10 text-primary cursor-pointer transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-secondary/20"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    );
}