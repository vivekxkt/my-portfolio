import { motion } from "framer-motion";
import { useState } from "react";

function SkillCard({ skill }) {
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
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="relative group p-6 sm:p-8 rounded-2xl 
                 bg-white/[0.05] border border-white/[0.1] 
                 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.05)]
                 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                 transition-all duration-300 overflow-hidden
                 flex flex-col items-center justify-center cursor-pointer select-none"
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

      {/* Icon */}
      <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>

      {/* Name */}
      <p className="text-gray-200 text-base sm:text-lg font-medium mt-4 relative z-10">
        {skill.name}
      </p>
    </motion.div>
  );
}

function Skills() {
  const skills = [
    { name: "React", icon: <i className="devicon-react-original colored text-5xl"></i> },
    { name: "Tailwind CSS", icon: <i className="devicon-tailwindcss-plain colored text-5xl"></i> },
    { name: "GitHub", icon: <i className="devicon-github-original text-5xl"></i> },
    { name: "Python", icon: <i className="devicon-python-plain colored text-5xl"></i> },
    { name: "Flutter", icon: <i className="devicon-flutter-plain colored text-5xl"></i> },
    { name: "Java", icon: <i className="devicon-java-plain colored text-5xl"></i> },
    { name: "Node.js", icon: <i className="devicon-nodejs-plain colored text-5xl"></i> },
    { name: "Express", icon: <i className="devicon-express-original text-5xl"></i> },
  ];

  return (
    <section className="relative py-20 sm:py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Deep black background + faint cyan glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-black" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-cyan-400/5 blur-[160px] rounded-full animate-pulse -z-10" />

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Tools & technologies I enjoy working with
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
