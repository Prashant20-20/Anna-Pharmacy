import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const STYLES = `
  @keyframes navFadeDown {
    from { opacity: 0; transform: translateY(-18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes logoSlideIn {
    from { opacity: 0; transform: translateX(-24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes navLinkFadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes flipInLeft {
    from { opacity: 0; transform: rotateY(-90deg); }
    to   { opacity: 1; transform: rotateY(0deg); }
  }

  .nav-bar-animated {
    animation: navFadeDown 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
  }
  .nav-logo-animated {
    opacity: 0;
    animation: logoSlideIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s forwards;
  }

  .nav-link-item { opacity: 0; }
  .nav-link-item:nth-child(1) { animation: navLinkFadeUp 0.5s cubic-bezier(0.22,1,0.36,1) 0.25s forwards; }
  .nav-link-item:nth-child(2) { animation: navLinkFadeUp 0.5s cubic-bezier(0.22,1,0.36,1) 0.35s forwards; }
  .nav-link-item:nth-child(3) { animation: navLinkFadeUp 0.5s cubic-bezier(0.22,1,0.36,1) 0.45s forwards; }
  .nav-link-item:nth-child(4) { animation: navLinkFadeUp 0.5s cubic-bezier(0.22,1,0.36,1) 0.55s forwards; }

  .nav-desktop-link {
    position: relative;
    transition: color 0.25s ease, background 0.25s ease;
  }
  .nav-desktop-link::after {
    content: '';
    position: absolute;
    bottom: 4px; left: 12px; right: 12px;
    height: 2px;
    background: #278228;
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
  }
  .nav-desktop-link:not(.active-link):hover::after { transform: scaleX(1); }
  .nav-desktop-link.active-link::after { display: none; }

  /* perspective on container so 3D depth works */
  .mobile-links-wrap { perspective: 500px; }

  .mobile-flip-link {
    display: flex;
    align-items: center;
    padding: 12px 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    margin-bottom: 2px;
    opacity: 0;
    transform-origin: left center;
    transition: background 0.22s ease, color 0.22s ease;
  }
  .mobile-flip-link:hover { background: rgba(255,255,255,0.07); }
  .mobile-flip-link.active-mobile { background: #278228; }

  .flip-open-1 { animation: flipInLeft 0.42s cubic-bezier(0.22,1,0.36,1) 0.05s forwards; }
  .flip-open-2 { animation: flipInLeft 0.42s cubic-bezier(0.22,1,0.36,1) 0.13s forwards; }
  .flip-open-3 { animation: flipInLeft 0.42s cubic-bezier(0.22,1,0.36,1) 0.21s forwards; }
  .flip-open-4 { animation: flipInLeft 0.42s cubic-bezier(0.22,1,0.36,1) 0.29s forwards; }
`;

const NAV_ITEMS = [
  { to: "/",         label: "Home" },
  { to: "/about",    label: "About Us" },
  { to: "/branches", label: "Branches" },
  { to: "/contact",  label: "Contact Us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [flipKey, setFlipKey] = useState(0);

  useEffect(() => {
    if (document.getElementById("navbar-anim-styles")) return;
    const tag = document.createElement("style");
    tag.id = "navbar-anim-styles";
    tag.textContent = STYLES;
    document.head.appendChild(tag);
  }, []);

  const handleOpen = () => {
    const next = !open;
    setOpen(next);
    /* bump key every time drawer opens so flipInLeft re-triggers */
    if (next) setFlipKey(k => k + 1);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 nav-bar-animated">

      <div className="flex items-center justify-between px-6 md:px-12 py-4 bg-black/0">

        {/* Logo */}
        <div className="flex items-center p-2 nav-logo-animated">
          <Link to="/"><img src="/logo.svg" alt="Logo" className="w-[140px] md:w-[170px] !outline-none" /></Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium tracking-[1.69px] text-white items-center">
          {NAV_ITEMS.map(({ to, label }) => (
            <li key={to} className="nav-link-item">
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `nav-desktop-link px-3 py-1.5 rounded-[5px] uppercase block !outline-none ${
                    isActive ? "active-link bg-[#278228] text-white" : "hover:text-green-400"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          onClick={handleOpen}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer relative z-[60]"
        >
          <span className="absolute w-6 h-[2px] bg-white" style={{
            transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
            transform: open ? "translateY(0) rotate(45deg)" : "translateY(-8px)",
          }} />
          <span className="absolute w-6 h-[2px] bg-white" style={{
            transition: "opacity 0.25s ease, transform 0.25s ease",
            opacity: open ? 0 : 1,
            transform: open ? "scaleX(0)" : "scaleX(1)",
          }} />
          <span className="absolute w-6 h-[2px] bg-white" style={{
            transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
            transform: open ? "translateY(0) rotate(-45deg)" : "translateY(8px)",
          }} />
        </div>
      </div>

      {/* Backdrop — bg-black/70 + backdrop-blur-sm for clear menu visibility */}
      <div
        onClick={() => setOpen(false)}
        className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-40 h-screen"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Mobile Drawer */}
      <div
        className="md:hidden fixed top-0 left-0 h-full w-full bg-black/95 backdrop-blur-md text-white z-50"
        style={{
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.38s cubic-bezier(0.22,1,0.36,1)",
          boxShadow: open ? "4px 0 24px rgba(0,0,0,0.4)" : "none",
        }}
      >
        {/* Logo inside drawer */}
        <div className="px-6 pt-6 pb-4 border-b border-white/10">
          <img src="/logo.svg" alt="Logo" className="w-[140px]" />
        </div>

        {/* 3D Flip Links — key changes every open so animation re-runs */}
        <div className="mobile-links-wrap px-4 py-5">
          {NAV_ITEMS.map(({ to, label }, i) => (
            <NavLink
              key={`${to}-${flipKey}`}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `mobile-flip-link flip-open-${i + 1} ${isActive ? "active-mobile" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
