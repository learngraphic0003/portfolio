import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const linkStyle = "text-white hover:text-blue-500 cursor-pointer"; // Common style

  return (
    <nav className="bg-black shadow-md fixed top-0 left-0 w-full z-50 text-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12"
            />
            <span className="text-2xl font-bold text-yellow-400">Portfolio</span>
          </div>

          {/* Desktop Navigation Text */}
          <div className="hidden md:flex space-x-6 font-medium">
            <Link to="hero" smooth={true} duration={500} className={linkStyle}>Home</Link>
            <Link to="about" smooth={true} duration={500} className={linkStyle}>About</Link>
            <Link to="gmail" smooth={true} duration={500} className={linkStyle}> contact</Link>
            <Link to="project" smooth={true} duration={500} className={linkStyle}> Project</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-lg">
          <Link to="home" smooth={true} duration={500} className="block text-gray-700 hover:text-blue-500" onClick={toggleMenu}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="block text-gray-700 hover:text-blue-500" onClick={toggleMenu}>About</Link>
          <Link to="services" smooth={true} duration={500} className="block text-gray-700 hover:text-blue-500" onClick={toggleMenu}>Services</Link>
          <Link to="contact" smooth={true} duration={500} className="block text-gray-700 hover:text-blue-500" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
