import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setOpen(false);
      }, 1500);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative max-w-5xl mx-auto px-6 pt-24 pb-2 text-center overflow-hidden"

    >
      {/* Subtle black background */}
      <div className="absolute inset-0 -z-10 bg-black" />

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
        Let’s <span className="text-cyan-400">Connect</span>
      </h2>
      <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
        Have a project in mind or just want to say hi? Drop me a message — I'll get back faster than most inboxes.
      </p>

      {/* Contact Card */}
      <motion.div
        whileHover={{ y: -4 }}
        className="relative bg-black border border-white/[0.06] backdrop-blur-xl 
                   rounded-2xl p-10 mx-auto max-w-xl shadow-[0_0_25px_rgba(255,255,255,0.02)] 
                   hover:shadow-[0_0_35px_rgba(34,211,238,0.06)] transition-all duration-500"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-3 px-10 py-3 bg-cyan-400 text-black font-semibold 
                     rounded-full hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] 
                     transition-all duration-300"
        >
          <span>Send Message</span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            ✉️
          </motion.span>
        </motion.button>

        {/* Socials */}
        <div className="flex justify-center gap-8 mt-10">
          <a href="https://github.com/vivekxkt" className="text-gray-300 hover:text-cyan-400 text-2xl transition">
            <i className="devicon-github-original"></i>
          </a>
          <a href="https://www.linkedin.com/in/vivek-sharma-83284b22b/" className="text-gray-300 hover:text-cyan-400 text-2xl transition">
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 text-2xl transition">
            <i className="devicon-twitter-original"></i>
          </a>
        </div>
      </motion.div>

      {/* Subtle particles */}
      <div className="absolute left-[20%] top-[30%] w-2 h-2 bg-cyan-400/40 rounded-full animate-ping"></div>
      <div className="absolute right-[25%] bottom-[25%] w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex justify-center items-end sm:items-center p-6"
            onClick={() => !sending && !success && setOpen(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="relative w-full max-w-lg bg-black border border-white/10 backdrop-blur-2xl 
                         rounded-2xl p-8 shadow-[0_0_30px_rgba(34,211,238,0.1)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ===== fixed: decorative border is pointer-events-none so it won't block clicks ===== */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  border: "1px solid rgba(34,211,238,0.12)",
                  boxShadow: "inset 0 0 18px rgba(34,211,238,0.06), 0 0 30px rgba(34,211,238,0.04)",
                  // tiny subtle animated gradient using CSS animation class (optional)
                }}
              />

              {/* Close button */}
              {!sending && !success && (
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-5 text-gray-400 hover:text-white transition text-2xl z-10"
                >
                  ✕
                </button>
              )}

              {/* Success Message */}
              {success ? (
                <motion.div
                  key="success"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-cyan-400 flex items-center justify-center text-black text-5xl font-bold shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                    ✓
                  </div>
                  <p className="text-gray-200 mt-6 text-lg">Message Sent!</p>
                </motion.div>
              ) : sending ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-gray-300 mt-4">Sending...</p>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-6 text-left mt-4 relative z-10"
                  onSubmit={handleSubmit}
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">Send a Message</h3>

                  {/* Black input fields with neon borders */}
                  {[
                    { label: "Your Name", type: "text", name: "name", placeholder: "Enter your name" },
                    { label: "Your Email", type: "email", name: "email", placeholder: "you@company.com" },
                  ].map((field, i) => (
                    <div key={i} className="relative group">
                      <label className="text-gray-300 text-sm">{field.label}</label>
                      <input
                        required
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 mt-1 bg-black border border-white/12 rounded-lg 
                                   text-white placeholder-gray-500 outline-none
                                   focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/30
                                   transition-all duration-300"
                      />
                    </div>
                  ))}

                  <div className="relative group">
                    <label className="text-gray-300 text-sm">Message</label>
                    <textarea
                      required
                      name="message"
                      rows="4"
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 mt-1 bg-black border border-white/12 rounded-lg 
                                 text-white placeholder-gray-500 resize-none outline-none
                                 focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/30
                                 transition-all duration-300"
                    ></textarea>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-3 
                               bg-cyan-400 text-black font-semibold rounded-full 
                               hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] 
                               transition-all duration-300 mt-2"
                  >
                    Send
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
