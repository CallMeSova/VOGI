import Link from "next/link";
import Image from "next/image";

interface CardProps {
    img?: string;
    alt?: string;
    title: string;
    description: string;
    href: string;
}


export default function Card({ img, alt, title, description, href }: CardProps) {
    return (
        <Link
            href={href}
            className="bg-secondary/10 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-secondary/20 block transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="relative w-full h-48 mb-4">
                <Image
                    src={img || "/card-placeholder.jpg"}
                    alt={alt || `${title} image`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="eager"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
            <h2 className="text-2xl font-serif font-bold mb-4">{title}</h2>
            <p className="text-secondary leading-relaxed">{description}</p>
        </Link>
    );
}