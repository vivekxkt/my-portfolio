function Testimonials() {
  const items = [
    {
      name: "Riya Sharma",
      role: "UI Designer",
      text: "Vivek’s sense of motion and clean interfaces stands out. Everything feels smooth and intentional.",
      img: "https://i.pravatar.cc/100?img=11",
    },
    {
      name: "Arjun Verma",
      role: "Full Stack Developer",
      text: "He builds modern components with structure and clarity. Easy to collaborate with.",
      img: "https://i.pravatar.cc/100?img=32",
    },
    {
      name: "Sara Kapoor",
      role: "Product Manager",
      text: "Fast learner, experiments with ideas, and focuses on user experience. Strong frontend instincts.",
      img: "https://i.pravatar.cc/100?img=22",
    },
  ];

  const doubled = [...items, ...items];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden relative">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-14">
        Testimonials
      </h2>

      {/* ✅ Smaller fade edges on mobile */}
      <div className="absolute left-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent pointer-events-none z-10"></div>

      {/* ✅ Slower scroll on mobile */}
      <div className="flex gap-4 sm:gap-8 animate-testimonialScrollMobile sm:animate-testimonialScroll whitespace-nowrap">
        {doubled.map((t, i) => (
          <div
            key={i}
            className="min-w-[230px] sm:min-w-[350px] bg-white/5 border border-white/10 
                       backdrop-blur-md rounded-2xl p-4 sm:p-6 flex-shrink-0 
                       shadow-[0_0_20px_rgba(34,211,238,0.05)]
                       hover:border-cyan-400/40 transition"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20"
              />
              <div>
                <p className="text-white text-sm sm:text-base font-medium">{t.name}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{t.role}</p>
              </div>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {t.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
