import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl shadow-lg border-b border-cyan-400/20"
          : "bg-black/60 backdrop-blur-md border-b border-white/10"
      }`}
    >
      {/* Gradient Accent Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-transparent to-cyan-500 opacity-70"></div>

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h2 className="text-xl font-semibold tracking-wide cursor-pointer transition-transform duration-300 hover:scale-105">
          Vivek
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">

        {/* Resume - idle */}
        <li className="text-gray-200 cursor-pointer">
          Resume
        </li>

        {/* Projects */}
        <li className="relative cursor-pointer group text-gray-200">
          <a href="#projects" className="inline-block">
            Projects
          </a>
          <span className="absolute left-0 bottom-0 h-[2px] bg-cyan-400 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          <span className="absolute left-0 bottom-0 h-[2px] bg-cyan-400 w-full opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"></span>
        </li>

        {/* Contact */}
        <li className="relative cursor-pointer group text-gray-200">
          <a href="#contact" className="inline-block">
            Contact
          </a>
          <span className="absolute left-0 bottom-0 h-[2px] bg-cyan-400 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          <span className="absolute left-0 bottom-0 h-[2px] bg-cyan-400 w-full opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"></span>
        </li>

      </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div
            className="w-6 h-[2px] bg-white mb-1 transition-all"
            style={{ transform: open ? "rotate(45deg) translateY(5px)" : "rotate(0)" }}
          ></div>
          <div
            className="w-6 h-[2px] bg-white mb-1 transition-all"
            style={{ opacity: open ? 0 : 1 }}
          ></div>
          <div
            className="w-6 h-[2px] bg-white transition-all"
            style={{ transform: open ? "rotate(-45deg) translateY(-5px)" : "rotate(0)" }}
          ></div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-xl border-t border-white/10 animate-slideDown">
          <ul className="flex flex-col px-6 py-4 text-gray-200 text-base space-y-4">
            {["Resume", "Projects", "Contact"].map((item, i) => (
              <li
                key={i}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
