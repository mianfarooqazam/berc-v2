import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/general/berc-wh.png";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#026EB5] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center space-y-4 md:space-y-0">
          {/* Logo Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img src={logo} alt="BERC Logo" className="h-24 mr-4" />
          </div>

          {/* Newsletter Sign-up Section */}
          <div className="w-full md:w-1/2 text-center">
            <h6 className="text-lg font-bold">Subscribe for Updates</h6>
            <form className="mt-4 flex justify-center items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded w-2/3 bg-white text-black focus:outline-none"
              />
              <button className="px-4 py-2 bg-white text-[#026EB5] font-semibold rounded hover:bg-[#026EB5] hover:text-white transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-white my-6" />

        {/* Contact Information and Map Side by Side */}
        <div className="flex flex-wrap md:flex-nowrap items-start gap-4 mt-8">
          {/* Contact Info */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold">Contact Information:</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-2xl mr-4"
                />
                <p className="text-base font-light">
                  CISNR New Academic Block, Basement, UET, Peshawar, Khyber
                  Pakhtunkhwa 25125
                </p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl mr-4" />
                <p className="text-base font-light">Email: info@berc.pk</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-2xl mr-4" />
                <p className="text-base font-light">Phone: +92-91-9222104</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-1/2 h-64 rounded overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.576141560076!2d71.48336697515295!3d34.00169397941384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzA2LjEiTiA3McKwMjknMDguMCJF!5e0!3m2!1sen!2s!4v1691049437619!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Links in Horizontal Line */}
        <div className="flex justify-center mt-8 space-x-6">
          {[
            "Home",
            "About Us",
            "Services",
            "Tools",
            "Our Impact",
            "Contact",
          ].map((link) => (
            <button
              key={link}
              onClick={() =>
                scrollToSection(link.toLowerCase().replace(" ", "-"))
              }
              className="text-white hover:underline hover:underline-offset-4 transition"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Follow Us Section */}
        <div className="flex justify-center mt-8 space-x-4">
          <a
            href="https://www.facebook.com/people/Buildings-Energy-Research-Center/61557251373408/"
            className="hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/company/buildings-energy-research-center/"
            className="hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://www.youtube.com/" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} BERC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
