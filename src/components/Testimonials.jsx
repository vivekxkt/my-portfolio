import { motion } from "framer-motion";
import { useState } from "react";

function TestimonialCard({ t, index }) {
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
    // ✅ Outer animation wrapper (flicker-free)
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="will-change-transform will-change-opacity transform-gpu"
    >
      {/* ✅ Static content (no flicker during animation) */}
      <div
        onClick={createRipple}
        className="relative group min-w-[260px] sm:min-w-[370px] 
                   bg-white/[0.06] border border-white/[0.1] 
                   backdrop-blur-2xl rounded-2xl p-5 sm:p-7 flex-shrink-0
                   shadow-[0_0_25px_rgba(34,211,238,0.06)]
                   hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]
                   hover:border-cyan-400/40 transition-all duration-300 
                   cursor-pointer select-none overflow-hidden"
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-400/20 to-transparent blur-xl" />

        {/* Cyan Streak */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-70" />

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
        <div className="flex items-center gap-3 sm:gap-4 mb-4 relative z-10">
          <div className="relative">
            <img
              src={t.img}
              alt={t.name}
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-white/20 object-cover"
            />
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-md"></div>
          </div>
          <div>
            <p className="text-white text-sm sm:text-base font-medium">{t.name}</p>
            <p className="text-gray-400 text-xs sm:text-sm">{t.role}</p>
          </div>
        </div>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed relative z-10 italic">
          “{t.text}”
        </p>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Dr. Kirti",
      role: "Vice President · The MRF Team",
      text: "I thought it was impossible to make a website beautiful as our product, but Vivek proved me wrong.",
      img: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Jasnoor Singh",
      role: "Marketing Manager (Startup)",
      text: "I've never met a web developer/designer who truly cares about their clients like Vivek does.",
      img: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Karan Rana",
      role: "Worker at Coca Cola",
      text: "After Vivek optimised our website, our traffic increased by 50%. We can't thank him enough.",
      img: "https://i.pravatar.cc/150?img=33",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-black" />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 
                   w-[900px] h-[450px] bg-cyan-400/5 
                   blur-[160px] rounded-full animate-pulse -z-10"
      />

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-center mb-14">
        What <span className="text-cyan-400">People Say</span>
      </h2>

      {/* Edge Fades */}
      <div className="absolute left-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

      {/* Continuous Scroll */}
      <div className="flex whitespace-nowrap w-max animate-testimonialScroll">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-6 sm:gap-8 pr-8">
            {items.map((t, idx) => (
              <TestimonialCard key={`${i}-${idx}`} t={t} index={idx} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
