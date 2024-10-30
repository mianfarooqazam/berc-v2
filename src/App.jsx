import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import introGif from './assets/general/intro.gif';
import Gallery from './pages/Gallery';
import NewsEvents from './pages/NewsEvents';
import OurImpact from './pages/OurImpact';
import Services from './pages/Services';
import Team from './pages/Team';
import Tools from './pages/Tools';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);
  const sections = useRef([]);
  const servicesRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    sections.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    if (servicesRef.current && servicesRef.current.children.length > 0) {
      let ctx = gsap.context(() => {
        gsap.to('.service-slide', {
          xPercent: -100 * (servicesRef.current.children.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top top',
            end: () => `+=${servicesRef.current.offsetWidth}`,
            pin: true,
            scrub: 1,
            snap: 1 / (servicesRef.current.children.length - 1),
          },
        });
      }, servicesRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <img src={introGif} alt="Intro" />
        </div>
      ) : (
        <>
          <Navbar />
          <div id="home" className="pt-16 home-section bg-gray-100 min-h-screen">
            <div ref={(el) => (sections.current[0] = el)} id="home">
              <Home />
            </div>
            <div ref={(el) => (sections.current[1] = el)} id="about-us">
              <AboutUs />
            </div>
            <div ref={servicesRef} id="services">
              <Services />
            </div>
            <div ref={(el) => (sections.current[3] = el)} id="tools">
              <Tools />
            </div>
            <div ref={(el) => (sections.current[4] = el)} id="our-impact">
              <OurImpact />
            </div>
            <div ref={(el) => (sections.current[5] = el)} id="news-events">
              <NewsEvents />
            </div>
            <div ref={(el) => (sections.current[6] = el)} id="team">
              <Team />
            </div>
            <div ref={(el) => (sections.current[7] = el)} id="gallery">
              <Gallery />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
