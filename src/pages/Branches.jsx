import React, { useState } from "react";

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

const BranchCard = ({ branch }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        overflow: "hidden",         
        position: "relative",
        cursor: "pointer",
        transition: "transform 0.5s ease, box-shadow 0.5s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0px)",
        boxShadow: hovered
          ? "0 20px 40px rgba(0,0,0,0.15)"
          : "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      {/* ── STATIC LAYER: image + white text (always rendered) ── */}
      <div>
        {/* Gray image box */}
        <div style={{ height: "200px", backgroundColor: "#707070", position: "relative" }}>
          <span style={{
            position: "absolute", top: 14, left: 0, right: 0,
            textAlign: "center", color: "#bbb", fontSize: 12,
            letterSpacing: "0.05em", zIndex: 1,
          }}></span>
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

        {/* White text below image */}
        <div className="p-8 bg-white">
          <h3 className="text-xl md:text-[28px] md:leading-8 text-black mb-4">
            {branch.name}
          </h3>
          {branch.address.map((l, i) => (
            <p className="text-[15px] text-black font-normal" key={i}>{l}</p>
          ))}
        </div>
      </div>

      {/* ── SLIDE LAYER: green panel slides from bottom to top over entire card ── */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,   /* covers full card */
          backgroundColor: "#2e7d32",
          padding: "22px 22px 20px 22px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflowY: "auto",
          /* slide: starts at 100% (below card) → 0% (fully visible) */
          transform: hovered ? "translateY(0%)" : "translateY(100%)",
          transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <h3 className="text-xl md:text-[28px] md:leading-8 text-white mb-4">
          {branch.name}
        </h3>
        {branch.address.map((l, i) => (
          <p key={i} style={{ color: "#c8e6c9", fontSize: 13, lineHeight: 1.6 }}>{l}</p>
        ))}
        <div style={{ marginTop: 10 }}>
          <p style={{ color: "#c8e6c9", fontSize: 13 }}>
            <strong style={{ color: "#fff" }}>E. </strong>{branch.email}
          </p>
          <p style={{ color: "#c8e6c9", fontSize: 13 }}>
            <strong style={{ color: "#fff" }}>T. </strong>{branch.phone}
          </p>
        </div>
        <div style={{ marginTop: 10 }}>
          <p style={{ color: "#fff", fontSize: 12, fontWeight: 700, marginBottom: 4 }}>Business Hours</p>
          {branch.hours.map((l, i) => (
            <p key={i} style={{ color: "#c8e6c9", fontSize: 12, lineHeight: 1.6 }}>{l}</p>
          ))}
        </div>
        <a
          href={branch.website}
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "inline-block", marginTop: 14,
            backgroundColor: "#111", color: "#fff",
            fontSize: 11, fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "10px 18px", borderRadius: 4,
            textDecoration: "none", alignSelf: "flex-start",
          }}
        >
          VISIT WEBSITE
        </a>
      </div>
    </div>
  );
};

export default function Branches() {
  return (
    <main style={{ backgroundColor: "#fff", fontFamily: "sans-serif", minHeight: "100vh" }}>

      {/* Hero */}
       <section className="bg-[#3a3a3a] h-[200px] md:h-[470px] overflow-hidden relative">
        <p className="h-[200px] md:h-full"><img src="/images/about-main-banner.jpg" alt="About Us" className="w-full h-full object-cover opacity-20" /></p>
        <div className ="h-[60px] md:h-[470px] flex items-center flex-row w-full px-6 md:px-12 absolute top-[120px] md:top-0 md:bg-black/70">
        <h1 className="text-4xl md:text-[65px] text-white font-light" >
          Branches
        </h1></div>
      </section>

      {/* Cards */}
      <section className="py-[65px]">
        <div class="mx-6 md:w-[1260px] md:mx-auto"> 
        <h2 className="text-3xl md:text-5xl font-light text-black mb-14 leading-snug text-center"> A <span className="font-bold">Growing</span> Network</h2>
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((b) => <BranchCard key={b.id} branch={b} />)}
        </div>
        </div>
      </section>

       

    </main>
  );
}
