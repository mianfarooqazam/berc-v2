// src/pages/Services.jsx
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const horizontal = horizontalRef.current;
    const container = containerRef.current;

    let tween; // Variable to store the GSAP tween

    const updateAnimation = () => {
      const totalWidth = horizontal.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      // Set the container height to be the scroll distance
      gsap.set(container, { height: scrollDistance });

      // Kill any existing animation and its ScrollTrigger
      if (tween) {
        tween.kill();
        tween.scrollTrigger && tween.scrollTrigger.kill();
      }

      // Create a new horizontal scrolling animation
      tween = gsap.to(horizontal, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          pin: true,
          pinSpacing: false, // Prevent extra space from being added
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Refresh ScrollTrigger in case content sizes have changed
      ScrollTrigger.refresh();
    };

    // Initialize the animation
    updateAnimation();

    // Update animation on window resize
    window.addEventListener('resize', updateAnimation);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', updateAnimation);
      // Kill the tween and its ScrollTrigger
      if (tween) {
        tween.kill();
        tween.scrollTrigger && tween.scrollTrigger.kill();
      }
    };
  }, []);

  const services = [
    { title: 'Service 1', description: 'Description for Service 1', bgColor: 'bg-blue-500' },
    { title: 'Service 2', description: 'Description for Service 2', bgColor: 'bg-green-500' },
    { title: 'Service 3', description: 'Description for Service 3', bgColor: 'bg-red-500' },
    { title: 'Service 4', description: 'Description for Service 4', bgColor: 'bg-purple-500' },
  ];

  return (
    <section ref={containerRef} id="services" className="relative w-full overflow-hidden">
      <div ref={horizontalRef} className="flex h-screen">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center ${service.bgColor} text-white`}
          >
            <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg px-4 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
