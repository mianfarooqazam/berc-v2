import { useEffect, useState } from 'react';
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
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <img src={introGif} alt="Intro" />
        </div>
      ) : (
        <div>
          <Navbar />
          <div id="home"><Home /></div>
          <div id="services"><Services /></div>
          <div id="news-events"><NewsEvents /></div>
          <div id="team"><Team /></div>
          <div id="gallery"><Gallery /></div>
          <div id="about-us"><AboutUs /></div>
          <div id="our-impact"><OurImpact /></div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
