  {/* ━━ FOOTER LOGO ━━ */}
      <div className="bg-white flex flex-col items-center py-10 border-t border-gray-100">
        <div className="flex items-end mb-1">
          {["a","p"].map((l) => (
            <span key={l} className="text-gray-800 font-light" style={{ fontFamily:"Georgia,serif", fontSize:"2rem", lineHeight:1 }}>{l}</span>
          ))}
          <div className="relative flex items-center justify-center" style={{ width:"2.2rem", height:"2.2rem" }}>
            <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full">
              <circle cx="20" cy="20" r="17" stroke="#22c55e" strokeWidth="2" fill="none" />
            </svg>
            <span className="text-gray-800 font-light relative z-10" style={{ fontFamily:"Georgia,serif", fontSize:"2rem", lineHeight:1 }}>g</span>
          </div>
          <span className="text-green-500 font-bold ml-0.5" style={{ fontSize:"1.2rem", marginBottom:"0.8rem" }}>+</span>
        </div>
        <p className="text-gray-400 tracking-[0.25em] uppercase" style={{ fontSize:"0.5rem" }}>ANNA PHARMACY GROUP</p>
        <p className="text-gray-400 text-[10px] mt-3 tracking-wide">© 2024 Anna Pharmacy. All Rights Reserved.</p>
      </div>