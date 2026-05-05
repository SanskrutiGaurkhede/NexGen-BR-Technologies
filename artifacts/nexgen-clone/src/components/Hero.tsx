const TECH_STACK = ["Python", "FastAPI", "React", "Node.js", "TensorFlow", "Django", "AWS", "Docker", "MongoDB", "PostgreSQL"];

const BADGES = [
  { icon: "💻", label: "Industry-Level Courses", id: "courses" },
  { icon: "⚡", label: "Real-Time Projects", id: "projects" },
  { icon: "🏛️", label: "Internship Programs", id: "internship" },
  { icon: "🧭", label: "Career Guidance", id: "hire" },
];

const STATS = [
  { value: "200+", label: "STUDENTS TRAINED" },
  { value: "85%", label: "PLACEMENT RATE" },
  { value: "90%", label: "INTERVIEW CRACK RATE" },
  { value: "40+", label: "INDUSTRY MENTORS" },
  { value: "120+", label: "LIVE PROJECTS" },
];

function TickerRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden w-full" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
      <div
        className={`flex gap-12 whitespace-nowrap ${reverse ? "animate-ticker-reverse" : "animate-ticker"}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="text-4xl font-black tracking-tight text-white/[0.05] select-none">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Hero({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background ticker */}
      <div className="absolute inset-0 flex flex-col justify-center gap-6 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <TickerRow key={i} items={TECH_STACK} reverse={i % 2 === 1} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="relative mb-6">
          <div
            className="w-28 h-28 rounded-3xl flex items-center justify-center text-white font-black text-5xl"
            style={{ background: "linear-gradient(135deg,#6d28d9 0%,#4f46e5 100%)", boxShadow: "0 0 60px rgba(109,40,217,0.45)" }}
          >
            N
          </div>
          <div
            className="absolute top-1 right-1 w-4 h-4 rounded-full bg-emerald-400 animate-float-dot"
            style={{ boxShadow: "0 0 10px rgba(52,211,153,0.9)" }}
          />
        </div>

        <h2 className="text-3xl font-bold text-white mb-2">NexGen BR Technologies</h2>

        <div className="flex items-center gap-3 text-gray-500 text-sm tracking-widest font-medium mb-10">
          <span className="h-px w-12 bg-gray-700" />
          LEARN · BUILD · INNOVATE
          <span className="h-px w-12 bg-gray-700" />
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6 tracking-tight">
          Learn.{" "}
          <span style={{ background: "linear-gradient(90deg,#a855f7,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Build.
          </span>{" "}
          Innovate.
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mb-10">
          Empowering students with cutting-edge skills in AI, Data Science, and Full Stack Development.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {BADGES.map((badge) => (
            <button
              key={badge.label}
              onClick={() => onNavigate(badge.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <span>{badge.icon}</span>{badge.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate("internship")}
            className="px-7 py-3 rounded-full text-white font-semibold text-base transition-all hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%)", boxShadow: "0 4px 24px rgba(124,58,237,0.4)" }}
          >
            Apply for Internship →
          </button>
          <button
            onClick={() => onNavigate("courses")}
            className="px-7 py-3 rounded-full text-white font-semibold text-base border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all active:scale-95"
          >
            Explore Courses
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-5 rounded-2xl overflow-hidden border border-white/10" style={{ background: "rgba(255,255,255,0.03)" }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`flex flex-col items-center justify-center py-6 px-4 ${i < STATS.length - 1 ? "border-r border-white/10" : ""}`}>
              <span className="text-2xl font-black text-white mb-1">{stat.value}</span>
              <span className="text-[10px] text-gray-500 tracking-widest font-medium text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
