import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "VOGI | Blog",
  description: "A personal blog about programming and technology.",
};

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
      <body className="bg-background text-foreground font-sans min-h-screen flex flex-col relative antialiased">

        {/* ลายตารางพื้นหลัง */}
        <div className="absolute inset-0 z-0 bg-grid-pattern pointer-events-none" />

        <Nav />

        <main className="flex-1 w-full max-w-4xl mx-auto mt-8 px-8 py-16 relative z-10">
          {children}
        </main>

        <hr className="w-full border-t border-white/5" />
        <Footer />
      </body>
    </html>
  );
}