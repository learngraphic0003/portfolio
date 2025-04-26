import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const linkStyle = "text-white hover:text-blue-500 cursor-pointer";

  return (
    <nav className="bg-black fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12"
            />
            <span className="text-2xl font-bold text-yellow-400">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 font-medium">
            <Link to="hero" smooth={true} duration={500} className={linkStyle}>Home</Link>
            <Link to="about" smooth={true} duration={500} className={linkStyle}>About</Link>
            <Link to="project" smooth={true} duration={500} className={linkStyle}>Projects</Link>
            <Link to="gmail" smooth={true} duration={500} className={linkStyle}>Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black w-full py-6 px-4 flex flex-col space-y-4 items-center transition-all duration-300">
          <Link to="hero" smooth={true} duration={500} onClick={toggleMenu} className="text-white hover:text-blue-500 text-xl">Home</Link>
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu} className="text-white hover:text-blue-500 text-xl">About</Link>
          <Link to="project" smooth={true} duration={500} onClick={toggleMenu} className="text-white hover:text-blue-500 text-xl">Projects</Link>
          <Link to="gmail" smooth={true} duration={500} onClick={toggleMenu} className="text-white hover:text-blue-500 text-xl">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
