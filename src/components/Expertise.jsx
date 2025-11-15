import { motion } from "framer-motion";

function Expertise() {
  return (
    <section className="relative py-20 sm:py-24 px-6 max-w-6xl mx-auto overflow-hidden cyber-border">

      {/* ========================== */}
      {/* 🔥 DOUBLE LAYER SCANNING BORDER */}
      {/* ========================== */}

      {/* Faster top scan */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] w-full gradient-scan opacity-70"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Slower bottom scan */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full gradient-scan opacity-40"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Left vertical scan */}
      <motion.div
        className="absolute top-0 left-0 w-[2px] h-full bg-cyan-400/50"
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Right vertical scan */}
      <motion.div
        className="absolute top-0 right-0 w-[2px] h-full bg-cyan-400/30"
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      {/* ========================== */}
      {/* 🔥 CYBER CORNER GLOW POINTS */}
      {/* ========================== */}
      <div className="absolute -top-[3px] -left-[3px] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)]"></div>
      <div className="absolute -top-[3px] -right-[3px] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)]"></div>
      <div className="absolute -bottom-[3px] -left-[3px] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)]"></div>
      <div className="absolute -bottom-[3px] -right-[3px] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)]"></div>

      {/* ========================== */}
      {/* 🔥 RANDOM GLITCH EFFECT */}
      {/* ========================== */}
      <motion.div
        className="absolute inset-0 bg-cyan-400/5 glitch pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.05, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-black" />

      {/* Cyan Glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 
                   w-[900px] h-[500px] bg-cyan-400/10 blur-[180px] 
                   rounded-full animate-pulse -z-10"
      />

      {/* Title Section */}
      <div className="text-center mb-12 relative">

        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-white to-cyan-400 text-transparent bg-clip-text animate-pulse">
            Expertise
          </span>
        </motion.h2>

        {/* Neon Underline */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "120px", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="h-[3px] bg-cyan-400 mx-auto mt-3 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]"
        />

        {/* Bold Hook Line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="text-gray-300 text-lg sm:text-xl font-medium mt-6 mb-6"
        >
          I turn ideas into reality — with AI, logic, design, and raw creativity.
        </motion.p>

        {/* Main Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
        >
          I’m highly skilled in{" "}
          <span className="text-cyan-400 font-semibold">Prompt Engineering</span>, 
          the ability to communicate with AI in a way that produces precise, 
          powerful, and highly creative results. I understand how to shape ideas, 
          refine outputs, and turn concepts into real, functional systems.
          <br /><br />
          Whether it's websites, apps, UI layouts, automation systems, content 
          generation, tools, or complex workflows — I can design and build almost 
          anything. I learn fast, experiment constantly, and combine creativity 
          with structure to craft experiences that feel smooth, balanced, and intentional.
        </motion.p>

      </div>

    </section>
  );
}

export default Expertise;
