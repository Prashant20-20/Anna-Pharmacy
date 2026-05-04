import React from "react";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TEAM CARD — Aruna/Mahesh style
   Photo overflows above light-green card
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const TeamCardOverflow = ({ name, surname, role, image, bio1, bio2, quotes = [] }) => (
  <div className="mb-12 last:mb-0">
    <div className="relative overflow-hidden" style={{ paddingTop: "80px" }}>
      {/* Photo — overflows above card */}
      <div className="absolute left-8 top-0 z-10 w-36 md:w-[280px] md:h-[510px]  overflow-hidden"
       >
        <img src={image} alt={`${name} ${surname}`} className="w-full h-full object-cover object-top" />
      </div>

      {/* Light green card */}
      <div className="rounded-xl overflow-hidden bg-[#D5F5E3]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left — name block sits below photo */}
          <div className="p-6 md:p-8 flex flex-col justify-end h-190px md:h-auto" >
            <div className="w-[215px] h-[85px] bg-white z-[99] flex items-start justify-center flex-col p-5">
              <p className="text-xl md:text-[28px]  text-black">
                <span className="font-bold">{name}</span> <span className="font-light">{surname}</span>
              </p>
              <p className="text-[15px] text-[#278228] font-bold tracking-widest  mt-0.5">{role}</p>
            </div>
          </div>
          {/* Right — bio */}
          <div className="p-6 md:py-12 md:!pl-0 md:pr-8 flex flex-col justify-center gap-4">
            <p className="text-[15px] text-black leading-relaxed">{bio1}</p>
            {bio2 && <p className="text-[15px] text-black leading-relaxed">{bio2}</p>}
          </div>
        </div>
      </div>
    </div>

    {/* Dark quote cards below */}
    {quotes.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
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
  <div className="mb-16 last:mb-0">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Left — photo */}
      <div className="w-full">
        <div className="w-full aspect-square rounded-sm overflow-hidden">
          <img src={image} alt={`${name} ${surname}`} className="w-full h-full object-cover object-top" />
        </div>
      </div>

      {/* Right — name, role, bio, info cards */}
      <div>
        <p className="text-2xl md:text-[28px] text-black mb-0.5">
          <span className="font-bold">{name}</span> <span className="font-light">{surname}</span>
        </p>
        <p className="text-[15px] text-[#278228] font-bold tracking-wide mb-5">{role}</p>

        {bio1 && <p className="text-[15px] text-black leading-relaxed mb-4">{bio1}</p>}
        {bio2 && <p className="text-[15px] text-black leading-relaxed mb-6">{bio2}</p>}

        {/* Light green bordered info cards stacked */}
        {infoCards.length > 0 && (
          <div className="flex flex-col gap-3">
            {infoCards.map((card, i) => (
              <div key={i} className="border border-[#278228] rounded-xl p-6 bg-white">
                <p className="text-[15px] text-black leading-relaxed">{card}</p>
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
    <main className="bg-white font-sans text-black">

      {/* ━━ PAGE TITLE ━━ */}
      <section className="bg-[#3a3a3a] h-[200px] md:h-[470px] overflow-hidden relative">
        <p className="h-[200px] md:h-full"><img src="/images/about-main-banner.jpg" alt="About Us" className="w-full h-full object-cover opacity-20" /></p>
        <div className ="h-[60px] md:h-[470px] flex items-center flex-row w-full px-6 md:px-12 absolute top-[120px] md:top-0 md:bg-black/70">
        <h1 className="text-4xl md:text-[65px] text-white font-light" >
          <span className="font-bold">About</span> Us
        </h1></div>
      </section>

      {/* ━━ BUILT ON FAMILY VALUES — dashed timeline ━━ */}
      <section className="bg-white px-6 md:px-16 lg:px-32 py-14 md:py-20">
        <div class="md:w-[780px] mx-auto"> 
        <h2 className="text-3xl md:text-5xl text-black mb-14 leading-snug">
          Built On Family Values.<br />
          <span className="font-bold">Growing With Purpose.</span>
        </h2>

        <div className="relative">
          {/* Dashed vertical line */}
          <div className="absolute top-2 bottom-2 w-0 ml-[105px] md:ml-[187px]"
            style={{ borderLeft: "2px dashed #d1d5db" }} />

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
              <div className="flex-shrink-0 text-left pr-2 md:w-[180px]">
                <p className="text-2xl md:text-5xl text-black font-extralight w-[90px] md:w-full">{year}</p>
                {sub && <p className="text-sm md:text-lg font-bold text-black tracking-wide mt-0.5 w-[90px] md:w-full">{sub}</p>}
              </div>
              <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-green-500 bg-white mt-1.5 z-10" />
              <div className="flex-1 pl-4 pt-0.5">
                {paras && paras.map((p, j) => (
                  <p key={j} className={`text-sm text-black leading-relaxed ${j > 0 ? "mt-3" : ""}`}>{p}</p>
                ))}
                {today && (
                  <p className="text-sm text-black leading-relaxed">
                    We Remain <strong>Proudly Independent</strong><br />And Intentionally Ambitious.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ━━ OUR PHILOSOPHY ━━ */}
<section className="px-6 md:px-16 lg:px-32 pb-0">
  <div class="md:w-[780px] mx-auto"> 
  <div className="relative rounded-[15px] overflow-hidden h-56 md:h-[345px] bg-gray-700 text-center">
    <img
      src="/images/philosophy-bg.jpg"
      alt="Our Philosophy"
      className="w-full h-full object-cover"
    />
    {/* Dark black layer */}
    <div className="absolute inset-0 bg-black/40" />
    {/* Green tint layer */}
    <div className="absolute inset-0 bg-[#278228]/50" />
    {/* Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12">
      <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
        Our Philosophy
      </h2>
      <p className="text-white text-sm md:text-base max-w-xs md:max-w-lg mx-auto leading-relaxed text-center">
        We believe community pharmacy is one of the most powerful yet underutilised assets within the NHS.
      </p>
    </div>
  </div>
  </div>
</section>


      <section className="bg-white px-6 md:px-16 lg:px-32 py-14">
        <div class="md:w-[780px] mx-auto"> 
        <p className="text-center text-xl md:text-[22px] text-black font-bold  mb-10">Our Approach Combines</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { img: "/images/users-icon.svg", label: "Strong family values and local accountability" },
            { img: "/images/ai-governance-lifecycle.svg", label: "Robust governance and regulatory excellence" },
            { img: "/images/clinic-medical.svg", label: "Breakthrough in social services and workforce development" },
          ].map((c) => (
            <div key={c.label} className="flex flex-col items-center text-center gap-3 border border-[#E9E9E9] rounded-xl p-4 md:p-7">
              <img
        src={c.img}
        alt={c.label}
        className="w-12 h-12 object-contain"
      />
              <p className="text-sm text-black leading-relaxed max-w-[200px]">{c.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 text-white text-center py-7 px-6 rounded-lg">
          <p className="text-xl tracking-wide md:leading-9">
            We are not short-term operators. We build<br/>
            <span className="text-[#278228] font-Medium uppercase tracking-widest">SUSTAINABLE </span><span className="font-bold">HEALTHCARE INFRASTRUCTURE.</span>
          </p>
        </div>
        </div>
      </section>

      {/* ━━ ROOTED IN COMMUNITY ━━ */}
      <section className="px-6 md:px-16 lg:px-32 py-14 md:py-20" style={{ backgroundColor: "#D5F5E3" }}>
        <div class="md:w-[780px] mx-auto"> 
        <h2 className="text-3xl md:text-5xl font-normal text-black leading-[40px] md:!leading-[56px] mb-6" >
          <span className="font-bold">Rooted</span> in Community,<br />
          Focused on the <span className="text-green-600 font-bold">Future</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-10">
          <p className="text-sm text-black leading-relaxed">Every branch remains locally grounded serving its own community with care, familiarity and professionalism.</p>
          <p className="text-sm text-black leading-relaxed">At the same time, we are building a modern pharmacy group designed to thrive in a changing healthcare landscape. We actively invest in:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-[#278228] text-white rounded-xl py-5 px-4 md:py-10 md:px-6 flex flex-col items-center text-center gap-3">
            <p className="text-3xl font-bold italic">NHS</p>
            <p className="text-sm leading-relaxed">Expanded NHS<br />clinical services</p>
          </div>
          <div className="bg-[#278228] text-white rounded-xl py-5 px-4 md:py-10 md:px-6 flex flex-col items-center text-center gap-3">
             <img src="/images/Fi-Br-Doctor.svg" alt=""  />
            <p className="text-base leading-relaxed">Responsible private<br />service development</p>
          </div>
          <div className="bg-[#278228] text-white rounded-xl py-5 px-4 md:py-10 md:px-6 flex flex-col items-center text-center gap-3">
            <img src="/images/Leaderboard-Star.svg" alt=""  />
            <p className="text-base leading-relaxed">Workforce capability<br />and leadership</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#278228] text-white rounded-xl py-5 px-4 md:py-10 md:px-6 flex flex-col items-center text-center gap-3">
            <img src="/images/Healthcare.svg" alt=""  />
            <p className="text-base leading-relaxed">Preventative healthcare and<br />long-term condition support</p>
          </div>
          <div className="bg-gray-900 text-white rounded-xl py-5 px-4 md:py-10 md:px-6 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-semibold leading-relaxed">
              Community pharmacy is evolving.<br />We intend to lead that evolution,<br />not react to it.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* ━━ RESPONSIBLE GROWTH ━━ */}
      <section className="bg-white px-6 md:px-16 lg:px-32 py-14 md:py-20">
        <div class="md:w-[780px] mx-auto"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-normal text-black" >Responsible</h2>
            <h2 className="text-3xl md:text-5xl font-bold text-[#278228] mb-4 md:mb-6">Growth</h2>
            <p className="text-sm md:text-[22px] font-semibold text-black mb-4 md:mb-8 leading-8">Our growth has been <br className="hidden md:block" />deliberate and disciplined</p>
            <p className="text-sm md:text-xl text-black leading-relaxed mb-5">We acquire and integrate pharmacies <br className="hidden md:block" />where we get:</p>
            <ul className="space-y-3.5 mb-8">
              {["Strengthen clinical deliverables","Improve operational structure","Protect community access to healthcare","Provide continuity for patients and staff"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] font-medium text-black">
                  <span className="text-white bg-[#278228] rounded-full w-[18px] h-[18px] text-center text-[12px] mt-0.5 flex-shrink-0">✓</span>{item}
                </li>
              ))}
            </ul>
            
          </div>
          <div>
            <div className="w-full md:h-[470px] overflow-hidden"> 
             
              <div className="relative w-full h-[470px]">
                 
                <img
                  src="/images/pharmacy1.webp"
                  alt="Pharmacy 1"
                  className="absolute top-0 left-0 w-full md:w-[55%] h-[48%] object-cover rounded-xl"
                /> 
                <img
                  src="/images/pharmacy2.webp"
                  alt="Pharmacy 2"
                  className="absolute top-[20%] left-[25%]  w-full md:w-[55%] h-[55%] object-cover rounded-xl shadow-lg z-10"
                />
 
                <img
                  src="/images/pharmacy3.webp"
                  alt="Pharmacy 3"
                  className="absolute bottom-0 left-0  w-full md:w-[55%] h-[48%] object-cover rounded-xl"
                />

              </div>
            </div>
             </div>
             <p className="text-[15px] text-black leading-relaxed">We embrace conversations with independent pharmacy owners considering succession, and will always proceed with a caring, forward-thinking process.</p>
            <p className="text-15px text-black leading-relaxed">Growth for us is not about scale alone. It's about building a reputation, and building that as a group.</p>
         
        </div>
        </div>
      </section>

      {/* ━━ OUR COMMITMENT ━━ */}
     <section className="px-6 md:px-16 lg:px-32 pb-0">
      <div class="md:w-[780px] mx-auto"> 
  <div className="relative rounded-[15px] overflow-hidden h-56 md:h-[345px] text-center">
    <img
      src="/images/philosophy-bg.jpg"
      alt="Our Philosophy"
      className="w-full h-full object-cover"
    /> 
    <div className="absolute inset-0 bg-black/40" /> 
    <div className="absolute inset-0 bg-[#278228]/50" /> 
    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12">
      <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
        Our Commitment
      </h2>
      <p className="text-white text-sm md:text-base max-w-xs md:max-w-lg mx-auto leading-relaxed text-center">
        Anna Pharmacy Group provides patient-centred pharmacy services going beyond dispensing to deliver genuine care.
      </p>
    </div>
  </div>
  </div>
</section>

       <section className="bg-white px-6 md:px-16 lg:px-32 py-14">
        <div class="md:w-[780px] mx-auto"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { img: "/images/Integrity.svg", label: "Integrity" },
            { img: "/images/Accountability.svg", label: "Accountability" },
            { img: "/images/Long-term-thinking.svg", label: "Long-term thinking" },
          ].map((c) => (
            <div key={c.label} className="flex flex-col items-center text-center gap-3 border border-[#E9E9E9] rounded-xl p-4 md:p-7">
              <img
        src={c.img}
        alt={c.label}
        className="w-12 h-12 object-contain"
      />
              <p className="text-sm text-black leading-relaxed max-w-[200px]">{c.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-black text-white text-center py-7 px-6 rounded-lg">
          <p className="text-[15px] tracking-wide leading-8">
            Anna Pharmacy Group exists to deliver high-quality community healthcare today - while <br className="hidden md:block"/>building a stable, generational healthcare business for tomorrow.
          </p>
        </div>
        </div>
      </section>

      {/* LEADING THE WAY  */}
      <section className="bg-white px-6 md:px-16 lg:px-32 py-14 md:py-20">
        <div class="md:w-[780px] mx-auto"> 
        <h2 className="text-3xl md:text-5xl font-light text-black mb-8 md:mb-14" >
          <span className="font-bold">Leading</span> <span className="font-light">The Way</span>
        </h2>

        {/* ── Jaymil Patel ── */}
        <TeamCardSide
          name="Jaymil" surname="Patel" role="Director"
          image="/images/jaymil.webp"
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
          image="/images/aruna.webp"
          bio1="In 1987, Aruna Patel (Anna), alongside her husband Michael (Mahesh), founded the first Anna Pharmacy with a simple guiding principle: the patient always comes first. For Aruna, community pharmacy was never just about dispensing medicines it was about service, dignity and treating every individual with respect and care."
          bio2="Predominantly based at the counter, she became the familiar face of the pharmacy, welcoming patients by name, listening attentively and ensuring that no one left without feeling heard."
          quotes={[
            "Her philosophy was clear: exceptional customer service is not an add-on, it is the foundation of healthcare.",
            "That unwavering commitment to personal service and community trust remains embedded within Anna Pharmacy Group today, forming the cultural backbone of the organisation as it continues to grow.",
          ]}
        />

        {/* ── Mahesh Patel ── */}
        <TeamCardOverflow
          name="Mahesh" surname="Patel" role="Founder"
          image="/images/mahesh.webp"
          bio1="Mahesh Patel (Michael), husband of Aruna and father of Jaymil, is a qualified pharmacist who trained at the University of Sunderland. Before establishing the business in the United Kingdom, he practised pharmacy in Tanzania, developing a strong foundation in community-based healthcare and professional discipline."
          bio2="In 1987, Mahesh and Aruna founded their first pharmacy together, starting entirely from scratch. Through hard work, clinical integrity and a deep respect for the communities, they gradually built a trusted local healthcare presence."
          quotes={[
            "The growth of the business was shaped not only by professional commitment, but also by the loyalty and support of local families .",
            "The principles Mahesh brought to the profession, clinical standards, responsibility and long-term thinking, remain embedded within Anna Pharmacy Group today.",
          ]}
        />
        </div>
      </section>

      {/* ━━ SERVING COMMUNITIES ━━ */}
      <section className="md:w-[780px] mx-auto mb-12">
        <div className="bg-[#278228] px-6 md:px-16 lg:px-20 py-16 mx-6 md:mx-0 text-left rounded-xl"> 
        <h2 className="text-white text-2xl md:text-[28px] font-light mb-5">
          <span className="font-bold">Serving Communities</span> Across The UK
        </h2>
        <p className="text-green-100 text-[15px] max-w-2xl mx-auto leading-relaxed mb-8">
          Connect with Anna Pharmacy to learn more about our organization, values, and approach to responsible pharmaceutical operations. We welcome meaningful partnerships built on integrity, professionalism, and shared commitment to healthcare excellence.
        </p>
        <button className="bg-black text-white font-normal text-[15px] tracking-[0.15em] uppercase px-8 py-3 hover:bg-white hover:text-black transition-colors">
          VIEW ALL BRANCHES
        </button>
        </div>
      </section>
 

    </main>
  );
}
