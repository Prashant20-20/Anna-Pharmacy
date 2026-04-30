import React from "react";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TEAM CARD — Aruna/Mahesh style
   Photo overflows above light-green card
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const TeamCardOverflow = ({ name, surname, role, image, bio1, bio2, quotes = [] }) => (
  <div className="mb-24 last:mb-0">
    <div className="relative" style={{ paddingTop: "80px" }}>
      {/* Photo — overflows above card */}
      <div className="absolute left-8 top-0 z-10 w-36 md:w-44 rounded-sm overflow-hidden bg-gray-200"
        style={{ height: "220px" }}>
        <img src={image} alt={`${name} ${surname}`} className="w-full h-full object-cover object-top" />
      </div>

      {/* Light green card */}
      <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#e8f5e9" }}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left — name block sits below photo */}
          <div className="p-6 md:p-8 flex flex-col justify-end" style={{ minHeight: "200px" }}>
            <div style={{ paddingTop: "130px" }}>
              <p className="text-xl text-gray-900" style={{ fontFamily: "Georgia, serif" }}>
                <span className="font-semibold">{name}</span> <span className="font-light">{surname}</span>
              </p>
              <p className="text-xs text-green-600 font-semibold tracking-widest uppercase mt-0.5">{role}</p>
            </div>
          </div>
          {/* Right — bio */}
          <div className="p-6 md:p-8 flex flex-col justify-center gap-4">
            <p className="text-sm text-gray-700 leading-relaxed">{bio1}</p>
            {bio2 && <p className="text-sm text-gray-700 leading-relaxed">{bio2}</p>}
          </div>
        </div>
      </div>
    </div>

    {/* Dark quote cards below */}
    {quotes.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {quotes.map((q, i) => (
          <div key={i} className="bg-gray-900 text-white rounded-xl p-6">
            <p className="text-sm leading-relaxed">{q}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TEAM CARD — Jaymil style
   Image LEFT (square), text+info-cards RIGHT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const TeamCardSide = ({ name, surname, role, image, bio1, bio2, infoCards = [] }) => (
  <div className="mb-24 last:mb-0">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Left — photo */}
      <div className="w-full">
        <div className="w-full aspect-square max-w-xs rounded-sm overflow-hidden bg-gray-200">
          <img src={image} alt={`${name} ${surname}`} className="w-full h-full object-cover object-top" />
        </div>
      </div>

      {/* Right — name, role, bio, info cards */}
      <div>
        <p className="text-2xl md:text-3xl text-gray-900 mb-0.5" style={{ fontFamily: "Georgia, serif" }}>
          <span className="font-bold">{name}</span> <span className="font-light">{surname}</span>
        </p>
        <p className="text-sm text-green-600 font-semibold tracking-wide mb-5">{role}</p>

        {bio1 && <p className="text-sm text-gray-600 leading-relaxed mb-4">{bio1}</p>}
        {bio2 && <p className="text-sm text-gray-600 leading-relaxed mb-6">{bio2}</p>}

        {/* Light green bordered info cards stacked */}
        {infoCards.length > 0 && (
          <div className="flex flex-col gap-3">
            {infoCards.map((card, i) => (
              <div key={i} className="border border-green-300 rounded-xl p-4 bg-white">
                <p className="text-sm text-gray-700 leading-relaxed">{card}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default function AboutUs() {
  return (
    <main className="bg-white font-sans text-gray-900">

      {/* ━━ PAGE TITLE ━━ */}
      <section className="bg-[#3a3a3a] md:h-[470px] overflow-hidden relative">
        <p><img src="/images/about-main-banner.jpg" alt="About Us" className="w-full h-full object-cover opacity-20" /></p>
        <div className ="h-[470px] flex items-center flex-row w-full md:px-12 absolute top-0 bg-black/70">
        <h1 className="text-4xl md:text-5xl text-white font-light" >
          <span className="font-bold">About</span> Us
        </h1></div>
      </section>

      {/* ━━ BUILT ON FAMILY VALUES — dashed timeline ━━ */}
      <section className="bg-white px-6 md:px-16 lg:px-32 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl text-gray-900 mb-14 leading-snug" style={{ fontFamily: "Georgia, serif" }}>
          Built On Family Values.<br />
          <span className="font-bold">Growing With Purpose.</span>
        </h2>

        <div className="relative">
          {/* Dashed vertical line */}
          <div className="absolute top-2 bottom-2 w-0"
            style={{ left: "148px", borderLeft: "2px dashed #d1d5db" }} />

          {[
            {
              year: "1987", sub: "The Beginning",
              paras: [
                "Anna Pharmacy Group was founded in 1987, when Michael and Anna established a single community pharmacy with a simple belief: healthcare should be personal, accessible and rooted in trust.",
                "From those early days, the pharmacy grew with the support of the local community - built not just on prescriptions dispensed, but on relationships formed across generations.",
              ],
            },
            {
              year: "2013", sub: "New Generation",
              paras: [
                "In 2013, the next generation joined the business, bringing renewed clinical ambition and a structured vision for growth. What began as a single family pharmacy has evolved into a carefully built group of community pharmacies, united by shared standards, governance and long-term stewardship.",
              ],
            },
            {
              year: "Today", sub: null, today: true,
            },
          ].map(({ year, sub, paras, today }, i) => (
            <div key={year} className={`flex items-start ${i < 2 ? "mb-12" : ""}`}>
              <div className="flex-shrink-0 text-right pr-6" style={{ width: "140px" }}>
                <p className="text-2xl md:text-3xl text-gray-900" style={{ fontFamily: "Georgia, serif" }}>{year}</p>
                {sub && <p className="text-xs font-bold text-gray-800 tracking-wide mt-0.5">{sub}</p>}
              </div>
              <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-green-500 bg-white mt-1.5 z-10" />
              <div className="flex-1 pl-5 pt-0.5">
                {paras && paras.map((p, j) => (
                  <p key={j} className={`text-sm text-gray-600 leading-relaxed ${j > 0 ? "mt-3" : ""}`}>{p}</p>
                ))}
                {today && (
                  <p className="text-sm text-gray-800 leading-relaxed">
                    We Remain <strong>Proudly Independent</strong><br />And Intentionally Ambitious.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ━━ OUR PHILOSOPHY ━━ */}
      <section className="px-6 md:px-16 lg:px-32 pb-0">
        <div className="relative rounded-sm overflow-hidden h-56 md:h-72 bg-gray-700">
          <img src="/images/philosophy-bg.jpg" alt="Our Philosophy" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.15))" }}>
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2" style={{ fontFamily: "Georgia, serif" }}>Our Philosophy</h2>
            <p className="text-gray-300 text-xs md:text-sm max-w-sm leading-relaxed">
              We believe community pharmacy is one of the most powerful yet underutilised assets within the NHS.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white px-6 md:px-16 lg:px-32 py-14">
        <p className="text-center text-xs text-gray-500 tracking-[0.2em] uppercase mb-10">Our Approach Combines</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {[
            { icon: "🏡", label: "Strong family values and local accountability" },
            { icon: "📋", label: "Robust governance and regulatory excellence" },
            { icon: "🌱", label: "Breakthrough in social services and workforce development" },
          ].map((c) => (
            <div key={c.label} className="flex flex-col items-center text-center gap-3">
              <span className="text-4xl">{c.icon}</span>
              <p className="text-sm text-gray-600 leading-relaxed max-w-[200px]">{c.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 text-white text-center py-4 px-6">
          <p className="text-sm tracking-wide">
            We are not short-term operators. We build{" "}
            <span className="text-green-400 font-bold uppercase tracking-widest">SUSTAINABLE HEALTHCARE INFRASTRUCTURE.</span>
          </p>
        </div>
      </div>

      {/* ━━ ROOTED IN COMMUNITY ━━ */}
      <section className="px-6 md:px-16 lg:px-32 py-14 md:py-20" style={{ backgroundColor: "#e8f5e9" }}>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-snug mb-6" style={{ fontFamily: "Georgia, serif" }}>
          <span className="font-bold">Rooted</span> in Community,<br />
          Focused on the <span className="text-green-600 font-bold">Future</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <p className="text-sm text-gray-700 leading-relaxed">Every branch remains locally grounded serving its own community with care, familiarity and professionalism.</p>
          <p className="text-sm text-gray-700 leading-relaxed">At the same time, we are building a modern pharmacy group designed to thrive in a changing healthcare landscape. We actively invest in:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-[#1e5c1e] text-white rounded-xl p-6 flex flex-col items-center text-center gap-3">
            <p className="text-2xl font-bold italic">NHS</p>
            <p className="text-sm leading-relaxed">Expanded NHS<br />clinical services</p>
          </div>
          <div className="bg-[#2d8c2d] text-white rounded-xl p-6 flex flex-col items-center text-center gap-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm leading-relaxed">Responsible private<br />service development</p>
          </div>
          <div className="bg-[#4caf50] text-white rounded-xl p-6 flex flex-col items-center text-center gap-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-1a4 4 0 00-5.447-3.724M9 20H4v-1a4 4 0 015.447-3.724M15 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <p className="text-sm leading-relaxed">Workforce capability<br />and leadership</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#2d8c2d] text-white rounded-xl p-6 flex flex-col items-center text-center gap-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <p className="text-sm leading-relaxed">Preventative healthcare and<br />long-term condition support</p>
          </div>
          <div className="bg-gray-900 text-white rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <p className="text-sm font-semibold leading-relaxed">
              Community pharmacy is evolving.<br />We intend to lead that evolution,<br />not react to it.
            </p>
          </div>
        </div>
      </section>

      {/* ━━ RESPONSIBLE GROWTH ━━ */}
      <section className="bg-white px-6 md:px-16 lg:px-32 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "Georgia, serif" }}>Responsible</h2>
            <h2 className="text-3xl md:text-4xl font-light text-green-500 mb-6" style={{ fontFamily: "Georgia, serif" }}>Growth</h2>
            <p className="text-sm font-semibold text-gray-800 mb-2">Our growth has been deliberate and disciplined</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">We acquire and integrate pharmacies where we get:</p>
            <ul className="space-y-2.5 mb-8">
              {["Strengthen clinical deliverables","Improve operational structure","Protect community access to healthcare","Provide continuity for patients and staff"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>{item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed">We embrace conversations with independent pharmacy owners considering succession, and will always proceed with a caring, forward-thinking process.</p>
          </div>
          <div>
            <div className="w-full h-52 md:h-64 rounded-sm overflow-hidden bg-gray-200 mb-5">
              <img src="/images/growth-store.jpg" alt="Growth" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">Growth for us is not about scale alone. It's about building a reputation, and building that as a group.</p>
          </div>
        </div>
      </section>

      {/* ━━ OUR COMMITMENT ━━ */}
      <section className="px-6 md:px-16 lg:px-32 pb-0">
        <div className="relative rounded-sm overflow-hidden h-56 md:h-72 bg-gray-700">
          <img src="/images/commitment-bg.jpg" alt="Our Commitment" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.15))" }}>
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2" style={{ fontFamily: "Georgia, serif" }}>Our Commitment</h2>
            <p className="text-gray-300 text-xs md:text-sm max-w-sm leading-relaxed">Anna Pharmacy Group provides patient-centred pharmacy services going beyond dispensing to deliver genuine care.</p>
          </div>
        </div>
      </section>
      <div className="bg-white px-6 md:px-16 lg:px-32 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {[{ icon: "⚖️", label: "Integrity" },{ icon: "🤝", label: "Accountability" },{ icon: "📈", label: "Long-term thinking" }].map((c) => (
            <div key={c.label} className="flex flex-col items-center text-center gap-3">
              <span className="text-4xl">{c.icon}</span>
              <p className="text-sm font-semibold text-gray-700">{c.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 text-white text-center py-5 px-6">
          <p className="text-sm text-gray-300 leading-relaxed">Anna Pharmacy Group strives to deliver best-quality community healthcare services — while building a stable, generational future for business.</p>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          LEADING THE WAY
          1. Jaymil — side layout (image left, text+cards right)
          2. Aruna  — overflow card layout
          3. Mahesh — overflow card layout
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white px-6 md:px-16 lg:px-32 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-14" style={{ fontFamily: "Georgia, serif" }}>
          <span className="font-bold">Leading</span> <span className="font-light">The Way</span>
        </h2>

        {/* ── Jaymil Patel ── */}
        <TeamCardSide
          name="Jaymil" surname="Patel" role="Director"
          image="/images/jaymil.jpg"
          bio1="Jaymil Patel joined the family business in 2013 and now leads the strategic direction of Anna Pharmacy Group. Building on the foundations established in 1987, he has overseen its evolution into a structured, multi-site pharmacy group defined by strong governance, clinical ambition and long-term sustainability."
          bio2="Beyond the organisation, Jaymil plays an active role in shaping the future of community pharmacy."
          infoCards={[
            "He serves as Vice Chair of the South West London LPC and sits on the Surrey LPC, contributing to regional strategic discussions and representing the interests of frontline pharmacy contractors.",
            "His leadership is centred on responsible expansion, disciplined asset stewardship and strengthening the position of community pharmacy within modern primary care.",
            "He remains committed to preserving the values on which the business was built, while shaping a resilient healthcare group designed to endure for generations.",
          ]}
        />

        {/* ── Aruna Patel ── */}
        <TeamCardOverflow
          name="Aruna" surname="Patel" role="Founder"
          image="/images/aruna.jpg"
          bio1="In 1987, Aruna Patel (Anna), alongside her husband Michael (Mahesh), founded the first Anna Pharmacy with a simple guiding principle: the patient always comes first. For Aruna, community pharmacy was never just about dispensing medicines it was about service, dignity and treating every individual with respect and care."
          bio2="Predominantly based at the counter, she became the familiar face of the pharmacy, welcoming patients by name, listening attentively and ensuring that no one left without feeling heard."
          quotes={[
            "Her philosophy was clear: exceptional customer service is not an add-on, it is the foundation of healthcare.",
            "That unwavering commitment to personal service and community trust remains embedded within Anna Pharmacy Group today, forming the cultural backbone of the organisation as it continues to grow.",
          ]}
        />

        {/* ── Mahesh Patel ── */}
        <TeamCardOverflow
          name="Mahesh" surname="Patel" role="Co-Founder"
          image="/images/mahesh.jpg"
          bio1="Mahesh Patel (Michael), husband of Aruna and father of Jaymil, is a qualified pharmacist who trained at the University of Sunderland. Before establishing the business in the United Kingdom, he practised pharmacy in Tanzania, developing a strong foundation in community-based healthcare and professional discipline."
          bio2={null}
          quotes={[]}
        />
      </section>

      {/* ━━ SERVING COMMUNITIES ━━ */}
      <section className="bg-green-600 px-6 md:px-16 lg:px-32 py-16 text-center">
        <h2 className="text-white text-2xl md:text-4xl font-light mb-5" style={{ fontFamily: "Georgia, serif" }}>
          Serving Communities Across The UK
        </h2>
        <p className="text-green-100 text-sm max-w-2xl mx-auto leading-relaxed mb-8">
          Anna Pharmacy Group's branches are located across communities in England, providing accessible, high-quality healthcare to the people who need it most.
        </p>
        <button className="bg-white text-green-700 font-semibold text-xs tracking-[0.15em] uppercase px-8 py-3 hover:bg-green-50 transition-colors">
          VIEW ALL BRANCHES
        </button>
      </section>
 

    </main>
  );
}
