import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function QuickActions() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  // Show button after slight scroll
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  // Radial positions
  const positions = [
    { x: -70, y: -10, label: "Resume", icon: "📄", link: "/resume.pdf" },
    { x: -50, y: -60, label: "Instagram", icon: "📸", link: "https://instagram.com" },
    { x: 10, y: -80, label: "LeetCode", icon: "🧩", link: "https://leetcode.com" },
    
  ];

  return (
    <>
      {show && (
        <div className="fixed bottom-6 right-6 z-50">
          
          {/* Radial menu items */}
          <AnimatePresence>
            {open &&
              positions.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, x: item.x, y: item.y }}
                  exit={{ opacity: 0, x: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 17 }}
                  className="absolute"
                >
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 
                                  bg-black/70 px-2 py-1 rounded-md text-xs text-gray-300 
                                  opacity-80">
                    {item.label}
                  </div>

                  {/* Action Bubble */}
                  <button
                    onClick={
                      item.action
                        ? item.action
                        : () => window.open(item.link, "_blank")
                    }
                    className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl 
                               border border-white/10 shadow-[0_0_15px_rgba(34,211,238,0.3)]
                               flex items-center justify-center text-lg text-white
                               hover:scale-110 hover:text-cyan-400 transition-all"
                  >
                    {item.icon}
                  </button>
                </motion.div>
              ))}
          </AnimatePresence>

          {/* MAIN BUBBLE */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className="relative w-14 h-14 rounded-full 
                       bg-black/50 backdrop-blur-xl border border-cyan-400/30
                       shadow-[0_0_25px_rgba(34,211,238,0.35)]
                       text-white text-2xl flex items-center justify-center
                       transition-all"
          >
            {open ? "✕" : "☰"}
          </motion.button>
        </div>
      )}
    </>
  );
}

export default QuickActions;
