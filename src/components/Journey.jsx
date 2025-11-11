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

  const Card = ({ item, align }) => (
    <div
      className={[
        "bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10",
        "hover:border-cyan-400/40 transition shadow-sm",
        "hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]",
        align === "left" ? "text-right" : "text-left",
      ].join(" ")}
    >
      {/* Year */}
      <h3 className="text-cyan-400 text-base sm:text-xl font-semibold">
        {item.year}
      </h3>

      {/* Title */}
      <h4 className="text-sm sm:text-lg font-semibold mt-1">
        {item.title}
      </h4>

      {/* ✅ Description hidden on mobile */}
      <p className="hidden sm:block text-gray-400 text-sm mt-2 leading-relaxed">
        {item.text}
      </p>
    </div>
  );

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center">
        My Journey
      </h2>

      <div className="relative">

        {/* ✅ Vertical timeline line (now visible on mobile also) */}
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
                {/* ✅ Dot — Now visible on mobile too */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 
                                -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full 
                                  shadow-[0_0_14px_rgba(34,211,238,0.6)]"></div>
                </div>

                {/* ✅ Left card */}
                {left ? (
                  <Card item={item} align="left" />
                ) : (
                  <div></div>
                )}

                {/* ✅ Right card */}
                {left ? (
                  <div></div>
                ) : (
                  <Card item={item} align="right" />
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
