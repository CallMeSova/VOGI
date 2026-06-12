"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Card from "@/components/card";

export default function Home() {
  const [showExplore, setShowExplore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowExplore(true);
    }, 200);

    return () => clearTimeout(timer); // เคลียร์เซ็ตไทม์เอาต์ป้องกันหน่วยความจำรั่วไหล
  }, []);

  return (
    <div>
      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        <div className="order-2 md:order-1">
          <h1>
            <Typewriter
              options={{
                strings: "<span class='text-foreground'>Hi, I'm</span> Vigo.",
                autoStart: true,
                loop: false,
                delay: 50,
              }}
            />
          </h1>

          <p className="text-secondary leading-relaxed animate-page-entrance">
            3rd-year Computer Science student passionate about Full-Stack Web Application development and solving Cybersecurity challenges. I enjoy writing clean code, collaborating effectively with others, and am always open to learning new technologies.
          </p>
        </div>

        <div className="flex justify-center order-1 md:order-2">
          <Image
            src="/images/Mona_Lisa.jpg"
            loading="eager"
            alt="profile image"
            width={300}
            height={400}
            className="rounded-2xl object-cover transition-transform duration-500 hover:scale-102 w-48 h-64 sm:w-60 sm:h-80 md:w-[300px] md:h-[400px]"
          />
        </div>
      </div>

      <div id="explore-section" className="scroll-mt-24"></div>

      {/* แผง Explore และการ์ด จะสไลด์เฟดขึ้นมาหลังผ่านไป 0.2 วิ */}
      <div className={`transition-all duration-1000 transform 
        ${showExplore ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-4 blur-sm"}
      `}>
        <a
          href="#explore-section"
          className="w-1/2 sm:w-1/3 md:w-1/4 mx-auto mb-8 flex items-center justify-center text-primary cursor-pointer transition-all duration-1000 transform"
        >
          <h1 className="text-4xl font-serif font-bold mb-2">
            Explore
          </h1>
          <svg width="48" height="45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <g id="SVGRepo_iconCarrier">
              <path d="M9.354 16.646L12 19.293V3h1v16.293l2.646-2.646.707.707-3.853 3.853-3.854-3.853z"></path>
              <path fill="none" d="M0 0h24v24H0z"></path>
            </g>
          </svg>
        </a>

        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <Card
            img="/images/blog-cover.png"
            alt="blog cover image"
            title="Blog"
            description="Sharing my thoughts and experiences on programming, technology, and more."
            href="/blog"
          />
          <Card
            img="/images/projects-cover.png"
            alt="projects cover image"
            title="Projects"
            description="Showcasing my work in web development, cybersecurity, and other tech projects."
            href="/projects"
          />
          <Card
            img="/images/contact-cover.png"
            alt="contact cover image"
            title="Contact"
            description="Get in touch with me for collaborations, questions, or just to say hi!"
            href="/about"
          />
        </div>
      </div>
    </div>
  );
}