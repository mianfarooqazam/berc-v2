import bercLogo from '../assets/general/berc-logo.jpeg';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-4 py-2">
      <img src={bercLogo} alt="BERC Logo" className="h-10 w-auto" />
      <div className="flex space-x-4">
        {['Home', 'About Us', 'Services', 'Tools', 'Our Impact', 'News Events', 'Team', 'Gallery'].map((link) => (
          <button
            key={link}
            className="text-gray-700 hover:text-blue-500"
            onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
