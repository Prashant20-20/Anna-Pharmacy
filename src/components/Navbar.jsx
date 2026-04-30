import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50">

      <div className="flex items-center justify-between px-6 md:px-12 py-4 bg-black/0">

        {/* Logo */}
        <div className="flex items-center p-2">
          <img
            src="/logo.webp"
            alt="Logo"
            className="w-[120px] md:w-[159px]"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium tracking-[1.69px] text-white items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#278228] px-3 py-1.5 rounded-[5px] uppercase"
                  : "px-3 py-1.5 hover:bg-[#278228] hover:text-white rounded-[5px] uppercase"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="px-3 py-1.5 uppercase rounded-[5px] hover:bg-[#278228] hover:text-white">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/branches" className="px-3 py-1.5 uppercase rounded-[5px] hover:bg-[#278228] hover:text-white">
              Branches
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="px-3 py-1.5 uppercase rounded-[5px] hover:bg-[#278228] hover:text-white">
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Hamburger (Animated) */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer relative z-[60]"
        >
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300
            ${open ? "rotate-45" : "-translate-y-2"}`}
          ></span>
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300
            ${open ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300
            ${open ? "-rotate-45" : "translate-y-2"}`}
          ></span>
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 z-40
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Mobile Slide Menu — left se right */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-black/95 backdrop-blur-md text-white z-50
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
      

        {/* Menu Links */}
        <div className="flex flex-col gap-1 px-4 py-6 text-sm">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200
              ${isActive ? "bg-green-500 text-white" : "hover:bg-white/10"}`
            }
          >HOME
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200
              ${isActive ? "bg-green-500 text-white" : "hover:bg-white/10"}`
            }
          >ABOUT US
          </NavLink>

          <NavLink
            to="/branches"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200
              ${isActive ? "bg-green-500 text-white" : "hover:bg-white/10"}`
            }
          >BRANCHES
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200
              ${isActive ? "bg-green-500 text-white" : "hover:bg-white/10"}`
            }
          >CONTACT US
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
