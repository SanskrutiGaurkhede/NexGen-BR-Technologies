const QUICK_LINKS = [
  { label: "About Us", id: "about" },
  { label: "Courses", id: "courses" },
  { label: "Internship", id: "internship" },
  { label: "Hire From Us", id: "hire" },
  { label: "Blog", id: "blog" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
];

const LEGAL = ["Terms of Service", "Privacy Policy", "Cookie Policy", "Refund Policy"];

export default function Footer({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8" style={{ background: "#05070f" }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <button onClick={() => onNavigate("home")} className="flex items-center gap-2 mb-6">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-base"
                style={{ background: "linear-gradient(135deg,#6d28d9 0%,#4f46e5 100%)" }}
              >
                N
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-sm">NexGen <span className="text-purple-400">BR</span></span>
                <span className="text-gray-500 text-[9px] tracking-widest">TECHNOLOGIES</span>
              </div>
            </button>
            <p className="text-gray-400 max-w-sm mb-4 text-sm leading-relaxed">
              Empowering the next generation of engineers with real-world skills, industry mentorship, and live production experience.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span className="text-cyan-400">✉</span>
              <a href="mailto:info@nexgenbrtechnologies.com" className="hover:text-cyan-400 transition-colors">info@nexgenbrtechnologies.com</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <span className="text-purple-400">📍</span>
              <span>Wardha, Nagpur, Maharashtra, India</span>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: "𝕏", label: "Twitter", href: "#" },
                { icon: "in", label: "LinkedIn", href: "https://www.linkedin.com/in/nexgen-br-technologies-6402b4408" },
                { icon: "▶", label: "YouTube", href: "#" },
                { icon: "📷", label: "Instagram", href: "#" },
              ].map((s) => (
                <a key={s.label} href={s.href} target={s.href !== "#" ? "_blank" : undefined} rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-sm">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button onClick={() => onNavigate(link.id)} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Hours */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {LEGAL.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold mt-8 mb-4">Office Hours</h4>
            <ul className="space-y-1.5 text-xs text-gray-500">
              <li className="flex justify-between gap-4"><span>Mon – Fri</span><span className="text-white font-medium">9 AM – 7 PM</span></li>
              <li className="flex justify-between gap-4"><span>Saturday</span><span className="text-white font-medium">9 AM – 5 PM</span></li>
              <li className="flex justify-between gap-4"><span>Sunday</span><span className="text-white font-medium">10 AM – 2 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2026 NexGen BR Technologies. All rights reserved.</p>
          <p className="text-gray-700 text-xs">Designed for the builders of tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
