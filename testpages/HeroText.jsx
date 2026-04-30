{/* ── Centre vignette ── */}
<div
  className="absolute inset-0"
  style={{
    background:
      "radial-gradient(ellipse 65% 65% at 50% 55%, rgba(0,0,0,0.5) 0%, transparent 100%)",
  }}
/>

{/* ── Hero Text ── */}
<div
  className="relative z-10 h-full flex items-center justify-center px-4"
  style={{ animation: "fadeInUp 1.1s ease forwards" }}
>
  <div className="text-center max-w-3xl">

    <h2
      className="text-gray-300 font-light mb-2 tracking-wide"
      style={{
        fontFamily: "Georgia, serif",
        fontSize: "clamp(1rem, 2.2vw, 1.5rem)",
        letterSpacing: "0.03em",
      }}
    >
      Welcome to
    </h2>

    <h1
      className="text-white font-light leading-tight mb-5"
      style={{
        fontFamily: "Georgia, serif",
        fontSize: "clamp(2.4rem, 7.5vw, 6.2rem)",
        letterSpacing: "-0.01em",
      }}
    >
      Anna Pharmacy Group
    </h1>

    <p className="text-white font-bold tracking-widest mb-4 text-sm md:text-base">
      Investing in Health. Investing in Growth
    </p>

    <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto leading-loose">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum diam
      tincidunt lacus pretium, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec fermentum diam tincidunt lacus pretium,
    </p>

  </div>
</div>
