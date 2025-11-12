import { motion } from "framer-motion";
import { useState } from "react";

function ServiceCard({ item, index }) {
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
    // ✅ Animation wrapper (handles fade + slide-up safely)
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
        className="relative group p-5 sm:p-8 rounded-2xl cursor-pointer select-none
                   bg-white/[0.05] border border-white/[0.1]
                   backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.05)]
                   hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                   transition-all duration-300 overflow-hidden text-center"
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

        {/* Icon */}
        <div className="text-3xl sm:text-4xl mb-2 sm:mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-xl font-semibold text-white mb-1 sm:mb-2 relative z-10">
          {item.title}
        </h3>

        {/* Description */}
        <p className="hidden sm:block text-gray-300 text-sm leading-relaxed relative z-10">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

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
    <section className="relative py-20 sm:py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-black" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-cyan-400/5 blur-[160px] rounded-full animate-pulse -z-10" />

      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-center mb-14">
        My <span className="text-cyan-400">Services</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-10">
        {items.map((item, i) => (
          <ServiceCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Services;
