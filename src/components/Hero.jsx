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
<div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_65%_at_50%_55%,rgba(0,0,0,0.5)_0%,transparent_100%)]" />

{/* ── Hero Text ── */}
<div className="relative z-10 h-full flex items-center justify-center px-4 animate-fade-in-up">
  <div className="text-center max-w-3xl">

    <h2 className="text-white text-center text-5xl md:text-[60px] font-extralight md:leading-[66px]">
      Welcome to
    </h2>

    <h1 className="text-white text-center text-5xl md:text-[80px] font-extralight leading-[54px] md:leading-[80px] mb-8">
      Anna Pharmacy Group
    </h1>

    <p className="text-white text-base md:text-[18px] font-bold leading-[22px] mb-4">
      Investing in Health. Investing in Growth
    </p>

    <p className="text-white text-sm text-[15px] font-normal leading-[22px]">
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
