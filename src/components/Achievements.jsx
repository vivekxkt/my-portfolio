import { motion } from "framer-motion";
import { useState } from "react";

function AchievementCard({ a, index }) {
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
    // ✅ Animation wrapper (GPU-safe)
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="will-change-transform will-change-opacity transform-gpu"
    >
      {/* ✅ Static inner card (no flicker) */}
      <div
        onClick={createRipple}
        className="relative group p-6 sm:p-8 rounded-2xl 
                   bg-white/[0.05] border border-white/[0.1]
                   backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.05)]
                   hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                   hover:border-cyan-400/40 transition-all duration-300 
                   overflow-hidden text-center cursor-pointer select-none"
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/20 to-transparent blur-lg" />

        {/* Cyan Streak */}
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

        {/* Content */}
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 relative z-10">{a.icon}</div>
        <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 relative z-10">
          {a.value}
        </h3>
        <p className="text-gray-300 mt-2 text-xs sm:text-sm leading-relaxed relative z-10">
          {a.label}
        </p>
      </div>
    </motion.div>
  );
}

function Achievements() {
  const items = [
    { value: "5+", label: "Years Exploring Code", icon: "⏳" },
    { value: "10+", label: "Projects Completed", icon: "✅" },
    { value: "10+", label: "Technologies", icon: "⚡" },
    { value: "∞", label: "Ideas ", icon: "💡" },
  ];

  return (
    <section className="relative py-20 sm:py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-black" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-cyan-400/5 blur-[160px] rounded-full animate-pulse -z-10" />

      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-center mb-14">
        Achievements
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
        {items.map((a, i) => (
          <AchievementCard key={i} a={a} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Achievements;
