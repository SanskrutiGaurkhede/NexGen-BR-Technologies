import { useState, useEffect } from "react";
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

const SECTION_IDS = ["home", "about", "services", "courses", "internship", "projects", "hire", "blog", "reviews", "contact"];

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg,#08091a 0%,#0a0b1a 100%)" }}
    >
      <Navbar active={active} onNavigate={navigateTo} />
      <Hero onNavigate={navigateTo} />
      <About />
      <Services />
      <Courses />
      <Internship />
      <Projects />
      <Hire />
      <Blog />
      <Reviews />
      <Contact />
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
