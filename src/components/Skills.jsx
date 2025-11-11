function Skills() {
  const skills = [
    
    { name: "React", icon: (<i className="devicon-react-original colored text-5xl"></i>) },
    { name: "Tailwind CSS", icon: (<i className="devicon-tailwindcss-plain colored text-5xl"></i>) },
    
    { name: "GitHub", icon: (<i className="devicon-github-original text-5xl"></i>) },
    { name: "Python", icon: (<i className="devicon-python-plain colored text-5xl"></i>) },

   
    { name: "Flutter", icon: (<i className="devicon-flutter-plain colored text-5xl"></i>) },
    { name: "Java", icon: (<i className="devicon-java-plain colored text-5xl"></i>) },
    { name: "Node.js", icon: (<i className="devicon-nodejs-plain colored text-5xl"></i>) },
    { name: "Express", icon: (<i className="devicon-express-original text-5xl"></i>) },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">Skills</h2>
        <p className="text-gray-400 mt-2">Tools & technologies I enjoy working with</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="relative group p-6 rounded-xl border border-white/10 bg-white/5 
                       backdrop-blur-md transition-all duration-300 
                       hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
                       flex flex-col items-center"
          >
            {/* Glow Ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 rounded-full bg-cyan-400/10 blur-2xl opacity-0 group-hover:opacity-40 transition-all"></div>
            </div>

            {/* Icon */}
            <div className="group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>

            {/* Name */}
            <p className="text-gray-200 text-lg font-medium mt-4">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
