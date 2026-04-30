const Footer = () => {
    return(
        <>
        {/* ━━ FOOTER ━━ */}
      <footer className="bg-black py-16 flex flex-col items-center">

        {/* APG Logo SVG — exact match to screenshot */}
        <div className="mb-4"> 
          <img
            src="/footer-logo.svg"
            alt="Logo"
            className="w-[120px] md:w-[139px]"
          />
        </div> 

        {/* Green divider line */}
        <div className="w-10 h-px mb-8" style={{ backgroundColor: "#22c55e" }} />

        {/* Copyright */}
        <p className="text-white text-sm tracking-wide">
          © 2026 Anna Pharmacy. All rights reserved. Created by Haarty Hanks
        </p>
      </footer>
        </>
    );
}

export default Footer;