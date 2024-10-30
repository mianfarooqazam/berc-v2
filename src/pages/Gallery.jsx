import { forwardRef } from 'react';

const Gallery = forwardRef((props, ref) => (
  <section ref={ref} id="home" className="flex flex-col items-center justify-center h-screen bg-blue-600 text-white">
    <h1 className="text-5xl font-bold mb-4">Gallery to BERC</h1>
    <p className="text-lg">Your trusted partner in building energy research.</p>
  </section>
));

Gallery.displayName = 'GallerySection';

export default Gallery;
