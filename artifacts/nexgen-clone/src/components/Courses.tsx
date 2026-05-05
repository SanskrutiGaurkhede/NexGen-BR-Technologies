const COURSES = [
  {
    icon: "🐍",
    title: "Python Development",
    color: "from-yellow-400 to-green-400",
    glow: "rgba(250,204,21,0.25)",
    duration: "2–3 Months",
    skills: ["Python", "Flask", "FastAPI", "REST APIs"],
    desc: "Write clean, scalable Python backend services and automate real-world workflows.",
  },
  {
    icon: "☕",
    title: "Java Development",
    color: "from-orange-500 to-red-400",
    glow: "rgba(249,115,22,0.25)",
    duration: "2–3 Months",
    skills: ["Java", "Spring Boot", "Hibernate", "SQL"],
    desc: "Build enterprise-grade Java applications with industry-standard frameworks.",
  },
  {
    icon: "📊",
    title: "Data Science",
    color: "from-purple-500 to-pink-400",
    glow: "rgba(168,85,247,0.25)",
    duration: "3 Months",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
    desc: "Extract insights from real datasets and drive data-informed decisions.",
  },
  {
    icon: "🧠",
    title: "Machine Learning",
    color: "from-indigo-500 to-purple-400",
    glow: "rgba(99,102,241,0.25)",
    duration: "3 Months",
    skills: ["Scikit-learn", "TensorFlow", "Keras", "Python"],
    desc: "Train, evaluate, and deploy ML models on industry-level datasets.",
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    color: "from-fuchsia-500 to-violet-500",
    glow: "rgba(217,70,239,0.25)",
    duration: "3 Months",
    skills: ["Deep Learning", "NLP", "Computer Vision", "PyTorch"],
    desc: "Dive into cutting-edge AI techniques including LLMs, NLP, and computer vision.",
  },
  {
    icon: "📈",
    title: "Data Analyst",
    color: "from-teal-400 to-cyan-500",
    glow: "rgba(20,184,166,0.25)",
    duration: "2 Months",
    skills: ["Excel", "SQL", "Power BI", "Tableau"],
    desc: "Analyze, visualize, and report on data to inform strategic business decisions.",
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    color: "from-sky-500 to-blue-400",
    glow: "rgba(14,165,233,0.25)",
    duration: "3 Months",
    skills: ["AWS", "Azure", "GCP", "Docker"],
    desc: "Deploy, manage, and scale cloud infrastructure across AWS, Azure, and GCP.",
  },
  {
    icon: "⚙️",
    title: "DevOps",
    color: "from-green-400 to-emerald-500",
    glow: "rgba(52,211,153,0.25)",
    duration: "3 Months",
    skills: ["CI/CD", "Kubernetes", "Terraform", "Linux"],
    desc: "Automate deployment pipelines and manage infra-as-code at scale.",
  },
  {
    icon: "🔐",
    title: "Cyber Security",
    color: "from-red-500 to-orange-400",
    glow: "rgba(239,68,68,0.25)",
    duration: "3 Months",
    skills: ["Ethical Hacking", "Network Security", "VAPT", "OWASP"],
    desc: "Learn to protect systems, networks, and data from modern cyber threats.",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#08091a 0%,#0b0e20 100%)" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-purple-400/20 bg-purple-400/5">
            Courses
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industry-Ready{" "}
            <span style={{ background: "linear-gradient(90deg,#a855f7,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Courses
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pick a track. Build a portfolio. Get hired. Every course includes live projects, mentor feedback, and a verified certificate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-white/15 transition-all duration-300 flex flex-col"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${course.glow}`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-xl mb-4 shadow-lg`}>
                {course.icon}
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-white font-bold text-base">{course.title}</h3>
              </div>
              <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase mb-3">⏱ {course.duration}</span>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-grow">{course.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {course.skills.map((s) => (
                  <span key={s} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                    {s}
                  </span>
                ))}
              </div>
              <button className={`w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${course.color} hover:opacity-90 transition-opacity`}>
                Enroll Now →
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">Not sure which course to pick? <a href="mailto:info@nexgenbrtechnologies.com" className="text-purple-400 hover:underline">Contact us →</a></p>
      </div>
    </section>
  );
}
