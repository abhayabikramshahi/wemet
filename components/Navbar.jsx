import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../src/context/LanguageContext";

const languages = [
  { code: "en", name: "English" },
  { code: "ne", name: "नेपाली" },
  { code: "es", name: "Español" },
  { code: "am", name: "አማርኛ" },
  { code: "ja", name: "日本語" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLanguage") || currentLanguage;
    const lang = languages.find((l) => l.code === savedLang) || languages[0];
    setSelectedLang(lang);
  }, [currentLanguage]);

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
    changeLanguage(lang.code);
  };

  const navItems = ["Home", "FAQ", "Apps", "API", "Moderation"];

  return (
    <div className="w-full p-4 px-6 md:px-8 flex justify-between items-center bg-black/90 backdrop-blur-md border-b border-blue-500/20 shadow-lg fixed top-0 z-50">
      {/* Logo or site name can go here if needed */}

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-blue-400">
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

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden text-blue-400">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Right Section (Same for both) */}
      <div className="hidden md:flex items-center gap-4">
        <NavLink
          to="/messages"
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20"
        >
          Get Started
        </NavLink>

        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer hover:text-blue-300 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdLanguage className="text-xl hover:rotate-12 transition-transform duration-300" />
            <span className="flex items-center gap-1">
              {selectedLang.code.toUpperCase()}
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                ▼
              </motion.span>
            </span>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl border border-blue-500/20 overflow-hidden"
              >
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang)}
                    className={`px-4 py-2 cursor-pointer transition-colors duration-200 ${
                      selectedLang.code === lang.code
                        ? "bg-blue-500/20 text-blue-300"
                        : "hover:bg-gray-800 text-gray-300 hover:text-blue-300"
                    }`}
                  >
                    {lang.name}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <FaTwitter className="text-xl cursor-pointer hover:text-blue-300 transition-all duration-300 transform hover:scale-110 hover:rotate-12" />
      </div>

      {/* Mobile Menu Dropdown */}
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
