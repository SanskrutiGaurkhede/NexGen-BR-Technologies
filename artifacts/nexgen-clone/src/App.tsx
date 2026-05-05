import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Courses from "./components/Courses";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Hire from "./components/Hire";
import Blog from "./components/Blog";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("home");

  const navigateTo = (id: string) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg,#08091a 0%,#0a0b1a 100%)" }}>
      <Navbar active={active} onNavigate={navigateTo} />
      {active === "home"       && <Hero onNavigate={navigateTo} />}
      {active === "about"      && <About />}
      {active === "services"   && <Services />}
      {active === "courses"    && <Courses />}
      {active === "internship" && <Internship />}
      {active === "projects"   && <Projects />}
      {active === "hire"       && <Hire />}
      {active === "blog"       && <Blog />}
      {active === "reviews"    && <Reviews />}
      {active === "contact"    && <Contact />}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
