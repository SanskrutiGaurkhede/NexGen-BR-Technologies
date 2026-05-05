const COURSES = [
  {
    icon: "🐍",
    title: "Python Full Stack",
    color: "from-yellow-500 to-orange-400",
    glow: "rgba(234,179,8,0.2)",
    duration: "3 Months",
    skills: ["Python", "Flask", "FastAPI", "REST APIs"],
    desc: "Write clean, scalable Python backend services and automate real-world workflows.",
  },
  {
    icon: "☕",
    title: "Java Development",
    color: "from-orange-500 to-red-400",
    glow: "rgba(249,115,22,0.2)",
    duration: "3 Months",
    skills: ["Java", "Spring Boot", "Microservices", "JPA"],
    desc: "Master enterprise Java with Spring Boot and build production-grade REST APIs.",
  },
  {
    icon: "📊",
    title: "Data Science & ML",
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(79,110,247,0.2)",
    duration: "4 Months",
    skills: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
    desc: "From data wrangling to model deployment — become a job-ready data scientist.",
  },
  {
    icon: "⚛️",
    title: "React + Node.js",
    color: "from-cyan-500 to-blue-400",
    glow: "rgba(6,182,212,0.2)",
    duration: "3 Months",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    desc: "Build full-stack MERN applications with modern component architecture.",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    color: "from-violet-500 to-purple-400",
    glow: "rgba(139,92,246,0.2)",
    duration: "2 Months",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    desc: "Deploy, scale, and automate cloud infrastructure with industry best practices.",
  },
  {
    icon: "🤖",
    title: "AI & Deep Learning",
    color: "from-emerald-500 to-teal-400",
    glow: "rgba(16,185,129,0.2)",
    duration: "4 Months",
    skills: ["Python", "PyTorch", "NLP", "Computer Vision"],
    desc: "Build neural networks, fine-tune LLMs, and deploy AI models to production.",
  },
  {
    icon: "🔐",
    title: "Cyber Security",
    color: "from-red-500 to-rose-400",
    glow: "rgba(239,68,68,0.2)",
    duration: "2 Months",
    skills: ["Ethical Hacking", "CEH Prep", "Pentesting", "OSINT"],
    desc: "Hands-on ethical hacking labs and CEH exam preparation with live attack simulations.",
  },
  {
    icon: "📈",
    title: "Data Analytics",
    color: "from-pink-500 to-fuchsia-400",
    glow: "rgba(236,72,153,0.2)",
    duration: "2 Months",
    skills: ["Power BI", "SQL", "Excel", "Tableau"],
    desc: "Transform raw data into executive dashboards and business intelligence reports.",
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
            Project-first curricula built for real job descriptions. Every course ends with a deployable capstone project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-5 hover:border-white/15 transition-all duration-300 flex flex-col"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-lg mb-4 shadow-lg`}>
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
              <button className={`w-full py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${course.color} hover:opacity-90 transition-opacity`}>
                Enroll Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
