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
    if (window.innerWidth < 768) return;

    const layer = document.getElementById("particles-layer");
    if (!layer) return;

    for (let i = 0; i < 12; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const size = 1.5 + Math.random() * 3;
      const dur = 6 + Math.random() * 10;
      const del = Math.random() * dur;
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

    return () => {
      if (layer) layer.innerHTML = "";
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const hero = heroRef.current;
    if (!hero) return;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      if (bgLayerRef.current) {
        bgLayerRef.current.style.transform = `translate(${dx * 12}px, ${dy * 8}px)`;
      }

      if (textLayerRef.current) {
        textLayerRef.current.style.transform = `translate(${dx * -6}px, ${dy * -4}px)`;
      }
    };

    const onLeave = () => {
      [bgLayerRef, textLayerRef].forEach((r) => {
        if (r.current) {
          r.current.style.transition = "transform 0.6s ease-out";
          r.current.style.transform = "translate(0,0)";
        }
      });

      setTimeout(() => {
        [bgLayerRef, textLayerRef].forEach((r) => {
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

  const images = [
    { src: "/collage-img/1.webp", anim: "slowZoom 10s ease-in-out infinite", col: "1", row: "1", delay: 0, priority: true },
    { src: "/collage-img/2.webp", anim: "panRight 14s ease-in-out infinite", col: "2", row: "1", delay: 80 },
    { src: "/collage-img/3.webp", anim: "panLeft 12s ease-in-out infinite", col: "3", row: "1", delay: 160 },
    { src: "/collage-img/4.webp", anim: "slowZoom 12s ease-in-out infinite", animationDelay: "-5s", col: "4", row: "1", delay: 240 },
    { src: "/collage-img/5.webp", anim: "panUp 12s ease-in-out infinite", animationDelay: "-3s", col: "1", row: "2", delay: 320 },
    { src: "/collage-img/6.webp", anim: "slowZoom 11s ease-in-out infinite", animationDelay: "-4s", col: "2", row: "2", delay: 400 },
    { src: "/collage-img/7.webp", anim: "panRight 16s ease-in-out infinite", animationDelay: "-6s", col: "3", row: "2", delay: 480 },
    { src: "/collage-img/8.webp", anim: "panUp 16s ease-in-out infinite", animationDelay: "-7s", col: "4", row: "2", delay: 560 },
    { src: "/collage-img/9.webp", anim: "slowZoom 13s ease-in-out infinite", animationDelay: "-6s", col: "1", row: "3", delay: 640 },
    { src: "/collage-img/10.webp", anim: "panLeft 15s ease-in-out infinite", animationDelay: "-2s", col: "2", row: "3", delay: 720 },
    { src: "/collage-img/11.webp", anim: "slowZoom 14s ease-in-out infinite", animationDelay: "-3s", col: "3", row: "3", delay: 800 },
    { src: "/collage-img/15.webp", anim: "panUp 14s ease-in-out infinite", animationDelay: "-8s", col: "4", row: "3", delay: 880 },
  ];

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
      <style>{`
        @keyframes slowZoom {
          0%,100% { transform: scale(1.08); }
          50% { transform: scale(1.18); }
        }

        @keyframes panRight {
          0%,100% { transform: scale(1.12) translateX(-4%); }
          50% { transform: scale(1.12) translateX(4%); }
        }

        @keyframes panLeft {
          0%,100% { transform: scale(1.12) translateX(4%); }
          50% { transform: scale(1.12) translateX(-4%); }
        }

        @keyframes panUp {
          0%,100% { transform: scale(1.12) translateY(4%); }
          50% { transform: scale(1.12) translateY(-4%); }
        }

        @keyframes cellReveal {
          from { opacity: 0; transform: scale(1.08); }
          to { opacity: 1; transform: scale(1); }
        }

        .cell {
          opacity: 1;
          overflow: hidden;
        }

        .cell.revealed {
          animation: cellReveal 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes textSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
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

        .parallax-bg,
        .parallax-text {
          transition: transform 0.12s ease-out;
        }

        .img-cell {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 767px) {
          .parallax-bg,
          .parallax-text {
            transform: none !important;
            transition: none !important;
          }

          .img-cell {
            animation: none !important;
          }
        }
      `}</style>

      <div ref={bgLayerRef} className="parallax-bg absolute inset-0">
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-[3px]">
          {images.map((img) => (
            <div
              key={img.src}
              className="cell"
              data-delay={img.delay}
              style={{ gridColumn: img.col, gridRow: img.row }}
            >
              <img
                src={img.src}
                className="img-cell"
                alt=""
                width={400}
                height={300}
                loading={img.priority ? "eager" : "lazy"}
                fetchPriority={img.priority ? "high" : "auto"}
                decoding="async"
                style={{
                  animation: img.anim,
                  animationDelay: img.animationDelay || undefined,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/60" />

      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,0,0,0.18) 0%, transparent 100%)",
        }}
      />

      <div id="particles-layer" className="pointer-events-none absolute inset-0 z-[3] overflow-hidden" />

      <div
        ref={textLayerRef}
        className="parallax-text absolute inset-0 z-10 flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-[800px] text-center">
          <h2 className="mb-1 text-[clamp(35px,5vw,60px)] font-extralight leading-[1.1] text-white">
            Welcome to
          </h2>

          <h1 className="mb-5 text-[clamp(50px,7vw,80px)] font-extralight leading-[1.1] text-white">
            Anna Pharmacy Group
          </h1>

          <p
            className="shimmer-text mb-[14px] text-[clamp(17px,1.5vw,18px)] font-bold"
          >
            Investing in Health. Investing in Communities.
          </p>

          <p className="mx-auto max-w-[600px] text-[15px] leading-[1.7] text-white">
            Anna Pharmacy Group is a growing network of community pharmacies dedicated to making expert,
            accessible healthcare available to patients across London and the South East. We exist to make
            healthcare more personal and closer to home for every patient who walks through our doors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;