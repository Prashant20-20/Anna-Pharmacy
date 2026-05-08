import React, { useState, useEffect, useRef } from "react";

/* ── Intersection Observer hook for scroll-reveal ── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.15, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ── Animated counter ── */
function Counter({ to, duration = 1200 }) {
  const [val, setVal] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.round(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);
  return <span ref={ref}>{val}</span>;
}

export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "", message: "", preference: "", agreed: false,
  });
  const [openPreference, setOpenPreference] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  /* scroll-reveal refs */
  const [titleRef,   titleIn]   = useInView();
  const [formRef,    formIn]    = useInView();
  const [infoRef,    infoIn]    = useInView();
  const [statsRef,   statsIn]   = useInView();

  const preferenceOptions = [
    { value: "", label: "Select Communication Preference" },
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone" },
    { value: "either", label: "Either" },
  ];
  const selectedPreference =
    preferenceOptions.find((o) => o.value === form.preference)?.label ||
    "Select Communication Preference";

  const handle = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const submit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const response = await fetch("https://yoursite.com/wp-json/contact/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
      setForm({ firstName: "", lastName: "", phone: "", email: "", message: "", preference: "", agreed: false });
      setTimeout(() => setSubmitted(false), 3500);
    } else {
      setError(result.message || "Something went wrong. Please try again.");
    }
  } catch (err) {
    setError("Network error. Please check your connection.");
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="bg-white font-sans text-gray-900 min-h-screen overflow-x-hidden">
      <style>{`
        /* ── Scroll reveal ── */
        .reveal { opacity: 0; transform: translateY(48px); transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1); }
        .reveal.in { opacity: 1; transform: translateY(0); }
        .reveal-left  { opacity: 0; transform: translateX(-60px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
        .reveal-left.in  { opacity: 1; transform: translateX(0); }
        .reveal-right { opacity: 0; transform: translateX(60px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
        .reveal-right.in { opacity: 1; transform: translateX(0); }

        /* ── Stagger children ── */
        .stagger > *:nth-child(1) { transition-delay: 0s; }
        .stagger > *:nth-child(2) { transition-delay: 0.1s; }
        .stagger > *:nth-child(3) { transition-delay: 0.2s; }
        .stagger > *:nth-child(4) { transition-delay: 0.3s; }
        .stagger > *:nth-child(5) { transition-delay: 0.4s; }
        .stagger > *:nth-child(6) { transition-delay: 0.5s; }
        .stagger > *:nth-child(7) { transition-delay: 0.6s; }

        /* ── Banner parallax text ── */
        @keyframes bannerSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .banner-title { animation: bannerSlideUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s both; }

        /* ── Banner image zoom ── */
        @keyframes bannerZoom {
          from { transform: scale(1.12); }
          to   { transform: scale(1); }
        }
        .banner-img { animation: bannerZoom 1.4s cubic-bezier(0.22,1,0.36,1) both; }

        /* ── Underline expand on input focus ── */
        .field-wrap { position: relative; }
        .field-wrap::after {
          content: ""; position: absolute; bottom: 0; left: 0;
          width: 0; height: 2px; background: #278228;
          transition: width 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .field-wrap.active::after { width: 100%; }

        /* ── Border draw — shared ── */
        .btn-draw { position: relative; transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1) !important; }
        .btn-draw:hover { transform: translateY(-3px) !important; }
        .btn-draw:active { transform: translateY(0) scale(0.97) !important; }
        .btn-draw::before {
          content: ""; position: absolute; top: 0; left: 0;
          width: 100%; height: 2px; background: white;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1) 0s;
          border-radius: 4px 4px 0 0;
        }
        .btn-draw::after {
          content: ""; position: absolute; bottom: 0; right: 0;
          width: 100%; height: 2px; background: white;
          transform: scaleX(0); transform-origin: right;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1) 0s;
          border-radius: 0 0 4px 4px;
        }
        .btn-draw:hover::before, .btn-draw:hover::after { transform: scaleX(1); }
        .btn-draw .bd-l {
          position: absolute; left: 0; top: 0;
          width: 2px; height: 100%; background: white;
          transform: scaleY(0); transform-origin: top;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1) 0.18s;
          border-radius: 4px 0 0 4px;
        }
        .btn-draw .bd-r {
          position: absolute; right: 0; bottom: 0;
          width: 2px; height: 100%; background: white;
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1) 0.18s;
          border-radius: 0 4px 4px 0;
        }
        .btn-draw:hover .bd-l, .btn-draw:hover .bd-r { transform: scaleY(1); }
        .btn-draw .btn-text { position: relative; z-index: 1; }

        /* ── Success tick ── */
        @keyframes tickDraw {
          from { stroke-dashoffset: 50; opacity: 0; }
          to   { stroke-dashoffset: 0;  opacity: 1; }
        }
        .tick-path { stroke-dasharray: 50; animation: tickDraw 0.5s ease 0.1s both; }

        /* ── Social icon bounce ── */
        .social-btn { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), background 0.2s; }
        .social-btn:hover { transform: scale(1.18) translateY(-3px); }

        /* ── Info card slide ── */
        .info-card {
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s;
        }
        .info-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); }

        /* ── Stat counter card ── */
        @keyframes statPop {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .stat-card { animation: none; }
        .stat-card.in { animation: statPop 0.6s cubic-bezier(0.34,1.56,0.64,1) both; }
        .stat-card.in:nth-child(1) { animation-delay: 0s; }
        .stat-card.in:nth-child(2) { animation-delay: 0.12s; }
        .stat-card.in:nth-child(3) { animation-delay: 0.24s; }

        /* ── Floating label ── */
        .float-label { transition: transform 0.25s ease, font-size 0.25s ease, color 0.25s ease; }
      `}</style>

      {/* ━━ BANNER ━━ */}
      <section className="bg-[#3a3a3a] h-[200px] md:h-[470px] overflow-hidden relative">
        <div className="h-[200px] md:h-full">
          <img
            src="/images/about-main-banner.jpg"
            alt="Contact Us"
            className="banner-img w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="h-[60px] md:h-[470px] flex items-center flex-row w-full px-6 md:px-12 absolute top-[120px] md:top-0 md:bg-black/70">
          <h1 className="banner-title text-4xl md:text-[65px] text-white font-light">
            <span className="font-bold">Contact</span> Us
          </h1>
        </div>
      </section>

      

      {/* ━━ MAIN CONTENT ━━ */}
      <section className="px-6 md:px-16 lg:px-28 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-14 lg:gap-20">

          {/* ── LEFT: Form ── */}
          <div ref={formRef} className={`reveal-left stagger${formIn ? " in" : ""}`}>
            <h2 className="text-2xl md:text-[28px] mb-8">
              <span className="font-bold">Get In Touch</span>{" "}
              <span className="font-light">With Us</span>
            </h2>

            <form onSubmit={submit} className="flex flex-col gap-0">

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {[
                  { name: "firstName", label: "Your Name*", type: "text" },
                  { name: "lastName",  label: "Last Name*",  type: "text" },
                ].map(({ name, label, type }) => (
                  <div key={name} className="flex flex-col">
                    <label className="text-sm text-gray-700 mb-1">{label}</label>
                    <div className={`field-wrap${focused === name ? " active" : ""}`}>
                      <input
                        type={type} name={name} value={form[name]} onChange={handle}
                        onFocus={() => setFocused(name)} onBlur={() => setFocused("")}
                        required
                        className="border-0 border-b border-gray-800 focus:outline-none pb-1 text-sm bg-transparent w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {[
                  { name: "phone", label: "Phone*", type: "tel"   },
                  { name: "email", label: "Email*", type: "email" },
                ].map(({ name, label, type }) => (
                  <div key={name} className="flex flex-col">
                    <label className="text-sm text-gray-700 mb-1">{label}</label>
                    <div className={`field-wrap${focused === name ? " active" : ""}`}>
                      <input
                        type={type} name={name} value={form[name]} onChange={handle}
                        onFocus={() => setFocused(name)} onBlur={() => setFocused("")}
                        required
                        className="border-0 border-b border-gray-800 focus:outline-none pb-1 text-sm bg-transparent w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Message */}
              <div className="flex flex-col mb-8">
                <label className="text-sm text-gray-700 mb-1">Message*</label>
                <div className={`field-wrap${focused === "message" ? " active" : ""}`}>
                  <textarea
                    name="message" value={form.message} onChange={handle}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                    required rows={3}
                    className="border-0 border-b border-gray-800 focus:outline-none pb-1 text-sm bg-transparent resize-none w-full"
                  />
                </div>
              </div>

              {/* Preference dropdown */}
              <div className="flex flex-col mb-8 relative">
                <button
                  type="button"
                  onClick={() => setOpenPreference(!openPreference)}
                  className="w-full border-b border-gray-800 pb-2 text-sm text-gray-600 bg-transparent flex items-center justify-between text-left focus:outline-none"
                  style={{ transition: "border-color 0.3s" }}
                >
                  <span>{selectedPreference}</span>
                  <span
                    className="text-gray-600 text-xs"
                    style={{ display:"inline-block", transition:"transform 0.3s", transform: openPreference ? "rotate(180deg)" : "rotate(0deg)" }}
                  >▼</span>
                </button>
                {openPreference && (
                  <ul
                    className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-md z-50"
                    style={{ animation: "bannerSlideUp 0.25s ease both" }}
                  >
                    {preferenceOptions.map((option) => (
                      <li
                        key={option.value}
                        onClick={() => { setForm((p) => ({ ...p, preference: option.value })); setOpenPreference(false); }}
                        className="text-sm text-gray-700 px-4 py-2 cursor-pointer hover:bg-green-600 hover:text-white"
                        style={{ transition: "background 0.18s, color 0.18s" }}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 mb-8">
                <input
                  type="checkbox" name="agreed" checked={form.agreed} onChange={handle}
                  id="agree"
                  className="mt-0.5 w-4 h-4 border border-gray-400 rounded-sm cursor-pointer accent-green-600 flex-shrink-0"
                />
                <label htmlFor="agree" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                  By ticking this box you confirm you have read, understood and accept our{" "}
                  <a href="#" className="underline text-gray-800 hover:text-green-600 transition-colors">privacy policy</a>
                </label>
              </div>

              {/* reCAPTCHA */}
              <div className="flex items-center gap-3 border border-gray-300 rounded-sm px-4 py-3 mb-8 bg-gray-50" style={{ maxWidth: "300px" }}>
                <div className="w-5 h-5 border-2 border-gray-400 rounded-sm flex-shrink-0" />
                <span className="text-sm text-gray-600">I'm not a robot</span>
                <div className="ml-auto flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <p className="text-[9px] text-gray-400 mt-0.5">reCAPTCHA</p>
                  <p className="text-[8px] text-gray-300">Privacy · Terms</p>
                </div>
              </div>

              {/* Submit button */}
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="btn-draw bg-[#278228] hover:bg-black text-white font-bold text-sm tracking-widest uppercase px-8 py-4 transition-colors duration-300 self-start"
                  style={{ borderRadius: "4px" }}
                >
                  <span className="bd-l" /><span className="bd-r" />
                  <span className="btn-text">SEND MESSAGE</span>
                </button>

                {/* Success indicator */}
                {submitted && (
                  <div
                    className="flex items-center gap-2"
                    style={{ animation: "bannerSlideUp 0.4s ease both" }}
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="10" fill="#278228" />
                      <path className="tick-path" d="M6 11.5l3.5 3.5 6.5-7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    <span className="text-green-700 text-sm font-medium">Message sent!</span>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* ── RIGHT: Info ── */}
          <div ref={infoRef} className={`reveal-right stagger${infoIn ? " in" : ""} flex flex-col gap-8 lg:pt-12`}>

            {/* Address */}
            <div className="info-card p-4 rounded-sm border border-transparent hover:border-gray-100">
              <h3 className="text-2xl md:text-[28px] font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>
                Anna Pharmacy
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                398 Greenwrythe Lane<br />Carshalton<br />SM5 1JF<br />United Kingdom
              </p>
            </div>

            {/* Contact */}
            <div className="info-card p-4 rounded-sm border border-transparent hover:border-gray-100">
              <h3 className="text-xl md:text-[28px] font-bold mb-2">Contact</h3>
              <p className="text-sm text-gray-700">
                E. <a href="mailto:info@annapharmacy.com" className="hover:text-green-600 transition-colors">info@annapharmacy.com</a>
              </p>
              <p className="text-sm text-gray-700">
                T. <a href="tel:02086400404" className="hover:text-green-600 transition-colors">020 8640 0404</a>
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              <a href="#" className="social-btn w-11 h-11 rounded-full bg-gray-900 hover:bg-green-600 flex items-center justify-center transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="social-btn w-11 h-11 rounded-full bg-gray-900 hover:bg-green-600 flex items-center justify-center transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>

            {/* QR Code */}
            <div className="info-card flex items-center gap-4 border border-gray-200 rounded-sm px-4 py-4" style={{ maxWidth: "280px" }}>
              <div
                className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-sm"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23111'/%3E%3Crect x='10' y='10' width='30' height='30' fill='none' stroke='white' stroke-width='5'/%3E%3Crect x='20' y='20' width='10' height='10' fill='white'/%3E%3Crect x='60' y='10' width='30' height='30' fill='none' stroke='white' stroke-width='5'/%3E%3Crect x='70' y='20' width='10' height='10' fill='white'/%3E%3Crect x='10' y='60' width='30' height='30' fill='none' stroke='white' stroke-width='5'/%3E%3Crect x='20' y='70' width='10' height='10' fill='white'/%3E%3Crect x='60' y='55' width='8' height='8' fill='white'/%3E%3Crect x='72' y='55' width='8' height='8' fill='white'/%3E%3Crect x='60' y='67' width='8' height='8' fill='white'/%3E%3Crect x='72' y='67' width='8' height='8' fill='white'/%3E%3Crect x='60' y='79' width='20' height='8' fill='white'/%3E%3C/svg%3E")`,
                  backgroundSize: "cover",
                }}
              />
              <div>
                <p className="text-sm text-gray-600">Scan to</p>
                <p className="text-sm font-bold text-gray-900">Connect with us</p>
              </div>
            </div>

            {/* View All Branches */}
            <button
              className="btn-draw bg-gray-900 hover:bg-[#278228] text-white font-bold text-sm tracking-widest uppercase px-6 py-4 transition-colors duration-300 text-center"
              style={{ maxWidth: "280px", borderRadius: "4px" }}
            >
              <span className="bd-l" /><span className="bd-r" />
              <span className="btn-text">VIEW ALL BRANCHES</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}