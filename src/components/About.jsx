function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-semibold mb-8 sm:mb-10">
        About Me
      </h2>

      {/* Main Paragraph */}
      <p className="text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto px-1">
        I like building modern, responsive interfaces that feel smooth and balanced.
        I work with JavaScript, React, and clean UI patterns to turn ideas into 
        intuitive experiences. I learn fast, experiment often, and enjoy creating 
        things that look good and feel good to use.
      </p>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">

        <div className="p-5 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm
                        hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
                        transition-all duration-300 group">
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-cyan-400 
                         group-hover:translate-x-1 transition-all">
            UI Engineering
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Clean layouts, balanced spacing, and thoughtful interface structure.
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm
                        hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
                        transition-all duration-300 group">
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-cyan-400 
                         group-hover:translate-x-1 transition-all">
            Modern React
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Components, hooks, structure, and maintainable front-end design.
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm
                        hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
                        transition-all duration-300 group">
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-cyan-400 
                         group-hover:translate-x-1 transition-all">
            Motion & Interaction
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Smooth animations that guide the eye and enhance the experience.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
