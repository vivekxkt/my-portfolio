import { motion } from "framer-motion";
import { useState } from "react";

function AboutCard({ card, index }) {
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
    // ✅ Animation wrapper (fade + slide-up)
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="will-change-transform will-change-opacity transform-gpu"
    >
      {/* ✅ Static content inside (no flicker, stable blur) */}
      <div
        onClick={createRipple}
        className="relative group p-6 sm:p-8 rounded-2xl 
                   bg-white/[0.05] border border-white/[0.1] 
                   backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.05)]
                   hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                   transition duration-300 overflow-hidden
                   cursor-pointer select-none"
      >
        {/* Hover glow */}
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

        <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300">
          {card.title}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed relative z-10">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}

function About() {
  const cards = [
    {
      title: "UI Engineering",
      desc: "Clean layouts, balanced spacing, and thoughtful interface structure.",
    },
    {
      title: "Modern React",
      desc: "Components, hooks, structure, and maintainable front-end design.",
    },
    {
      title: "Motion & Interaction",
      desc: "Smooth animations that guide the eye and enhance the experience.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Deep black background + faint cyan glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-black" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-cyan-400/5 blur-[160px] rounded-full animate-pulse -z-10" />

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          I like building modern, responsive interfaces that feel smooth and balanced.
          I work with JavaScript, React, and clean UI patterns to turn ideas into
          intuitive experiences. I learn fast, experiment often, and enjoy creating
          things that look good and feel good to use.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
        {cards.map((card, i) => (
          <AboutCard key={i} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}

export default About;
