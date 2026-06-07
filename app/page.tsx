"use client";

import { useState } from "react"; // ⚡ ดึง useState มาสร้างตัวเช็กไทม์ไลน์
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Home() {
  // สเต็ปที่ 1: คุมการโผล่ของพารากราฟ <p>
  const [showParagraph, setShowParagraph] = useState(false);
  // สเต็ปที่ 2: คุมการโผล่ของปุ่ม Explore
  const [showExplore, setShowExplore] = useState(false);

  return (
    <div>
      <div className="mb-16 grid grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-serif font-bold mb-6">
            <Typewriter
              options={{
                strings: "Hi, I'm <span class='text-primary'>Vigo</span>.",
                autoStart: true,
                loop: false,
                delay: 100,
              }}
              onInit={(typewriter) => {
                typewriter
                  .callFunction(() => {
                    // 1. พอ H1 พิมพ์อักษรตัวสุดท้ายเสร็จปุ๊บ สั่งเปิดสวิตช์พารากราฟทันที
                    setShowParagraph(true);
                  })
                  .pauseFor(300) // 2. หน่วงเวลาแช่ไว้ 0.6 วินาที รอให้พารากราฟเฟดตัวเองขึ้นมาจนเต็มตา
                  .callFunction(() => {
                    // 3. หลังจากนั้นค่อยเปิดสวิตช์ให้ปุ่ม Explore โหลดตามมาปิดท้าย
                    setShowExplore(true);
                  })
                  .start();
              }}
            />
          </h1>

          <p className={`text-secondary leading-relaxed transition-all duration-1000 transform ${showParagraph
            ? "opacity-100 translate-y-0 blur-none"
            : "opacity-0 translate-y-4 blur-sm"
            }`}>
            3rd-year Computer Science student passionate about Full-Stack Web Application development and solving Cybersecurity challenges. I enjoy writing clean code, collaborating effectively with others, and am always open to learning new technologies.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/Mona_Lisa.jpg"
            loading="eager"
            alt="profile image"
            width={300}
            height={400}
            className="rounded-2xl object-cover transition-transform duration-500 hover:scale-102"
          />
        </div>
      </div>

      <div id="explore-section" className="scroll-mt-24"></div>

      {/* ⚡ ปุ่ม Explore: จะค่อยๆ สไลด์ลอยเฟดคลายบลอขึ้นมาอย่างหรูหราเมื่อ showExplore เป็น true */}
      <a
        href="#explore-section"
        className={`mb-8 flex items-center justify-center text-primary cursor-pointer transition-all duration-1000 transform ${showExplore
          ? "opacity-100 translate-y-0 blur-none pointer-events-auto"
          : "opacity-0 translate-y-6 blur-md pointer-events-none"
          }`}
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

      {/* บล็อก 3 การ์ดด้านล่าง */}
      <div className="mb-16 grid grid-cols-3 gap-10">
        <div className="bg-secondary/10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-serif font-bold mb-4">Blog</h2>
          <p className="text-secondary leading-relaxed">Sharing my thoughts and experiences on programming, technology, and more.</p>
        </div>
        <div className="bg-secondary/10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-serif font-bold mb-4">Projects</h2>
          <p className="text-secondary leading-relaxed">Showcasing my work in web development, cybersecurity, and other tech projects.</p>
        </div>
        <div className="bg-secondary/10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-100">
          <h2 className="text-2xl font-serif font-bold mb-4">Contact</h2>
          <p className="text-secondary leading-relaxed">Get in touch with me for collaborations, questions, or just to say hi!</p>
        </div>
      </div>
    </div>
  );
}