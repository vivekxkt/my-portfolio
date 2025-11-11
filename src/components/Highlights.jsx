function Highlights() {
  const stats = [
    { label: "Years Coding", value: "5+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies", value: "10+" },
    { label: "Focus Areas", value: "UI • React • Motion" },
  ];

  return (
    <section className="py-16 sm:py-20 px-6 max-w-6xl mx-auto relative">

      {/* Soft glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[300px] h-[150px] sm:w-[600px] sm:h-[200px] 
                        bg-cyan-500/10 blur-[120px] rounded-full">
        </div>
      </div>

      {/* ✅ Mobile: 2 cards per row */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

        {stats.map((s, i) => (
          <div
            key={i}
            className="p-4 sm:p-6 text-center bg-white/5 backdrop-blur-md 
                       border border-white/10 rounded-xl 
                       shadow-[0_0_20px_rgba(34,211,238,0.05)]
                       hover:border-cyan-400/40 transition"
          >
            <h3 className="text-2xl sm:text-4xl font-semibold text-cyan-400 mb-1 sm:mb-2">
              {s.value}
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm tracking-wide leading-relaxed">
              {s.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Highlights;
