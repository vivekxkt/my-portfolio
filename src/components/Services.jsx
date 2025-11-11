function Services() {
  const items = [
    {
      title: "Frontend Development",
      desc: "Clean, modern, responsive UI built with React and Tailwind.",
      icon: "💻",
    },
    {
      title: "UI/UX & Interaction",
      desc: "Micro-interactions, motion, visual hierarchy, and smooth experience design.",
      icon: "✨",
    },
    {
      title: "Full Website Builds",
      desc: "Portfolio sites, landing pages, dashboards, and multi-page applications.",
      icon: "🚀",
    },
    {
      title: "Backend / APIs",
      desc: "Node + Express REST APIs, authentication, and server logic.",
      icon: "🛠️",
    },
    {
      title: "Mobile UI (Flutter)",
      desc: "Beautiful cross-platform mobile app interfaces using Flutter.",
      icon: "📱",
    },
    {
      title: "Brand & Visual System",
      desc: "Color, typography, components, and consistent design language.",
      icon: "🎨",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24 relative">

      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-14">
        Services
      </h2>

      {/* Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[150px] 
                      sm:w-[500px] sm:h-[200px] bg-cyan-500/10 blur-[110px] -z-10"></div>

      {/* ✅ 2 per row on mobile, 3 per row on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-10 relative">

        {items.map((item, i) => (
          <div
            key={i}
            className="p-4 sm:p-8 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md
                       hover:border-cyan-400/40 transition group 
                       shadow-[0_0_20px_rgba(34,211,238,0.03)]"
          >
            {/* Icon */}
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-4 
                            group-hover:scale-110 transition-transform">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-sm sm:text-xl font-semibold text-white mb-1 sm:mb-2">
              {item.title}
            </h3>

            {/* ✅ Description hidden on mobile */}
            <p className="hidden sm:block text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Services;
