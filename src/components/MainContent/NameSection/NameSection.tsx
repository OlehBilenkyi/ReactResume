import React, { useState, useEffect } from "react";

const NameSection: React.FC<{
  name: string;
  title?: string;
  socialLinks?: any[];
}> = ({ name, title, socialLinks }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 50));
  }, []);
  return (
    <section
      className={`container mx-auto my-10 p-4 md:p-10 rounded-xl relative flex flex-col justify-end min-h-[480px]
                  bg-cover bg-center transition-shadow ${
                    scrolled ? "shadow-2xl" : "shadow-lg"
                  }`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.4)),url(https://…)`,
      }}
    >
      <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
        {name}
      </h1>
      {title && (
        <h2 className="text-white text-base md:text-lg font-normal opacity-90 mt-2 animate-bounce">
          {title}
        </h2>
      )}
      <button className="mt-6 bg-accent text-primaryBg px-6 py-2 rounded-full font-bold hover:opacity-90 transition">
        Explore CV
      </button>
      {socialLinks && (
        <div className="absolute bottom-6 right-6 flex space-x-4">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1c302b] rounded-full hover:bg-accent transition"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {link.icon}
            </a>
          ))}
        </div>
      )}
    </section>
  );
};
export default NameSection;
