const PILLARS = [
  {
    icon: "🎯",
    label: "Mission",
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(79,110,247,0.15)",
    text: "Bridge the gap between academic knowledge and industry — through hands-on training, internships, and live projects.",
  },
  {
    icon: "🔭",
    label: "Vision",
    color: "from-violet-500 to-purple-400",
    glow: "rgba(139,92,246,0.15)",
    text: "Create skilled professionals ready for the future of technology, equipped to lead the next wave of innovation.",
  },
  {
    icon: "💎",
    label: "Values",
    color: "from-pink-500 to-rose-400",
    glow: "rgba(236,72,153,0.15)",
    text: "Practical learning, transparent mentorship, accountability for outcomes, and respect for every student's journey.",
  },
  {
    icon: "⚙️",
    label: "Approach",
    color: "from-emerald-500 to-teal-400",
    glow: "rgba(16,185,129,0.15)",
    text: "Project-first curriculum, working-professional mentors, and continuous feedback loops grounded in real industry needs.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#08091a 0%,#0b0d1e 100%)" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-purple-400/20 bg-purple-400/5">
            About Company
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shaping the Future of{" "}
            <span style={{ background: "linear-gradient(90deg,#a855f7,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              tech talent
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            NexGen BR Technologies is a fast-growing IT training and research platform dedicated to empowering students with practical and industry-ready skills.
            We focus on bridging the gap between academic knowledge and real-world industry requirements through hands-on training, internships, and live projects.
            Our mission is to create skilled professionals ready for the future of technology.
          </p>
        </div>

        {/* What drives us */}
        <div className="mb-5 text-center">
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">What drives us</span>
          <p className="text-gray-500 text-sm mt-1">Mission, vision, and the way we work.</p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {PILLARS.map((p) => (
            <div
              key={p.label}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-white/15 transition-all duration-300"
              style={{ boxShadow: `0 0 0 0 ${p.glow}` }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${p.glow}`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${p.glow}`; }}
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-xl mb-5 shadow-lg`}>
                {p.icon}
              </div>
              <h3 className={`font-bold text-base mb-3 bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>{p.label}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Students & Professionals banner */}
        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="text-4xl">👩‍💻</div>
          <div>
            <h4 className="text-white font-bold text-lg mb-1">Students &amp; Professionals</h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              From foundational courses to research support and placement assistance — we cover every stage of your tech journey.
            </p>
          </div>
          <div className="md:ml-auto flex-shrink-0">
            <a
              href="mailto:info@nexgenbrtechnologies.com"
              className="inline-block px-6 py-3 rounded-full text-white font-semibold text-sm border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
            >
              info@nexgenbrtechnologies.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
