const PILLARS = [
  { icon: "🎯", title: "Mission", desc: "To bridge the gap between academia and industry by delivering real-world technical education that leads to career outcomes — not just certificates." },
  { icon: "🌍", title: "Vision", desc: "To become India's most trusted tech training institute for students from Tier-2 and Tier-3 cities, creating 1,000+ industry-ready professionals every year." },
  { icon: "💡", title: "Approach", desc: "Project-first learning, mentor-led sprints, and industry collaboration. We don't teach theory in isolation — every concept is applied to a live product." },
  { icon: "🤝", title: "Community", desc: "A thriving alumni network of developers, data scientists, and ML engineers sharing opportunities, referrals, and knowledge with every new batch." },
];

const TEAM = [
  { initials: "RB", name: "Rushikesh Burle", role: "Founder & Lead Trainer", color: "from-purple-500 to-indigo-500", expertise: "Full Stack · AI/ML · System Design" },
  { initials: "AM", name: "Anil Meshram", role: "Data Science Mentor", color: "from-cyan-500 to-blue-500", expertise: "Python · ML · Power BI · SQL" },
  { initials: "SP", name: "Snehal Patle", role: "Web Dev Instructor", color: "from-pink-500 to-rose-500", expertise: "React · Node.js · MongoDB · AWS" },
  { initials: "VK", name: "Vijay Kaware", role: "Cloud & DevOps Lead", color: "from-emerald-500 to-teal-500", expertise: "AWS · Docker · Kubernetes · CI/CD" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#08091a 0%,#0b0d1e 100%)" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-purple-400/20 bg-purple-400/5">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who We Are &amp;{" "}
            <span style={{ background: "linear-gradient(90deg,#a855f7,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Why We Exist
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            NexGen BR Technologies is a Wardha-based tech education institute built by engineers, for aspiring engineers. We believe in learning by building — not by memorising.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {PILLARS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-purple-500/30 transition-colors">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-2">Meet the Mentors</h3>
          <p className="text-gray-500 text-sm">Working professionals who teach what they practice daily.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map((m) => (
            <div key={m.name} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-center hover:border-white/15 transition-colors">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white font-black text-xl mx-auto mb-4 shadow-lg`}>
                {m.initials}
              </div>
              <h4 className="text-white font-bold mb-0.5">{m.name}</h4>
              <p className="text-purple-400 text-xs font-semibold mb-2">{m.role}</p>
              <p className="text-gray-500 text-xs">{m.expertise}</p>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="mt-16 rounded-2xl border border-white/8 bg-white/[0.03] p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="text-4xl">📍</div>
          <div>
            <h4 className="text-white font-bold text-lg mb-1">Based in Wardha, Maharashtra</h4>
            <p className="text-gray-400 text-sm">Serving students across Nagpur, Wardha, Amravati and beyond — online &amp; offline both available. Reach us at <a href="mailto:info@nexgenbrtechnologies.com" className="text-cyan-400 hover:underline">info@nexgenbrtechnologies.com</a></p>
          </div>
          <div className="ml-auto flex-shrink-0">
            <a href="mailto:info@nexgenbrtechnologies.com"
              className="px-6 py-3 rounded-full text-white font-semibold text-sm border border-white/20 bg-white/5 hover:bg-white/10 transition-all">
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
