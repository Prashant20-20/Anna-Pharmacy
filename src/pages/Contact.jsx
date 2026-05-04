import React, { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "", message: "", preference: "", agreed: false,
  });

  const [openPreference, setOpenPreference] = useState(false);

const preferenceOptions = [
  { value: "", label: "Select Communication Preference" },
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "either", label: "Either" },
];

const selectedPreference =
  preferenceOptions.find((item) => item.value === form.preference)?.label ||
  "Select Communication Preference";

  const handle = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <main className="bg-white font-sans text-gray-900 min-h-screen">

      {/* ━━ PAGE TITLE ━━ */}
      <section className="bg-[#3a3a3a] h-[200px] md:h-[470px] overflow-hidden relative">
        <p className="h-[200px] md:h-full"><img src="/images/about-main-banner.jpg" alt="About Us" className="w-full h-full object-cover opacity-20" /></p>
        <div className ="h-[60px] md:h-[470px] flex items-center flex-row w-full px-6 md:px-12 absolute top-[120px] md:top-0 md:bg-black/70">
        <h1 className="text-4xl md:text-[65px] text-white font-light" >
          <span className="font-bold">Contact</span> Us
        </h1></div>
      </section>

      {/* ━━ CONTENT ━━ */}
      <section className="px-6 md:px-16 lg:px-28 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-14 lg:gap-20">

          {/* ── LEFT: Form ── */}
          <div>
            <h2
              className="text-2xl md:text-[28px] mb-8"
            >
              <span className="font-bold">Get In Touch</span>{" "}
              <span className="font-light">With Us</span>
            </h2>

            <form onSubmit={submit} className="flex flex-col gap-0">

              {/* Row 1: First + Last name */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-700 mb-1">Your Name*</label>
                  <input
                    type="text" name="firstName" value={form.firstName} onChange={handle}
                    required
                    className="border-0 border-b border-gray-800 focus:outline-none focus:border-green-500 pb-1 text-sm bg-transparent transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-700 mb-1">Last Name*</label>
                  <input
                    type="text" name="lastName" value={form.lastName} onChange={handle}
                    required
                    className="border-0 border-b border-gray-800 focus:outline-none focus:border-green-500 pb-1 text-sm bg-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Row 2: Phone + Email */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-700 mb-1">Phone*</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handle}
                    required
                    className="border-0 border-b border-gray-800 focus:outline-none focus:border-green-500 pb-1 text-sm bg-transparent transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-700 mb-1">Email*</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handle}
                    required
                    className="border-0 border-b border-gray-800 focus:outline-none focus:border-green-500 pb-1 text-sm bg-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col mb-8">
                <label className="text-sm text-gray-700 mb-1">Message*</label>
                <textarea
                  name="message" value={form.message} onChange={handle}
                  required rows={3}
                  className="border-0 border-b border-gray-800 focus:outline-none focus:border-green-500 pb-1 text-sm bg-transparent resize-none transition-colors duration-200"
                />
              </div>

              
             {/* Communication Preference dropdown */}


          <div className="flex flex-col mb-8 relative">
            <button
              type="button"
              onClick={() => setOpenPreference(!openPreference)}
              className="w-full border-b border-gray-800 pb-2 text-sm text-gray-600 bg-transparent flex items-center justify-between text-left focus:outline-none"
            >
              <span>{selectedPreference}</span>
              <span className="text-gray-600 text-xs">▼</span>
            </button>

            {openPreference && (
              <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-md z-50">
                {preferenceOptions.map((option) => (
                  <li
                    key={option.value}
                    onClick={() => {
                      setForm((prev) => ({ ...prev, preference: option.value }));
                      setOpenPreference(false);
                    }}
                    className="text-sm text-gray-700 px-4 py-2 cursor-pointer hover:bg-blue-600 hover:text-white"
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
                  <a href="#" className="underline text-gray-800 hover:text-green-600 transition-colors">
                    privacy policy
                  </a>
                </label>
              </div>

              {/* reCAPTCHA placeholder */}
              <div
                className="flex items-center gap-3 border border-gray-300 rounded-sm px-4 py-3 mb-8 bg-gray-50"
                style={{ maxWidth: "300px" }}
              >
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
              <button
                type="submit"
                className="bg-[#278228] hover:bg-black text-white font-bold text-sm tracking-widest uppercase px-8 py-4 transition-colors duration-200 self-start"
                style={{ borderRadius: "4px" }}
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* ── RIGHT: Info ── */}
          <div className="flex flex-col gap-8 lg:pt-12">

            {/* Address */}
            <div>
              <h3
                className="text-2xl md:text-[28px] font-bold mb-3"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Anna Pharmacy
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                398 Greenwrythe Lane<br />
                Carshalton<br />
                SM5 1JF<br />
                United Kingdom
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3
                className="text-xl md:text-[28px]  font-bold mb-2"
              >
                Contact
              </h3>
              <p className="text-sm text-gray-700">
                E. <a href="mailto:info@annapharmacy.com" className="hover:text-green-600 transition-colors">info@annapharmacy.com</a>
              </p>
              <p className="text-sm text-gray-700">
                T. <a href="tel:02086400404" className="hover:text-green-600 transition-colors">020 8640 0404</a>
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-900 hover:bg-green-600 flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-900 hover:bg-green-600 flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>

            {/* QR Code box */}
            <div
              className="flex items-center gap-4 border border-gray-200 rounded-sm px-4 py-4"
              style={{ maxWidth: "280px" }}
            >
              {/* QR placeholder */}
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

            {/* View All Branches button */}
            <button
              className="bg-gray-900 hover:bg-gray-700 text-white font-bold text-sm tracking-widest uppercase px-6 py-4 transition-colors duration-200 text-center"
              style={{ maxWidth: "280px", borderRadius: "4px" }}
            >
              VIEW ALL BRANCHES
            </button>
          </div>
        </div>
      </section>

       

    </main>
  );
}
