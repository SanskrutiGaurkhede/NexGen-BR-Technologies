const SERVICES = [
  {
    icon: "🎓",
    title: "Industry-Ready Courses",
    desc: "Structured learning tracks in Web Dev, Data Science, AI/ML, Python, Java, and more — built for real job outcomes.",
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(79,110,247,0.15)",
    tag: "Learning",
  },
  {
    icon: "🛠️",
    title: "Live Project Training",
    desc: "Hands-on training on real-world projects — from concept to deployment — giving students production-level experience.",
    color: "from-violet-500 to-purple-400",
    glow: "rgba(139,92,246,0.15)",
    tag: "Projects",
  },
  {
    icon: "💼",
    title: "Internship Programs",
    desc: "Paid and unpaid internship placements across 10+ domains — with mentor support, sprints, and real deliverables.",
    color: "from-cyan-500 to-teal-400",
    glow: "rgba(6,182,212,0.15)",
    tag: "Internship",
  },
  {
    icon: "🔬",
    title: "Research Support",
    desc: "Guidance for academic research papers, thesis projects, and publication-ready work in AI, ML, and Data Science.",
    color: "from-emerald-500 to-green-400",
    glow: "rgba(16,185,129,0.15)",
    tag: "Research",
  },
  {
    icon: "🚀",
    title: "Placement Assistance",
    desc: "End-to-end placement support — resume building, mock interviews, LinkedIn optimization, and direct recruiter connects.",
    color: "from-orange-500 to-amber-400",
    glow: "rgba(249,115,22,0.15)",
    tag: "Career",
  },
  {
    icon: "🧭",
    title: "Career Counselling",
    desc: "1-on-1 sessions with industry professionals to map your career path, skill gaps, and growth roadmap.",
    color: "from-pink-500 to-rose-400",
    glow: "rgba(236,72,153,0.15)",
    tag: "Guidance",
  },
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Full-stack web application development — from responsive UI to scalable backend APIs and cloud deployment.",
    color: "from-sky-500 to-blue-400",
    glow: "rgba(14,165,233,0.15)",
    tag: "Development",
  },
  {
    icon: "📊",
    title: "Data Science & Analytics",
    desc: "Extracting business insights from complex data using Python, SQL, Power BI, and statistical modeling.",
    color: "from-indigo-500 to-violet-400",
    glow: "rgba(99,102,241,0.15)",
    tag: "Data",
  },
  {
    icon: "🤖",
    title: "AI & ML Solutions",
    desc: "Building intelligent systems with predictive models, NLP pipelines, computer vision, and LLM integrations.",
    color: "from-fuchsia-500 to-pink-400",
    glow: "rgba(217,70,239,0.15)",
    tag: "AI / ML",
  },
  {
    icon: "📚",
    title: "Full Stack Training",
    desc: "Comprehensive curriculum covering frontend frameworks, backend APIs, databases, and deployment pipelines.",
    color: "from-teal-500 to-emerald-400",
    glow: "rgba(20,184,166,0.15)",
    tag: "Training",
  },
  {
    icon: "🐍",
    title: "Python Engineering",
    desc: "Scripting, automation, Django/FastAPI backend development, and data pipeline engineering using Python.",
    color: "from-yellow-500 to-amber-400",
    glow: "rgba(245,158,11,0.15)",
    tag: "Python",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#0b0d1e 0%,#08091a 100%)" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span style={{ background: "linear-gradient(90deg,#06b6d4,#4f46e5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Get Hired
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From beginner fundamentals to production-grade projects — we offer end-to-end career development under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-7 hover:border-white/15 transition-all duration-300 cursor-default"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${svc.glow}`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center text-xl mb-5 shadow-lg`}>
                {svc.icon}
              </div>
              <span className={`text-[10px] font-bold tracking-widest uppercase mb-3 inline-block bg-gradient-to-r ${svc.color} bg-clip-text text-transparent`}>
                {svc.tag}
              </span>
              <h3 className="text-white font-bold text-lg mb-3">{svc.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
