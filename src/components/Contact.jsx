import { useState } from "react";

function Contact() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // Fake sending delay
    setTimeout(() => {
      setSending(false);
      setSuccess(true);

      // Keep the success tick for a moment
      setTimeout(() => {
        setSuccess(false);
        setOpen(false);
      }, 1200);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative max-w-4xl mx-auto px-6 py-24 text-center"
    >
      {/* Glow background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[300px] h-[300px] bg-cyan-500/10 blur-[130px] rounded-full"></div>
      </div>

      <h2 className="text-4xl font-semibold mb-6">Contact</h2>

      <p className="text-gray-300 mb-10 text-lg max-w-xl mx-auto">
        If you’d like to work together or have something in mind, drop a message.
        I usually reply faster than most inboxes expect.
      </p>

      {/* Contact Card */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl mx-auto max-w-xl shadow-[0_0_30px_rgba(34,211,238,0.08)]">

        {/* Button to open modal */}
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-3 px-8 py-3 bg-cyan-400 text-black 
                     font-semibold rounded-full hover:bg-cyan-300 transition"
        >
          Send Message
        </button>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10">
          <a href="#" className="text-gray-300 hover:text-cyan-400 text-xl transition">
            <i className="devicon-github-original"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 text-xl transition">
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 text-xl transition">
            <i className="devicon-twitter-original"></i>
          </a>
        </div>
      </div>

      {/* Ambient dots */}
      <div className="absolute left-[15%] top-[30%] w-3 h-3 bg-cyan-400/50 rounded-full animate-ping"></div>
      <div className="absolute right-[20%] bottom-[25%] w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>

      {/* Slide-Up Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-end"
          onClick={() => !sending && !success && setOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-white/10 border border-white/20 backdrop-blur-xl 
                       p-8 rounded-t-2xl animate-[slideUp_0.35s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            {!sending && !success && (
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-6 text-gray-300 hover:text-white transition text-xl"
              >
                ✕
              </button>
            )}

            {/* SUCCESS TICK */}
            {success && (
              <div className="flex flex-col items-center py-10 animate-[fadeIn_0.3s_ease-out]">
                <div className="w-20 h-20 rounded-full bg-cyan-400 flex items-center justify-center text-black text-5xl font-bold animate-[popIn_0.4s_ease-out]">
                  ✓
                </div>
                <p className="text-gray-200 mt-6 text-lg">Message Sent</p>
              </div>
            )}

            {/* FORM */}
            {!sending && !success && (
              <form className="flex flex-col gap-5 text-left" onSubmit={handleSubmit}>
                
                <h3 className="text-2xl font-semibold text-white mb-2">Send a Message</h3>

                <div>
                  <label className="text-gray-300 text-sm">Your Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 mt-1 bg-white/10 border border-white/10 rounded-lg 
                               outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm">Your Email</label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 mt-1 bg-white/10 border border-white/10 rounded-lg 
                               outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm">Message</label>
                  <textarea
                    required
                    rows="4"
                    className="w-full px-4 py-3 mt-1 bg-white/10 border border-white/10 rounded-lg 
                               outline-none focus:border-cyan-400 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-3 
                             bg-cyan-400 text-black font-semibold rounded-full 
                             hover:bg-cyan-300 transition mt-2"
                >
                  Send
                </button>
              </form>
            )}

            {/* Sending Loader */}
            {sending && (
              <div className="flex flex-col items-center py-12 animate-[fadeIn_0.3s_ease-out]">
                <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-300 mt-4">Sending...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
