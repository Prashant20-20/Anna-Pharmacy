import { useState, useEffect } from "react";

const APGLogo = () => (
  <div className="flex flex-col items-start select-none">
    <div className="flex items-end leading-none">
      <span
        className="text-white font-light"
        style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", lineHeight: 1 }}
      >
        a
      </span>
      <span
        className="text-white font-light"
        style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", lineHeight: 1 }}
      >
        p
      </span>
      {/* 'g' with green circle */}
      <div className="relative flex items-center justify-center" style={{ width: "2.5rem", height: "2.5rem" }}>
        <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full">
          <circle cx="20" cy="20" r="18" stroke="#22c55e" strokeWidth="2" fill="none" />
        </svg>
        <span
          className="text-white font-light relative z-10"
          style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", lineHeight: 1 }}
        >
          g
        </span>
      </div>
      {/* Green plus */}
      <span
        className="text-green-400 font-bold ml-0.5"
        style={{ fontSize: "1.5rem", lineHeight: 1, marginBottom: "1.1rem" }}
      >
        +
      </span>
    </div>
    <span
      className="text-white font-light tracking-widest"
      style={{ fontSize: "0.47rem", letterSpacing: "0.25em", marginTop: "2px" }}
    >
      ANNA PHARMACY GROUP
    </span>
  </div>
);

const PharmacyBackground = () => {
  const images = [
    "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=500&q=70",
    "https://images.unsplash.com/photo-1583912267550-d974f5f5bed8?w=500&q=70",
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&q=70",
    "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&q=70",
    "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=500&q=70",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=70",
    "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=500&q=70",
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&q=70",
  ];
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="grid grid-cols-4 grid-rows-2 w-full h-full gap-px">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden">
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.33) saturate(0.5)" }}
            />
          </div>
        ))}
      </div>
      {/* centre vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 62% 62% at 50% 50%, rgba(0,0,0,0.58) 0%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-black/28" />
    </div>
  );
};

export default function AnnaPharmacyGroup() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const navLinks = ["HOME", "ABOUT US", "BRANCHES", "CONTACT US"];

  return (
    <section className="relative w-full h-screen min-h-[560px] bg-black overflow-hidden flex flex-col">
      <PharmacyBackground />

      {/* ── NAVBAR ── */}
      <nav className="relative z-30 flex items-center justify-between px-6 md:px-10 pt-5 pb-2">
        <APGLogo />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((label, i) => (
            <a
              key={label}
              href="#"
              className={`px-4 py-[7px] text-[11px] font-medium tracking-[0.13em] rounded-sm transition-all duration-150 ${
                i === 0
                  ? "bg-green-500 text-white hover:bg-green-400"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="flex flex-col justify-center gap-[5px] p-2 z-50"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block bg-white transition-all duration-300"
              style={{
                width: "22px",
                height: "1.5px",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4.5px, 4.5px)"
                      : i === 2
                      ? "rotate(-45deg) translate(4.5px, -4.5px)"
                      : "scaleX(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute inset-0 z-20 bg-black/95 flex flex-col items-center justify-center transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((label, i) => (
          <a
            key={label}
            href="#"
            onClick={() => setMenuOpen(false)}
            className={`py-4 text-xl tracking-[0.2em] font-light ${
              i === 0 ? "text-green-400" : "text-white/80 hover:text-white"
            }`}
          >
            {label}
          </a>
        ))}
      </div>

      {/* ── HERO CONTENT ── */}
      <div
        className={`relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p
          className="text-white font-light mb-2"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1rem, 2.2vw, 1.5rem)",
          }}
        >
          Welcome to
        </p>

        <h1
          className="text-white font-light leading-none mb-6"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(2.6rem, 7.5vw, 6.8rem)",
            letterSpacing: "-0.01em",
          }}
        >
          Anna Pharmacy Group
        </h1>

        <p
          className="text-white font-bold tracking-widest mb-5"
          style={{ fontSize: "clamp(0.78rem, 1.3vw, 1rem)", letterSpacing: "0.08em" }}
        >
          Investing in Health. Investing in Growth
        </p>

        <p
          className="text-white/75 leading-relaxed max-w-lg"
          style={{ fontSize: "clamp(0.78rem, 1.1vw, 0.92rem)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum diam
          tincidunt lacus pretium, Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <br className="hidden md:block" />
          Donec fermentum diam tincidunt lacus pretium,
        </p>
      </div>
    </section>
  );
}
