function Footer() {
  return (
    <footer className="relative mt-20 py-10 border-t border-white/10 text-center">

      {/* Soft cyan glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[300px] h-[120px] bg-cyan-500/10 blur-[100px]"></div>
      </div>

      {/* Social icons */}
      <div className="flex justify-center gap-6 mb-5">
        <a href="#" className="text-gray-400 hover:text-cyan-400 transition text-xl">
          <i className="devicon-github-original"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-cyan-400 transition text-xl">
          <i className="devicon-linkedin-plain"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-cyan-400 transition text-xl">
          <i className="devicon-twitter-original"></i>
        </a>
      </div>

      {/* Signature line */}
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Vivek • Built with focus, patience, and a bit of curiosity.
      </p>

    </footer>
  );
}

export default Footer;
