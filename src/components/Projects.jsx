import { useState, useRef } from "react";


function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);
  const carouselRef = useRef(null);

  // ✅ More projects to enable real sliding
  const demo = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with React + Tailwind.",
      longText:
        "A polished personal portfolio with animations, sections, responsive design, and a full design theme.",
      link: "#",
      github: "#",
      tags: ["React", "Tailwind", "Animations"],
      images: [
        "/src/assets/p1.png",
        "/src/assets/p2.png"
    
      ],
    },
    {
      title: "UI Components Library",
      description: "Reusable UI kit built in React.",
      longText:
        "A full UI system with buttons, cards, modals, navbars, and animations. Built for scalability.",
      link: "#",
      github: "#",
      tags: ["Components", "React", "UI"],
      images: [
        "https://via.placeholder.com/900x500?text=Components+-+1",
        "https://via.placeholder.com/900x500?text=Components+-+2",
        "https://via.placeholder.com/900x500?text=Components+-+3",
      ],
    },
    {
      title: "Landing Page",
      description: "Clean landing page with design system.",
      longText:
        "Built with a focus on color balance, spacing tokens, and minimalistic visuals.",
      link: "#",
      github: "#",
      tags: ["Landing Page", "Design System"],
      images: [
        "https://via.placeholder.com/900x500?text=Landing+-+1",
        "https://via.placeholder.com/900x500?text=Landing+-+2",
        "https://via.placeholder.com/900x500?text=Landing+-+3",
      ],
    },
    {
      title: "Node API Server",
      description: "REST API backend with Node & Express.",
      longText:
        "Authentication, routing, and modular controllers using Express.",
      link: "#",
      github: "#",
      tags: ["Node", "Express", "Backend"],
      images: [
        "https://via.placeholder.com/900x500?text=Node+-+1",
        "https://via.placeholder.com/900x500?text=Node+-+2",
        "https://via.placeholder.com/900x500?text=Node+-+3",
      ],
    },
    {
      title: "Flutter App",
      description: "Cross-platform mobile UI.",
      longText:
        "A clean mobile UI layout built with Flutter widgets and modern animations.",
      link: "#",
      github: "#",
      tags: ["Flutter", "Mobile UI"],
      images: [
        "https://via.placeholder.com/900x500?text=Flutter+-+1",
        "https://via.placeholder.com/900x500?text=Flutter+-+2",
        "https://via.placeholder.com/900x500?text=Flutter+-+3",
      ],
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
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">

      {/* SECTION TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <p className="text-gray-400 mt-2">Some things I've built</p>
      </div>

      {/* FLEX WRAPPER FOR ARROWS + SLIDER */}
      <div className="flex items-center gap-6">

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
              className="min-w-[90%] sm:min-w-[45%] lg:min-w-[30%] 
                bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6
                cursor-pointer transition-all duration-300
                hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"

              onClick={() => {
                setOpenProject(p);
                setModalIndex(0);
              }}
            >
              <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
                <img src={p.images[0]} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
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
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center 
                     z-50"
          onClick={() => setOpenProject(null)}
        >
          <div
            className="bg-white/10 border border-white/20 rounded-xl p-8 w-full max-w-3xl 
                       max-h-[85vh] overflow-y-auto animate-[fadeIn_0.25s_ease-out]"
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
