import { useState, useEffect } from "react";

function QuickActions() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  // Show button after slight scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {show && (
        <div className="fixed bottom-6 right-6 z-50">

          {/* Expanded actions */}
          <div
            className={`flex flex-col gap-3 mb-3 transition-all ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
            }`}
          >

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="p-3 bg-white/10 border border-white/20 backdrop-blur-md rounded-full 
                         hover:border-cyan-400 hover:text-cyan-400 transition text-xl"
            >
              ⬆️
            </button>

            {/* Resume download */}
            <a
              href="/resume.pdf" // Put your real resume later
              download
              className="p-3 bg-white/10 border border-white/20 backdrop-blur-md rounded-full 
                         hover:border-cyan-400 hover:text-cyan-400 transition text-xl"
            >
              📄
            </a>

            {/* Theme toggle (inactive but ready to activate) */}
            {/* <button
              className="p-3 bg-white/10 border border-white/20 backdrop-blur-md rounded-full 
                         hover:border-cyan-400 hover:text-cyan-400 transition text-xl"
            >
              🌓
            </button> */}
          </div>

          {/* Main floating button */}
          <button
            onClick={() => setOpen(!open)}
            className="p-4 bg-cyan-400 text-black rounded-full shadow-lg 
                       hover:bg-cyan-300 transition text-xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      )}
    </>
  );
}

export default QuickActions;
