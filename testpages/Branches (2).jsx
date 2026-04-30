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
        overflow: "hidden",         /* clips the sliding green panel */
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
          }}>Pharmacy Image</span>
          <img
            src={branch.image}
            alt={branch.name}
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", zIndex: 2,
            }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>

        {/* White text below image */}
        <div style={{ padding: "14px 10px 20px 10px", backgroundColor: "#fff" }}>
          <h3 style={{
            fontFamily: "Georgia, serif", fontWeight: 700,
            fontSize: 17, color: "#111", lineHeight: 1.3, marginBottom: 5,
          }}>
            {branch.name}
          </h3>
          {branch.address.map((l, i) => (
            <p key={i} style={{ color: "#888", fontSize: 13, lineHeight: 1.5 }}>{l}</p>
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
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p style={{ color: "#fff", fontWeight: 700, fontSize: 16, lineHeight: 1.3, marginBottom: 10 }}>
          {branch.name}
        </p>
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
      <section style={{ backgroundColor: "#6b6b6b", padding: "48px 80px 64px", position: "relative" }}>
        <div style={{
          position: "absolute", left: "33%", top: 32, bottom: 32,
          width: 1, backgroundColor: "rgba(255,255,255,0.15)",
        }} />
        <h1 style={{
          fontFamily: "Georgia, serif", fontWeight: 700,
          fontSize: "clamp(3rem,7vw,5rem)", color: "#fff", marginTop: 24,
        }}>Branches</h1>
        <p style={{
          position: "absolute", bottom: 24, right: 32,
          color: "#ccc", fontSize: 11, letterSpacing: "0.15em",
        }}>Pharmacy background</p>
      </section>

      {/* Cards */}
      <section style={{ padding: "64px 80px 96px" }}>
        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.8rem,4vw,2.5rem)",
          textAlign: "center", marginBottom: 48, color: "#111",
        }}>
          A <strong>Growing</strong> Network
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 32,
        }}>
          {branches.map((b) => <BranchCard key={b.id} branch={b} />)}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: "#111", padding: "48px 16px",
        display: "flex", flexDirection: "column", alignItems: "center",
      }}>
        <div style={{ display: "flex", alignItems: "flex-end", marginBottom: 8 }}>
          {["a","p"].map((l) => (
            <span key={l} style={{
              fontFamily: "Georgia,serif", fontSize: "2.4rem",
              color: "#fff", fontWeight: 300, lineHeight: 1,
            }}>{l}</span>
          ))}
          <div style={{
            position: "relative", width: "2.8rem", height: "2.8rem",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg viewBox="0 0 40 40" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              <circle cx="20" cy="20" r="17" stroke="#22c55e" strokeWidth="2" fill="none" />
            </svg>
            <span style={{
              fontFamily: "Georgia,serif", fontSize: "2.4rem",
              color: "#fff", fontWeight: 300, lineHeight: 1,
              position: "relative", zIndex: 1,
            }}>g</span>
          </div>
          <span style={{ color: "#22c55e", fontWeight: 700, fontSize: "1.5rem", marginBottom: "1rem", marginLeft: 2 }}>+</span>
        </div>
        <p style={{ color: "#555", fontSize: "0.5rem", letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 32 }}>
          ANNA PHARMACY GROUP
        </p>
        <p style={{ color: "#555", fontSize: 12 }}>© 2026 Anna Pharmacy. All rights reserved. Created by Haarty Hanks</p>
      </footer>

    </main>
  );
}
