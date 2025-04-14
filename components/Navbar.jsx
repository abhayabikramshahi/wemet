import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from '../src/upload/unnamed.png';

const navItems = ["Home", "FAQ", "Apps", "API", "Moderation"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full px-4 md:px-8 py-4 flex justify-between items-center bg-black/90 backdrop-blur-md border-b border-blue-500/20 shadow-lg fixed top-0 z-50">

      {/* Left Section (Logo + Nav Items) */}
      <div className="flex items-center gap-6">
        <img
          src={Logo}
          alt="Logo"
          className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full"
        />

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex gap-5 text-blue-400">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `relative cursor-pointer hover:text-blue-300 transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? "text-blue-300 font-semibold border-b-2 border-blue-400 pb-1 animate-pulse"
                    : "hover:border-b-2 hover:border-blue-400/50 hover:pb-1"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Right Section (Desktop + Hamburger Icon) */}
      <div className="flex items-center gap-4">
        {/* Desktop Only Right Stuff */}
        <div className="hidden md:flex items-center gap-4">
          {/* Get Started Button */}
          <NavLink
            to="/messages"
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            Get Started
          </NavLink>

          {/* Twitter Icon */}
          <FaTwitter className="text-xl cursor-pointer hover:text-blue-300 transition-all duration-300 transform hover:scale-110 hover:rotate-12" />
        </div>

        {/* Hamburger (Mobile Only) */}
        <div className="md:hidden text-blue-400">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md border-t border-blue-500/20 z-40 flex flex-col md:hidden px-6 pb-4"
          >
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="py-2 text-blue-300 border-b border-blue-500/10 hover:text-blue-400 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </NavLink>
            ))}

            <NavLink
              to="/messages"
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full text-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
            >
              Get Started
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
