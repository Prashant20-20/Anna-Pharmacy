import React, { useState, useEffect, useRef } from "react";

const branches = [
  { id: 1, name: "Anna Pharmacy Hackbridge", address: ["186 London Road", "Hackbridge", "SM6 7FW"], email: "info@annapharmacy.com", phone: "020 8640 0404", hours: ["Monday to Friday: 9am–6:30pm", "Saturday: 9am–1pm", "Sunday Closed"], website: "#", image: "/images/branch-hackbridge.jpg" },
  { id: 2, name: "Anna Pharmacy Carshalton", address: ["398 Greenwrythe Lane", "Carshalton", "SM5 1JF"], email: "info@annapharmacy.com", phone: "020 8640 0404", hours: ["Monday to Friday: 9am–6:30pm", "Saturday: 9am–1pm", "Sunday Closed"], website: "#", image: "/images/branch-carshalton.jpg" },
  { id: 3, name: "Anna Pharmacy The Tudor", address: ["107 Wrythe Lane", "Carshalton", "SM5 2RR"], email: "info@annapharmacy.com", phone: "020 8640 0404", hours: ["Monday to Friday: 9am–6:30pm", "Saturday: 9am–1pm", "Sunday Closed"], website: "#", image: "/images/branch-tudor.jpg" },
  { id: 4, name: "Nima Pharmacy Stoneleigh", address: ["56–58 The Broadway", "Stoneleigh", "KT17 2HS"], email: "info@nimapharmacy.com", phone: "020 8640 0404", hours: ["Monday to Friday: 9am–6:30pm", "Saturday: 9am–1pm", "Sunday Closed"], website: "#", image: "/images/branch-stoneleigh.jpg" },
  { id: 5, name: "Nima Pharmacy Richmond", address: ["50 Friars Stile Road", "Richmond", "TW10 6NQ"], email: "info@nimapharmacy.com", phone: "020 8640 0404", hours: ["Monday to Friday: 9am–6:30pm", "Saturday: 9am–1pm", "Sunday Closed"], website: "#", image: "/images/branch-richmond.jpg" },
  { id: 6, name: "Patsons Pharmacy", address: ["66 The Broadway", "Stoneleigh", "KT17 2HS"], email: "info@patsons.com", phone: "020 8640 0404", hours: ["Monday to Friday: 9am–6:30pm", "Saturday: 9am–1pm", "Sunday Closed"], website: "#", image: "/images/branch-patsons.jpg" },
  { id: 7, name: "Townsend Pharmacy", address: ["1 Western Parade", "Reigate", "RH2 8AU"], email: "info@townsend.com", phone: "020 8640 0404", hours: ["Monday to Friday: 9am–6:30pm", "Saturday: 9am–1pm", "Sunday Closed"], website: "#", image: "/images/branch-townsend.jpg" },
  { id: 8, name: "Wonersh Pharmacy", address: ["The Street, Wonersh", "Guildford", "GU5 0PE"], email: "info@wonersh.com", phone: "020 8640 0404", hours: ["Monday to Friday: 9am–6:30pm", "Saturday: 9am–1pm", "Sunday Closed"], website: "#", image: "/images/branch-wonersh.jpg" },
  { id: 9, name: "Round The Clock Pharmacy", address: ["69 Church Road", "Barnes", "SW13 9HH"], email: "info@roundtheclock.com", phone: "020 8640 0404", hours: ["Monday to Friday: 9am–6:30pm", "Saturday: 9am–1pm", "Sunday Closed"], website: "#", image: "/images/branch-roundtheclock.jpg" },
];

const BranchCard = ({ branch, index }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("card-in-view"), index * 90);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="card-animate"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 20px 40px rgba(0,0,0,0.15)"
          : "0 2px 10px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.4s ease",
      }}
    >
      {/* Static layer */}
      <div>
        <div style={{ height: "200px", backgroundColor: "#707070", position: "relative" }}>
          <img
            src={branch.image}
            alt={branch.name}
            style={{
              position: "absolute", inset: 0, top: 15,
              width: "100%", height: "100%",
              objectFit: "cover", zIndex: 2,
            }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
        <div className="p-8 bg-white">
          <h3 className="text-xl md:text-[28px] font-bold md:leading-8 text-black mb-4">
            {branch.name}
          </h3>
          {branch.address.map((l, i) => (
            <p className="text-[15px] text-black font-normal" key={i}>{l}</p>
          ))}
        </div>
      </div>

      {/* ── Green overlay: bottom → top via translateY ── */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "#2e7d32",
          padding: "22px 30px 20px 30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflowY: "auto",
          transform: hovered ? "translateY(0%)" : "translateY(100%)",
          transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <h3 className="text-xl md:text-[28px] font-bold md:leading-8 text-white mb-4">
          {branch.name}
        </h3>
        {branch.address.map((l, i) => (
          <p key={i} style={{ color: "#c8e6c9", fontSize: 15, lineHeight: 1.5 }}>{l}</p>
        ))}
        <div style={{ marginTop: 10 }}>
          <p style={{ color: "#c8e6c9", fontSize: 15 }}>
            <strong style={{ color: "#fff" }}>E. </strong>{branch.email}
          </p>
          <p style={{ color: "#c8e6c9", fontSize: 15 }}>
            <strong style={{ color: "#fff" }}>T. </strong>{branch.phone}
          </p>
        </div>
        <div style={{ marginTop: 10 }}>
          <p style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Business Hours</p>
          {branch.hours.map((l, i) => (
            <p key={i} style={{ color: "#c8e6c9", fontSize: 15, lineHeight: 1.5 }}>{l}</p>
          ))}
        </div>
        <a
  href={branch.website}
  onClick={(e) => e.stopPropagation()}
  className="btn-visit"
  style={{
    position: "relative",
    display: "inline-block",
    marginTop: 14,
    backgroundColor: "#000",
    color: "#fff",
    fontSize: 15,
    fontWeight: 400,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    padding: "10px 18px",
    borderRadius: 4,
    textDecoration: "none",
    alignSelf: "flex-start",
  }}
>
  <style>{`
    .btn-visit { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1); }
    .btn-visit:hover { transform: translateY(-3px); }
    .btn-visit:active { transform: translateY(0) scale(0.97); }

    .btn-visit::before {
      content: "";
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 2px;
      background: white;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.35s cubic-bezier(0.22,1,0.36,1) 0s;
      border-radius: 4px 4px 0 0;
    }
    .btn-visit::after {
      content: "";
      position: absolute;
      bottom: 0; right: 0;
      width: 100%; height: 2px;
      background: white;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.35s cubic-bezier(0.22,1,0.36,1) 0s;
      border-radius: 0 0 4px 4px;
    }
    .btn-visit:hover::before,
    .btn-visit:hover::after { transform: scaleX(1); }

    .btn-visit .b-left {
      position: absolute;
      left: 0; top: 0;
      width: 2px; height: 100%;
      background: white;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.3s cubic-bezier(0.22,1,0.36,1) 0.18s;
      border-radius: 4px 0 0 4px;
    }
    .btn-visit .b-right {
      position: absolute;
      right: 0; bottom: 0;
      width: 2px; height: 100%;
      background: white;
      transform: scaleY(0);
      transform-origin: bottom;
      transition: transform 0.3s cubic-bezier(0.22,1,0.36,1) 0.18s;
      border-radius: 0 4px 4px 0;
    }
    .btn-visit:hover .b-left,
    .btn-visit:hover .b-right { transform: scaleY(1); }

    .btn-visit .btn-text { position: relative; z-index: 1; }
  `}</style>

  <span className="b-left" />
  <span className="b-right" />
  <span className="btn-text">VISIT WEBSITE</span>
</a>
      </div>
    </div>
  );
};

export default function Branches() {
  return (
    <>
      {/* Global animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .hero-title {
          opacity: 0;
          animation: heroFadeIn 0.7s ease forwards 0.15s;
        }
        .section-heading {
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards 0.3s;
        }
        .card-animate {
          opacity: 0;
          transform: translateY(40px);
        }
        .card-in-view {
          animation: fadeInUp 0.55s ease forwards;
        }
      `}</style>

      <main style={{ backgroundColor: "#fff", fontFamily: "sans-serif", minHeight: "100vh" }}>

        {/* Hero */}
        <section className="bg-[#3a3a3a] h-[200px] md:h-[470px] overflow-hidden relative">
          <p className="h-[200px] md:h-full">
            <img src="/images/about-main-banner.jpg" alt="About Us" className="w-full h-full object-cover opacity-20" />
          </p>
          <div className="h-[60px] md:h-[470px] flex items-center flex-row w-full px-6 md:px-12 absolute top-[120px] md:top-0 md:bg-black/70">
            <h1 className="text-4xl md:text-[65px] text-white font-light hero-title">
              Branches
            </h1>
          </div>
        </section>

        {/* Cards */}
        <section className="py-[65px]">
          <div className="sm:mx-6 md:w-[1260px] md:mx-auto">
            <h2 className="text-3xl md:text-5xl font-light text-black mb-14 leading-snug text-center section-heading">
              A <span className="font-bold">Growing</span> Network
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {branches.map((b, i) => (
                <BranchCard key={b.id} branch={b} index={i} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
