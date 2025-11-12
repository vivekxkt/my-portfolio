function TechStack() {
  const tech = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "Flutter",
    "Java",
    "MongoDB",
    "Firebase",
    "Git",
    "Python",
  ];

  return (
    <section className="py-16 px-6 overflow-hidden relative">
      {/* Faded edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10"></div>

      {/* Continuous scroll container */}
      <div className="flex whitespace-nowrap w-max animate-techScroll">
        {/* Duplicate two sets for smooth infinite scroll */}
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-6 pr-6">
            {tech.map((item, i) => (
              <span
                key={i}
                className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 
                           text-sm backdrop-blur-md hover:border-cyan-400 hover:text-cyan-400
                           transition shrink-0"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
