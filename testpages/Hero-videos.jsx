import React from "react";

const Hero = () => {

  const cells = [
    // [type, src, gridColumn, gridRow, animation]
    { type: "video", src: "/videos/1.mp4", col: "1",     row: "1 / 3" },
    { type: "video", src: "/videos/2.mp4", col: "2 / 4", row: "1"     },
    { type: "video", src: "/videos/3.mp4", col: "4",     row: "1"     },
    { type: "video", src: "/videos/4.mp4", col: "2",     row: "2"     },
    { type: "video", src: "/videos/5.mp4", col: "3 / 5", row: "2 / 4" },
    { type: "video", src: "/videos/6.mp4", col: "1",     row: "3"     },
    { type: "video", src: "/videos/7.mp4", col: "2 / 4", row: "3"     },
  ];

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden", backgroundColor: "#000" }}>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vid-cell {
          overflow: hidden;
          position: relative;
        }
        .vid-cell video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>

      {/* ── Background Video Collage Grid ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: "3px",
      }}>
        {cells.map((cell, i) => (
          <div
            key={i}
            className="vid-cell"
            style={{ gridColumn: cell.col, gridRow: cell.row }}
          >
            <video
              src={cell.src}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        ))}
      </div>

      {/* ── Dark Overlay ── */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.62)" }} />

      {/* ── Centre vignette ── */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 65% 65% at 50% 55%, rgba(0,0,0,0.5) 0%, transparent 100%)",
      }} />

      {/* ── Hero Text ── */}
      <div style={{
        position: "relative", zIndex: 10,
        height: "100%",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "0 1rem",
        animation: "fadeInUp 1.1s ease forwards",
      }}>
        <div style={{ textAlign: "center", maxWidth: "780px" }}>

          <h2 style={{
            color: "#d1d5db",
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1rem, 2.2vw, 1.5rem)",
            fontWeight: 300,
            marginBottom: "0.5rem",
            letterSpacing: "0.03em",
          }}>
            Welcome to
          </h2>

          <h1 style={{
            color: "#ffffff",
            fontFamily: "Georgia, serif",
            fontSize: "clamp(2.4rem, 7.5vw, 6.2rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            marginBottom: "1.2rem",
            letterSpacing: "-0.01em",
          }}>
            Anna Pharmacy Group
          </h1>

          <p style={{
            color: "#ffffff",
            fontWeight: 700,
            letterSpacing: "0.1em",
            marginBottom: "1rem",
            fontSize: "clamp(0.78rem, 1.3vw, 1rem)",
          }}>
            Investing in Health. Investing in Growth
          </p>

          <p style={{
            color: "#9ca3af",
            fontSize: "clamp(0.78rem, 1.1vw, 0.92rem)",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.75,
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum diam
            tincidunt lacus pretium, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec fermentum diam tincidunt lacus pretium,
          </p>

        </div>
      </div>

    </div>
  );
};

export default Hero;
