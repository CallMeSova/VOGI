import Link from "next/link";
import Image from "next/image";

interface CardProps {
    img?: string;
    title: string;
    description: string;
    href: string;
}

export default function Card({ img, title, description, href }: CardProps) {
    return (
        <Link
            href={href}
            className="bg-secondary/10 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-secondary/20 block transition-all duration-300 transform hover:-translate-y-1"
        >
            <Image
                src={img || "/card-placeholder.jpg"}
                alt={`${title} image`}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-serif font-bold mb-4">{title}</h2>
            <p className="text-secondary leading-relaxed">{description}</p>
        </Link>
    );
}