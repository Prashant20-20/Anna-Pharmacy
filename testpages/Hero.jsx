import React from "react";

const Hero = () => {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden", backgroundColor: "#000" }}>

      {/* ── Keyframes injected once ── */}
      <style>{`
        @keyframes slowZoom {
          0%,100% { transform: scale(1.08); }
          50%      { transform: scale(1.18); }
        }
        @keyframes panRight {
          0%,100% { transform: scale(1.12) translateX(-4%); }
          50%     { transform: scale(1.12) translateX(4%); }
        }
        @keyframes panLeft {
          0%,100% { transform: scale(1.12) translateX(4%); }
          50%     { transform: scale(1.12) translateX(-4%); }
        }
        @keyframes panUp {
          0%,100% { transform: scale(1.12) translateY(4%); }
          50%     { transform: scale(1.12) translateY(-4%); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .img-cell {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cell { overflow: hidden; }
      `}</style>

      {/* ── Background Collage Grid ── */}
      <div style={{
        position: "absolute", inset: 0,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: "3px",
      }}>

        {/* Cell 1 — col1, row1-2 tall */}
        <div className="cell" style={{ gridColumn: "1", gridRow: "1 / 3" }}>
          <img src="/images/1.jpg" className="img-cell" alt=""
            style={{ animation: "slowZoom 14s ease-in-out infinite" }} />
        </div>

        {/* Cell 2 — col2-3, row1 wide */}
        <div className="cell" style={{ gridColumn: "2 / 4", gridRow: "1" }}>
          <img src="/images/2.jpg" className="img-cell" alt=""
            style={{ animation: "panRight 18s ease-in-out infinite" }} />
        </div>

        {/* Cell 3 — col4, row1 */}
        <div className="cell" style={{ gridColumn: "4", gridRow: "1" }}>
          <img src="/images/3.jpg" className="img-cell" alt=""
            style={{ animation: "slowZoom 16s ease-in-out infinite", animationDelay: "-5s" }} />
        </div>

        {/* Cell 4 — col2, row2 */}
        <div className="cell" style={{ gridColumn: "2", gridRow: "2" }}>
          <img src="/images/4.jpg" className="img-cell" alt=""
            style={{ animation: "panLeft 15s ease-in-out infinite", animationDelay: "-3s" }} />
        </div>

        {/* Cell 5 — col3-4, row2-3 large */}
        <div className="cell" style={{ gridColumn: "3 / 5", gridRow: "2 / 4" }}>
          <img src="/images/5.jpg" className="img-cell" alt=""
            style={{ animation: "panUp 20s ease-in-out infinite", animationDelay: "-7s" }} />
        </div>

        {/* Cell 6 — col1, row3 */}
        <div className="cell" style={{ gridColumn: "1", gridRow: "3" }}>
          <img src="/images/6.jpg" className="img-cell" alt=""
            style={{ animation: "slowZoom 17s ease-in-out infinite", animationDelay: "-9s" }} />
        </div>

        {/* Cell 7 — col2-3, row3 */}
        <div className="cell" style={{ gridColumn: "2 / 4", gridRow: "3" }}>
          <img src="/images/7.jpg" className="img-cell" alt=""
            style={{ animation: "panRight 19s ease-in-out infinite", animationDelay: "-4s" }} />
        </div>

      </div>

      {/* ── Dark Overlay ── */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.65)" }} />

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
