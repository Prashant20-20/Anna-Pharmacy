import React, { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const bgLayerRef = useRef(null);
  const textLayerRef = useRef(null);

  useEffect(() => {
    const cells = heroRef.current?.querySelectorAll(".cell");
    cells?.forEach((cell) => {
      const delay = parseInt(cell.dataset.delay) || 0;
      setTimeout(() => cell.classList.add("revealed"), 300 + delay);
    });
  }, []);

  useEffect(() => {
    const layer = document.getElementById("particles-layer");
    if (!layer) return;
    for (let i = 0; i < 22; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const size = 1.5 + Math.random() * 3;
      const dur  = 6   + Math.random() * 10;
      const del  = Math.random() * dur;
      const drift = (Math.random() - 0.5) * 120;
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${size}px; height: ${size}px;
        --drift: ${drift}px;
        animation-duration: ${dur}s;
        animation-delay: -${del}s;
        opacity: ${0.3 + Math.random() * 0.5};
      `;
      layer.appendChild(p);
    }
    return () => { if (layer) layer.innerHTML = ""; };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const dx = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
      const dy = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
      if (bgLayerRef.current)
        bgLayerRef.current.style.transform = `translate(${dx * 12}px, ${dy * 8}px)`;
      if (textLayerRef.current)
        textLayerRef.current.style.transform = `translate(${dx * -6}px, ${dy * -4}px)`;
    };
    const onLeave = () => {
      [bgLayerRef, textLayerRef].forEach(r => {
        if (r.current) {
          r.current.style.transition = "transform 0.6s ease-out";
          r.current.style.transform  = "translate(0,0)";
        }
      });
      setTimeout(() => {
        [bgLayerRef, textLayerRef].forEach(r => {
          if (r.current) r.current.style.transition = "transform 0.12s ease-out";
        });
      }, 600);
    };
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden", backgroundColor: "#000" }}
    >
      <style>{`
        @keyframes slowZoom {
          0%,100% { transform: scale(1.08); }
          50%      { transform: scale(1.18); }
        }
        @keyframes panRight {
          0%,100% { transform: scale(1.12) translateX(-4%); }
          50%      { transform: scale(1.12) translateX(4%); }
        }
        @keyframes panLeft {
          0%,100% { transform: scale(1.12) translateX(4%); }
          50%      { transform: scale(1.12) translateX(-4%); }
        }
        @keyframes panUp {
          0%,100% { transform: scale(1.12) translateY(4%); }
          50%      { transform: scale(1.12) translateY(-4%); }
        }
        @keyframes cellReveal {
          from { opacity: 0; transform: scale(1.15); filter: blur(6px); }
          to   { opacity: 1; transform: scale(1);    filter: blur(0); }
        }
        .cell { opacity: 0; overflow: hidden; }
        .cell.revealed { animation: cellReveal 0.9s cubic-bezier(0.22,1,0.36,1) forwards; }

        @keyframes textSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg,
            rgba(255,255,255,0.5) 0%, #fff 30%,
            rgba(255,255,255,0.5) 60%, #fff 80%,
            rgba(255,255,255,0.5) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear 2.2s infinite;
        }
        @keyframes floatParticle {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.1; }
          100% { transform: translateY(-120vh) translateX(var(--drift)) scale(0.3); opacity: 0; }
        }
        .particle {
          position: absolute; bottom: -10px; border-radius: 50%;
          background: rgba(255,255,255,0.7);
          animation: floatParticle linear infinite;
        }
        .parallax-bg, .parallax-text { transition: transform 0.12s ease-out; }
        .img-cell { width: 100%; height: 100%; object-fit: cover; display: block; }
      `}</style>

      {/* ── BG grid layer ── */}
      <div
        ref={bgLayerRef}
        className="parallax-bg"
        style={{ position: "absolute", inset: 0 }}
      >
        <div style={{
          position: "absolute", inset: 0,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: "3px",
        }}>
          {/* Column 1 — 3 separate images */}
          <div className="cell" data-delay="0"   style={{ gridColumn: "1", gridRow: "1" }}>
            <img src="/images/1.jpg" className="img-cell" alt="" style={{ animation: "slowZoom 10s ease-in-out infinite" }} />
          </div>
          <div className="cell" data-delay="150" style={{ gridColumn: "1", gridRow: "2" }}>
            <img src="/images/2.jpg" className="img-cell" alt="" style={{ animation: "panUp 12s ease-in-out infinite", animationDelay: "-3s" }} />
          </div>
          <div className="cell" data-delay="300" style={{ gridColumn: "1", gridRow: "3" }}>
            <img src="/images/3.jpg" className="img-cell" alt="" style={{ animation: "slowZoom 13s ease-in-out infinite", animationDelay: "-6s" }} />
          </div>

          {/* Columns 2-3 — center spanning images */}
          <div className="cell" data-delay="120" style={{ gridColumn: "2 / 4", gridRow: "1" }}>
            <img src="/images/4.jpg" className="img-cell" alt="" style={{ animation: "panRight 14s ease-in-out infinite" }} />
          </div>
          <div className="cell" data-delay="240" style={{ gridColumn: "2 / 4", gridRow: "2" }}>
            <img src="/images/5.jpg" className="img-cell" alt="" style={{ animation: "panLeft 11s ease-in-out infinite", animationDelay: "-4s" }} />
          </div>
          <div className="cell" data-delay="360" style={{ gridColumn: "2 / 4", gridRow: "3" }}>
            <img src="/images/6.jpg" className="img-cell" alt="" style={{ animation: "panRight 15s ease-in-out infinite", animationDelay: "-2s" }} />
          </div>

          {/* Column 4 — 3 separate images */}
          <div className="cell" data-delay="60"  style={{ gridColumn: "4", gridRow: "1" }}>
            <img src="/images/7.jpg" className="img-cell" alt="" style={{ animation: "slowZoom 12s ease-in-out infinite", animationDelay: "-5s" }} />
          </div>
          <div className="cell" data-delay="210" style={{ gridColumn: "4", gridRow: "2" }}>
            <img src="/images/8.jpg" className="img-cell" alt="" style={{ animation: "panUp 16s ease-in-out infinite", animationDelay: "-7s" }} />
          </div>
          <div className="cell" data-delay="420" style={{ gridColumn: "4", gridRow: "3" }}>
            <img src="/images/1.jpg" className="img-cell" alt="" style={{ animation: "slowZoom 11s ease-in-out infinite", animationDelay: "-9s" }} />
          </div>
        </div>
      </div>

      {/* ── Center background image — behind content only ── */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "55%",
        height: "75%",
        zIndex: 1,
        overflow: "hidden",
      }}>
        <img
          src="/images/5.jpg"
          alt=""
          style={{
            width: "100%", height: "100%",
            objectFit: "cover",
            opacity: 0.7,
            animation: "panUp 18s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Dark overlay — same as original screenshot (0.65) ── */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundColor: "rgba(0,0,0,0.65)",
        pointerEvents: "none",
        zIndex: 1,
      }} />

      {/* ── Center vignette — slightly darker in middle to help text readability ── */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,0,0,0.35) 0%, transparent 100%)",
        pointerEvents: "none",
        zIndex: 2,
      }} />

      {/* ── Particles ── */}
      <div
        id="particles-layer"
        style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 3 }}
      />

      {/* ── Text layer — no box, no panel, just text on overlay ── */}
      <div
        ref={textLayerRef}
        className="parallax-text"
        style={{
          position: "absolute", inset: 0,
          zIndex: 10,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "1rem",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "800px" }}>

          <h2 style={{
            color: "#fff",
            fontSize: "clamp(35px, 5vw, 60px)",
            fontWeight: 200,
            lineHeight: 1.1,
            margin: "0 0 4px",
            opacity: 0,
            animation: "textSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) 1.1s forwards",
          }}>
            Welcome to
          </h2>

          <h1 style={{
            color: "#fff",
            fontSize: "clamp(50px, 7vw, 80px)",
            fontWeight: 200,
            lineHeight: 1.1,
            margin: "0 0 20px",
            opacity: 0,
            animation: "textSlideUp 0.9s cubic-bezier(0.22,1,0.36,1) 1.35s forwards",
          }}>
            Anna Pharmacy Group
          </h1>

          <p
            className="shimmer-text"
            style={{
              fontSize: "clamp(17px, 1.5vw, 18px)",
              fontWeight: 700,
              marginBottom: "14px",
              opacity: 0,
              animation: "shimmer 3s linear 2.2s infinite, textSlideUp 0.7s ease 1.85s forwards",
            }}
          >
            Investing in Health. Investing in Growth
          </p>

          <p style={{
            color: "rgba(255,255,255,1)",
            fontSize: "15px",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto",
            opacity: 0,
            animation: "textSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) 2.1s forwards",
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