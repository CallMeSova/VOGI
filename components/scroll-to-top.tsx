"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
    const pathname = usePathname(); // ⚡ ดักจับว่าตอนนี้ URL อยู่ที่หน้าไหน

    useEffect(() => {
        // ⚡ ไม่ว่าจะเปลี่ยน URL ไปเป็นหน้าไหนก็ตาม สั่งสไลด์ขึ้นบนสุดทันที!
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]); // ผูกเงื่อนไขไว้กับ pathname

    return null; // Component นี้ทำหน้าที่เบื้องหลัง ไม่ต้องเรนเดอร์อะไรบนหน้าจอ
}