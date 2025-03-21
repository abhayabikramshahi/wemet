import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-full p-4 px-8 flex justify-between items-center bg-white border-b border-gray-200 shadow-sm">
      {/* Left Navigation Links */}
      <nav className="flex gap-6 text-blue-600">
        {["Home", "FAQ", "Apps", "API", "Moderation"].map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `relative cursor-pointer hover:font-semibold ${
                isActive ? "font-semibold border-b-2 border-blue-600 pb-1" : ""
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>

      {/* Right Side (Icons) */}
      <div className="flex items-center gap-4 text-blue-600">
        <MdLanguage className="text-xl cursor-pointer" />
        <span className="cursor-pointer">EN ▼</span>
        <FaTwitter className="text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
