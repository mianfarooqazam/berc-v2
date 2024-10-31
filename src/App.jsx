// src/App.jsx
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import introGif from './assets/general/intro.gif';
import Gallery from './pages/Gallery';
import NewsEvents from './pages/NewsEvents';
import OurImpact from './pages/OurImpact';
import Services from './pages/Services';
import Team from './pages/Team';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

const App = () => {
  const [loading, setLoading] = useState(true);
  const sections = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    sections.current.forEach((section) => {
      if (section && section.id !== 'services') {
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
      }
    });
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
            {/* No ref needed here */}
            <Services />
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
