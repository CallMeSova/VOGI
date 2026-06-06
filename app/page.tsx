import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mb-16 grid grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-serif font-bold mb-6">
            Hi, I'm <span className="text-primary">Vigo</span>
          </h1>
          <p className="text-secondary leading-relaxed">
            3rd-year Computer Science student passionate about Full-Stack Web Application development and solving Cybersecurity challenges. I enjoy writing clean code, collaborating effectively with others, and am always open to learning new technologies.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/Mona_Lisa.jpg"
            alt="profile image"
            width={300}
            height={400}
            className="rounded-2xl object-cover transition-transform duration-500 hover:scale-102"
          />
        </div>
      </div>

      <div className="mb-8 flex justify-center text-primary">
        <h1 className="text-4xl font-serif font-bold mb-6">
          Explore
        </h1>
        <svg width="48" height="45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier"><path d="M9.354 16.646L12 19.293V3h1v16.293l2.646-2.646.707.707-3.853 3.853-3.854-3.853z"></path><path fill="none" d="M0 0h24v24H0z"></path></g>
        </svg>
      </div>

      <div className="mb-16 grid grid-cols-3 gap-10">
        <div className="bg-secondary/10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-serif font-bold mb-4">Blog</h2>
          <p className="text-secondary leading-relaxed">
            Sharing my thoughts and experiences on programming, technology, and more.
          </p>
        </div>

        <div className="bg-secondary/10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-serif font-bold mb-4">Projects</h2>
          <p className="text-secondary leading-relaxed">
            Showcasing my work in web development, cybersecurity, and other tech projects.
          </p>
        </div>

        <div className="bg-secondary/10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-serif font-bold mb-4">Contact</h2>
          <p className="text-secondary leading-relaxed">
            Get in touch with me for collaborations, questions, or just to say hi!
          </p>
        </div>
      </div>
    </div>
  );
}