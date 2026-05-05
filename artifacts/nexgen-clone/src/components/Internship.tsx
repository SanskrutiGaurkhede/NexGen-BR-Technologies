const DOMAINS = [
  { icon: "🤖", name: "AI / Machine Learning", spots: "5 spots left", color: "text-purple-400" },
  { icon: "📊", name: "Data Science & Analytics", spots: "3 spots left", color: "text-cyan-400" },
  { icon: "⚛️", name: "Full Stack Web Dev", spots: "8 spots left", color: "text-blue-400" },
  { icon: "☁️", name: "Cloud & DevOps", spots: "4 spots left", color: "text-emerald-400" },
  { icon: "🔐", name: "Cyber Security", spots: "2 spots left", color: "text-red-400" },
  { icon: "📱", name: "Mobile App Dev", spots: "6 spots left", color: "text-orange-400" },
];

const STEPS = [
  { step: "01", title: "Apply Online", desc: "Fill the internship application form with your background and preferred domain." },
  { step: "02", title: "Screening Call", desc: "A 15-min call with our mentor team to assess your goals and current level." },
  { step: "03", title: "Onboarding Sprint", desc: "Join the current batch — get your project brief, tools, and mentor assignment." },
  { step: "04", title: "Build & Ship", desc: "Work on a real product sprint, commit code daily, and present your work." },
  { step: "05", title: "Certificate & Referral", desc: "Receive an industry-recognised certificate and placement referral letter." },
];

const PERKS = [
  { icon: "📜", title: "Industry Certificate", desc: "Verified certificate signed by working engineers." },
  { icon: "💰", title: "Stipend (Select Roles)", desc: "Paid internships available for top performers." },
  { icon: "🔗", title: "LinkedIn Endorsement", desc: "Mentor endorsements directly on your profile." },
  { icon: "📁", title: "Portfolio Projects", desc: "Deploy real products for your GitHub & resume." },
  { icon: "🎯", title: "Placement Support", desc: "Direct referrals to our hiring partner companies." },
  { icon: "🧑‍🏫", title: "Mentor Access", desc: "1-on-1 sessions with senior engineers every week." },
];

export default function Internship() {
  return (
    <section id="internship" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#0b0e20 0%,#08091a 100%)" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            Internship
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Work.{" "}
            <span style={{ background: "linear-gradient(90deg,#06b6d4,#4f46e5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Real Experience.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our internship program places you on live product sprints with working engineers — not toy exercises.
          </p>
        </div>

        {/* Domains */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {DOMAINS.map((d) => (
            <div key={d.name} className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 hover:border-white/15 transition-colors">
              <span className="text-3xl">{d.icon}</span>
              <div>
                <h4 className="text-white font-semibold text-sm">{d.name}</h4>
                <span className={`text-[11px] font-bold ${d.color}`}>{d.spots}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <h3 className="text-2xl font-bold text-white mb-8 text-center">How It Works</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-16">
          {STEPS.map((s, i) => (
            <div key={s.step} className="flex-1 rounded-2xl border border-white/8 bg-white/[0.03] p-5 relative">
              <span className="text-4xl font-black text-white/5 absolute top-4 right-4">{s.step}</span>
              <span className="text-purple-400 font-black text-sm mb-3 block">{s.step}</span>
              <h4 className="text-white font-bold mb-2">{s.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-gray-700 text-xl z-10">›</div>
              )}
            </div>
          ))}
        </div>

        {/* Perks */}
        <h3 className="text-2xl font-bold text-white mb-8 text-center">What You Get</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {PERKS.map((p) => (
            <div key={p.title} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5">
              <span className="text-2xl">{p.icon}</span>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">{p.title}</h4>
                <p className="text-gray-500 text-xs">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            className="px-10 py-4 rounded-full text-white font-bold text-lg transition-all hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%)", boxShadow: "0 4px 32px rgba(124,58,237,0.4)" }}
          >
            Apply for Internship →
          </button>
          <p className="text-gray-600 text-sm mt-3">Rolling admissions — next batch starts soon</p>
        </div>
      </div>
    </section>
  );
}
