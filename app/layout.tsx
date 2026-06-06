import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VOGI | Blog",
  description: "A personal blog about programming and technology.",
};

// 1. โหลดฟอนต์และสร้างตัวแปร CSS ไว้เรียกใช้
const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`}>
      <body className="bg-background text-foreground font-sans min-h-screen relative antialiased">

        {/* ลายตารางพื้นหลัง */}
        <div className="absolute inset-0 z-0 bg-grid-pattern pointer-events-none" />

        <Nav />

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}