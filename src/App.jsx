import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import HeroSection from "./pages/HeroSection";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ContactSection from "./pages/ContactSection";
import Footer from "./pages/Footer";
import LoadingScreen from "./pages/LoadingScreen";


const App = () => {

  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    const loadResources = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    loadResources()
  },[])


  const [heroRef, heroInView] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.5 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });

  const heroSpring = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? "translateY(0)" : "translateY(-50px)",
  });

  const aboutSpring = useSpring({
    opacity: aboutInView ? 1 : 0,
    transform: aboutInView ? "translateY(0)" : "translateY(-50px)",
  });

  const projectsSpring = useSpring({
    opacity: projectsInView ? 1 : 0,
    transform: projectsInView ? "translateY(0)" : "translateY(-50px)",
  });

  const skillsSpring = useSpring({
    opacity: skillsInView ? 1 : 0,
    transform: skillsInView ? "translateY(0)" : "translateY(-50px)",
  });

  const contactSpring = useSpring({
    opacity: contactInView ? 1 : 0,
    transform: contactInView ? "translateY(0)" : "translateY(-50px)",
  });

  return (
    <>
    {isLoading && <LoadingScreen/>}
    {!isLoading && (
      <div className="overflow-hidden bg-black text-white">
      {/* Hero Section */}
      <animated.div id='home' style={heroSpring} ref={heroRef}>
        <HeroSection />
      </animated.div>

      {/* About Me */}
      <animated.div id='about' style={aboutSpring} ref={aboutRef}>
        <AboutMe />
      </animated.div>

      {/* Projects */}
      <animated.div id='projects' style={projectsSpring} ref={projectsRef}>
        <Projects />
      </animated.div>

      {/* Skills */}
      <animated.div id='skills' style={skillsSpring} ref={skillsRef}>
        <Skills />
      </animated.div>

      {/* Contact */}
      <animated.div id='contact' style={contactSpring} ref={contactRef}>
        <ContactSection />
      </animated.div>

      {/* Footer */}
      <Footer />
    </div>
    )}
    
  </>
  );
};

export default App;
