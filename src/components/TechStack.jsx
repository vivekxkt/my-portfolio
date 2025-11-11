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

  // Duplicate for infinite seamless scroll
  const repeated = [...tech, ...tech];

  return (
    <section className="py-16 px-6 overflow-hidden relative">

      {/* Soft gradient edges for fade effect */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10"></div>

      <div className="whitespace-nowrap animate-techScroll flex gap-6">
        {repeated.map((item, i) => (
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
    </section>
  );
}

export default TechStack;
