import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Branches = lazy(() => import("./pages/Branches"));
const Contact = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

const AboutUs = lazy(() => import("./pages/company/AboutUs"));
const TheTeam = lazy(() => import("./pages/company/TheTeam"));

function App() {
  const location = useLocation();

  return (
    <div className="font-sans">
      <Navbar />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/company/about-us" element={<AboutUs />} />
          <Route path="/company/the-team" element={<TheTeam />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Suspense>

      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;