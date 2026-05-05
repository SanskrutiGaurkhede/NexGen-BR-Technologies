import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Courses", id: "courses" },
  { label: "Internship", id: "internship" },
  { label: "Projects", id: "projects" },
  { label: "Hire", id: "hire" },
  { label: "Blog", id: "blog" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ active, onNavigate }: { active: string; onNavigate: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,9,26,0.97)" : "rgba(8,9,26,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      {/* Logo */}
      <button onClick={() => onNavigate("home")} className="flex items-center gap-2">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-base shadow-lg"
          style={{ background: "linear-gradient(135deg, #6d28d9 0%, #4f46e5 100%)" }}
        >
          N
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-white font-bold text-sm">
            NexGen <span className="text-purple-400">BR</span>
          </span>
          <span className="text-gray-500 text-[9px] tracking-widest font-medium">TECHNOLOGIES</span>
        </div>
      </button>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-0.5">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              active === link.id
                ? "bg-white/10 text-white border border-white/15"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate("internship")}
          className="hidden sm:block px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
          style={{ background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)" }}
        >
          Apply Now →
        </button>
        {/* Mobile menu toggle */}
        <button className="lg:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 border-t border-white/10 py-3 px-4 flex flex-col gap-1"
          style={{ background: "rgba(8,9,26,0.98)", backdropFilter: "blur(16px)" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
              className={`text-left px-4 py-2 rounded-lg text-sm font-medium ${
                active === link.id ? "bg-white/10 text-white" : "text-gray-400"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
