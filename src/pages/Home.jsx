import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import Highlights from "../components/Highlights";
import TechStack from "../components/TechStack";

import About from "../components/About";
import Skills from "../components/Skills";
import Journey from "../components/Journey";

import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Achievements from "../components/Achievements";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Expertise from "../components/Expertise";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Highlights />
      <TechStack />

      <About />
      <Skills />
      <Journey />

      <Services />
      <Projects />
      <Testimonials />
      <Expertise/>
      <Achievements />
      <TechStack />

      <Contact />
      <Footer />

     
    </>
  );
}

export default Home;
