"use client";

import Card from "@/components/card";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

// ⚡ 1. ชุดข้อมูลจำลอง (Mock Data) สำหรับโปรเจกต์ทั้งหมด
const ALL_PROJECTS = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-featured online store built with Next.js, Stripe, and PostgreSQL. Includes product management and checkout flow.",
        img: "/images/projects-cover.png",
        href: "/projects/ecommerce-platform"
    },
    {
        id: 2,
        title: "AI Image Generator",
        description: "An application that generates images from text descriptions using OpenAI's DALL-E API and React.",
        img: "/images/blog-cover.png",
        href: "/projects/ai-image-generator"
    },
    {
        id: 3,
        title: "Task Management Dashboard",
        description: "A productivity tool to manage daily tasks, projects, and deadlines with real-time updates using Socket.io.",
        img: "/images/contact-cover.png",
        href: "/projects/task-management"
    },
    {
        id: 4,
        title: "Weather Forecast App",
        description: "Get real-time weather updates and forecasts for any city in the world with beautiful dynamic backgrounds.",
        img: "/images/projects-cover.png",
        href: "#"
    },
    {
        id: 5,
        title: "Personal Portfolio Website",
        description: "A modern, responsive portfolio site built with Next.js and Tailwind CSS to showcase my work and skills.",
        img: "/images/blog-cover.png",
        href: "#"
    },
    {
        id: 6,
        title: "Fitness Tracker App",
        description: "Track your daily workouts, calorie intake, and progress with interactive charts and personalized insights.",
        img: "/images/contact-cover.png",
        href: "#"
    },
    {
        id: 7,
        title: "Real-time Chat Application",
        description: "A secure and fast chat app supporting group rooms and direct messaging using Firebase.",
        img: "/images/projects-cover.png",
        href: "#"
    },
];

export default function Projects() {
    const [showDelay, setshowDelay] = useState(false);

    // ⚡ 2. สเตทสำหรับระบบ Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6; // แสดงผล 6 โปรเจกต์ต่อหน้า

    // คำนวณตำแหน่งข้อมูลและจำนวนหน้าทั้งหมด
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = ALL_PROJECTS.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(ALL_PROJECTS.length / projectsPerPage);

    useEffect(() => {
        const timer = setTimeout(() => {
            setshowDelay(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    // ฟังก์ชันสลับหน้าและเลื่อนจอขึ้นไปตำแหน่งหัวข้อ
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
                            strings: "my projects",
                            autoStart: true,
                            loop: false,
                            delay: 50,
                        }}
                    />
                </h1>
                <p className="text-secondary my-8 animate-page-entrance">
                    Here are some of the projects I've worked on. Each project represents a unique challenge and a step forward in my learning journey.
                </p>
            </div>

            <div className={`transition-all duration-1000 transform 
                ${showDelay ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-4 blur-sm"}
            `}>

                {/* ส่วน Featured Project เฉพาะหน้าแรก */}
                {currentPage === 1 && (
                    <div className="mb-12">
                        <h2 className="mb-4">Featured Project</h2>
                        <Card
                            img="/images/projects-cover.png"
                            alt="featured project image"
                            title="E-commerce Platform"
                            description="A full-featured online store built with Next.js, Stripe, and PostgreSQL. Includes product management and checkout flow."
                            href="/projects/ecommerce-platform"
                        />
                    </div>
                )}

                <h2 className="mb-4">All Projects (Page {currentPage}/{totalPages})</h2>

                {/* ⚡ 3. วนลูปแสดงผลโปรเจกต์ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProjects.map((project) => (
                        <Card
                            key={project.id}
                            img={project.img}
                            alt={project.title}
                            title={project.title}
                            description={project.description}
                            href={project.href}
                        />
                    ))}
                </div>

                {/* ⚡ 4. แผงควบคุมปุ่มเปลี่ยนหน้า (Pagination Controls) */}
                <div className="flex items-center justify-center gap-4 mt-16 mb-8">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border border-white/10 bg-secondary/10 text-primary cursor-pointer transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-secondary/20"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <span className="font-serif text-sm text-secondary">
                        {currentPage} / {totalPages}
                    </span>

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