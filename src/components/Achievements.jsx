function Achievements() {
  const items = [
    { value: "5+", label: "Years Exploring Code", icon: "⏳" },
    { value: "20+", label: "Projects Completed", icon: "✅" },
    { value: "10+", label: "Technologies", icon: "⚡" },
    { value: "∞", label: "Ideas & Experiments", icon: "💡" },
  ];

  return (
    <section className="py-20 sm:py-24 px-6 max-w-6xl mx-auto relative text-center">

      {/* Soft glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[350px] h-[180px] sm:w-[600px] sm:h-[250px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      </div>

      <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-14">
        Achievements
      </h2>

      {/* ✅ 2 per row on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">

        {items.map((a, i) => (
          <div
            key={i}
            className="p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl 
                       shadow-[0_0_20px_rgba(34,211,238,0.05)] 
                       hover:border-cyan-400/40 transition"
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{a.icon}</div>

            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">
              {a.value}
            </h3>

            <p className="text-gray-300 mt-2 text-xs sm:text-sm leading-relaxed">
              {a.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Achievements;
