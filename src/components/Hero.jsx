function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"></div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight 
                      animate-[fadeIn_1s_ease-out]">
          Hi, I'm <span className="text-cyan-400">Vivek</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto
                      animate-[slideUp_1.2s_ease-out] opacity-90">
          Web Developer • App Developer • Tech Explorer
        </p>

        

        <button className="mt-10 px-10 py-4 bg-cyan-400 text-black font-semibold 
                          rounded-xl shadow-lg hover:bg-cyan-300 transition 
                          animate-[popIn_1.3s_ease-out]">
          View My Work
        </button>
      </div>

      {/* Floating shapes */}
      <div className="absolute left-10 bottom-20 w-24 h-24 border border-cyan-400/30 rounded-xl animate-[float1_6s_ease-in-out_infinite]"></div>
      <div className="absolute right-16 top-28 w-16 h-16 border border-cyan-400/20 rounded-full animate-[float2_7s_ease-in-out_infinite]"></div>
     
      {/* Soft glowing ring */}
      <div className="absolute right-24 bottom-12 w-40 h-40 border-2 border-cyan-300/20 
                      rounded-full blur-sm animate-[ringPulse_5s_ease-in-out_infinite]"></div>

      {/* Small drifting dot */}
      <div className="absolute right-1/3 top-1/3 w-3 h-3 bg-cyan-400/50 rounded-full 
                      animate-[dotDrift_9s_ease-in-out_infinite]"></div>

      {/* Faint tilted square */}
      <div className="absolute left-16 top-1/4 w-20 h-20 border border-white/10 
                      backdrop-blur-sm rounded-md rotate-12 
                      animate-[tiltFloat_10s_ease-in-out_infinite]"></div>
      {/* Custom Animations - Add inside index.css */}
      {/* Large soft cyan orb */}
      <div className="absolute top-[20%] left-[60%] w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full animate-[orbFloat_14s_ease-in-out_infinite]"></div>

      
      {/* Tiny glowing stars */}
      <div className="absolute top-[10%] left-[45%] w-2 h-2 bg-white/60 rounded-full animate-[starTwinkle_3s_ease-in-out_infinite]"></div>
      <div className="absolute top-[60%] left-[30%] w-1.5 h-1.5 bg-cyan-300/60 rounded-full animate-[starTwinkle_4s_ease-in-out_infinite]"></div>
      <div className="absolute top-[40%] left-[75%] w-2 h-2 bg-white/50 rounded-full animate-[starTwinkle_2.5s_ease-in-out_infinite]"></div>

      
      {/* Soft rotating square */}
      <div className="absolute left-[50px] bottom-[30%] w-24 h-24 border border-white/10 rounded-lg 
                      animate-[squareSpin_20s_linear_infinite]"></div>

    
      {/* Pulsing circle */}
      <div className="absolute top-[85%] left-[20%] w-10 h-10 bg-cyan-400/40 rounded-full 
                      animate-[pulseCircle_5s_ease-in-out_infinite]"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-[fadeIn_2s_ease-out]">
        <span className="text-gray-400 text-sm mb-1">scroll</span>
        <div className="w-1 h-6 bg-cyan-400/40 rounded-full animate-[scrollBounce_1.8s_ease-in-out_infinite]"></div>
      </div>

    </section>
  );
}

export default Hero;
