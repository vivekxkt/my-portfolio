import { motion } from "framer-motion";
import { useState } from "react";

function HighlightCard({ stat, delay }) {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const newRipple = { x, y, size, id: Date.now() };

    setRipples([newRipple]);
    setTimeout(() => setRipples([]), 600);
  };

  return (
    <motion.div
      onClick={createRipple}
      initial={{ y: 25 }}
      whileInView={{ y: 0 }}
      transition={{ delay, duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative group p-6 sm:p-8 rounded-2xl 
                 bg-white/[0.05] border border-white/[0.1] 
                 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.05)]
                 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                 transition duration-300 overflow-hidden
                 text-center cursor-pointer select-none will-change-transform"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/20 to-transparent blur-lg" />

      {/* Cyan streak */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-60" />

      {/* Ripple Effect */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ripple pointer-events-none"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
            background: `radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)`,
          }}
        />
      ))}

      <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2 relative z-10">
        {stat.value}
      </h3>
      <p className="text-gray-300 text-sm sm:text-base relative z-10 tracking-wide">
        {stat.label}
      </p>
    </motion.div>
  );
}

function Highlights() {
  const stats = [
    { label: "Years Coding", value: "5+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies", value: "10+" },
    { label: "Frameworks", value: "6+" },
  ];

  return (
    <section className="relative py-20 sm:py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Deep black background with faint cyan glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-black" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-cyan-400/5 blur-[160px] rounded-full animate-pulse -z-10" />

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
          My <span className="text-cyan-400">Highlights</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          A quick snapshot of what I bring to the table.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
        {stats.map((s, i) => (
          <HighlightCard key={i} stat={s} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

export default Highlights;
