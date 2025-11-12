import { motion } from "framer-motion";
import { useState } from "react";

function JourneyCard({ item, align, delay }) {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45 }}
      viewport={{ once: true }}
      className={[
        "relative group p-5 sm:p-7 rounded-2xl cursor-pointer select-none",
        "bg-white/[0.05] border border-white/[0.1]",
        "backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.05)]",
        "hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300",
        align === "left" ? "text-right" : "text-left",
      ].join(" ")}
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

      {/* Year */}
      <h3 className="text-cyan-400 text-base sm:text-xl font-semibold relative z-10">
        {item.year}
      </h3>

      {/* Title */}
      <h4 className="text-white text-sm sm:text-lg font-semibold mt-1 relative z-10">
        {item.title}
      </h4>

      {/* Description */}
      <p className="hidden sm:block text-gray-400 text-sm mt-2 leading-relaxed relative z-10">
        {item.text}
      </p>
    </motion.div>
  );
}

function Journey() {
  const items = [
    {
      year: "2019",
      title: "First Line of Code",
      text: "Started exploring programming and got hooked on building things from scratch.",
    },
    {
      year: "2021",
      title: "First Real Project",
      text: "Created my first complete website and shifted fully into front-end work.",
    },
    {
      year: "2023",
      title: "React & Modern UI",
      text: "Learned React, hooks, components, and started focusing on clean design systems.",
    },
    {
      year: "2025",
      title: "Creative Direction",
      text: "Exploring motion, small interactions, and developing my visual identity.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Deep black background with faint cyan glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-black" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-cyan-400/5 blur-[160px] rounded-full animate-pulse -z-10" />

      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-center mb-16">
        My <span className="text-cyan-400">Journey</span>
      </h2>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px]">
          <div className="w-full h-full bg-white/10" />
          <div className="absolute inset-0 w-full bg-gradient-to-b from-cyan-400/50 to-transparent" />
        </div>

        <div className="space-y-14 sm:space-y-16">
          {items.map((item, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={i}
                className="relative grid grid-cols-2 gap-6 items-center"
              >
                {/* Timeline Dot */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_14px_rgba(34,211,238,0.6)]"></div>
                </div>

                {/* Left Card */}
                {left ? (
                  <JourneyCard item={item} align="left" delay={i * 0.1} />
                ) : (
                  <div></div>
                )}

                {/* Right Card */}
                {left ? (
                  <div></div>
                ) : (
                  <JourneyCard item={item} align="right" delay={i * 0.1} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Journey;
