import { useState, useRef } from "react";

function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);
  const carouselRef = useRef(null);

  const demo = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with React + Tailwind.",
      longText:
        "A polished personal portfolio with animations, sections, responsive design, and a full design theme.",
      link: "https://my-portfolio-ecru-nine-10.vercel.app/",
      github: "https://github.com/vivekxkt/my-portfolio",
      tags: ["React", "Tailwind", "Animations"],
      images: ["/portfolio/p1.png", "/portfolio/p2.png", "/portfolio/p3.png", "/portfolio/p4.png"]

    },
   {
      title: "E-commerce Website",
      description: "Complete shopping experience with product pages, cart, and UI polish.",
      longText:
        "A fully functional e-commerce interface featuring product listings, dynamic filters, a smooth cart system, and a clean modern UI. Built with a focus on performance, reusable components, and a seamless shopping flow across devices.",
      link: "https://web-ecom.netlify.app/",
      github: "#",
      tags: ["E-commerce", "HTML","CSS","JS", "UI", "Frontend"],
      images: ["/e-com/e1.png", "/e-com/e2.png", "/e-com/e3.png", "/e-com/e4.png"]
    },

    {
      title: "Blackjack Game (Java)",
      description: "A fully interactive Blackjack game built using Java & JavaFX.",
      longText:
        "Developed a complete Blackjack game featuring card mechanics, dealer logic, scoring rules, and event-driven gameplay. Built with JavaFX for a smooth, responsive UI and polished user experience. Leveraged AI-assisted workflows to debug logic, refactor code, and optimize game flow.",
      link: "#",
      github: "https://github.com/vivekxkt/Black-Jack-game-using-JAVA",
      tags: ["Java", "JavaFX", "Game Development"],
      images: ["/blackjack/b1.png", "/blackjack/b2.png", "/blackjack/b3.png", "/blackjack/b4.png"]
    },
    {
      title: "Online Chat Application",
      description: "Real-time chat system with multiplayer TicTacToe.",
      longText:
        "A real-time chat platform built using Node.js, Express, and WebSockets. Features instant messaging, connected users list, and smooth bi-directional communication. Also includes a two-player online TicTacToe game using live socket events for synced gameplay. Designed the UI with HTML, CSS, and JavaScript to keep everything lightweight and responsive.",
      link: "https://chat-app-hts9.onrender.com/",
      github: "#",
      tags: ["Node.js", "Express", "WebSockets", "JavaScript", "Real-Time"],
      images: [
        "/chat-app/c1.png",
        "/chat-app/c2.png",
        
      ]
    },
    
  ];

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  const nextModalImage = () => {
    setModalIndex((prev) =>
      prev === openProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevModalImage = () => {
    setModalIndex((prev) =>
      prev === 0 ? openProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative max-w-7xl mx-auto px-2 sm:px-6 py-24 overflow-hidden">
      {/* Deep black background + faint cyan glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-black" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-cyan-400/5 blur-[160px] rounded-full animate-pulse -z-10" />

      {/* SECTION TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Some things I've built
        </p>
      </div>

      {/* FLEX WRAPPER FOR ARROWS + SLIDER */}
      <div className="flex items-center gap-4">
        {/* LEFT ARROW */}
        <button
          onClick={() => scrollCarousel("left")}
          className="p-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-full 
                     hover:border-cyan-400 transition"
        >
          ◀
        </button>

        {/* SLIDER */}
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4 flex-1"
        >
          {demo.map((p, i) => (
            <div
              key={i}
              className="relative group min-w-[100%] sm:min-w-[45%] lg:min-w-[30%] 
                         p-6 rounded-2xl bg-white/[0.05] border border-white/[0.1] 
                         backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.05)] 
                         hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] 
                         hover:border-cyan-400/40 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => {
                setOpenProject(p);
                setModalIndex(0);
              }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/20 to-transparent blur-lg" />

              {/* Cyan streak */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-60" />

              <div className="w-full h-40 rounded-lg overflow-hidden mb-4 relative z-10">
                <img src={p.images[0]} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-xl font-semibold text-white relative z-10">
                {p.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm relative z-10">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-cyan-400/10 text-cyan-300 border border-cyan-400/20
                               text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scrollCarousel("right")}
          className="p-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-full 
                     hover:border-cyan-400 transition"
        >
          ▶
        </button>
      </div>

      {/* MODAL */}
      {openProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50"
          onClick={() => setOpenProject(null)}
        >
          <div
            className="bg-white/[0.08] border border-white/[0.15] rounded-xl p-8 w-full max-w-3xl 
                       max-h-[85vh] overflow-y-auto shadow-[0_0_25px_rgba(34,211,238,0.15)]
                       animate-[fadeIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-3xl font-semibold text-white mb-4">
              {openProject.title}
            </h3>

            {/* MODAL IMAGE SLIDER */}
            <div className="relative mb-6">
              <img
                src={openProject.images[modalIndex]}
                className="rounded-lg w-full h-64 object-cover"
              />

              {/* LEFT BUTTON */}
              <button
                onClick={prevModalImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 
                           bg-black/50 backdrop-blur-md rounded-full hover:bg-black/70"
              >
                ◀
              </button>

              {/* RIGHT BUTTON */}
              <button
                onClick={nextModalImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 
                           bg-black/50 backdrop-blur-md rounded-full hover:bg-black/70"
              >
                ▶
              </button>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              {openProject.longText}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {openProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={openProject.link}
                className="px-6 py-2 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
              >
                Live Demo
              </a>
              <a
                href={openProject.github}
                className="px-6 py-2 rounded-full border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
