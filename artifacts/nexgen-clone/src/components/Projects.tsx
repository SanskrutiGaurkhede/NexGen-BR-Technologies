const PROJECTS = [
  {
    tag: "AI / ML",
    color: "from-purple-500 to-indigo-500",
    tagColor: "text-purple-400 border-purple-400/20 bg-purple-400/5",
    title: "AI Resume Screener",
    desc: "NLP-powered system that scores resumes against job descriptions, ranks candidates, and generates interview shortlists automatically.",
    stack: ["Python", "FastAPI", "BERT", "React"],
    students: 4,
    live: true,
  },
  {
    tag: "Data Science",
    color: "from-cyan-500 to-blue-500",
    tagColor: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
    title: "Stock Market Dashboard",
    desc: "Real-time stock analytics dashboard with predictive models, portfolio tracking, and automated news sentiment analysis.",
    stack: ["Python", "Pandas", "Power BI", "FastAPI"],
    students: 3,
    live: true,
  },
  {
    tag: "Full Stack",
    color: "from-emerald-500 to-teal-500",
    tagColor: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
    title: "EdTech LMS Platform",
    desc: "Complete learning management system with video courses, quizzes, progress tracking, and certificate generation.",
    stack: ["React", "Node.js", "MongoDB", "AWS S3"],
    students: 6,
    live: true,
  },
  {
    tag: "Cloud & DevOps",
    color: "from-orange-500 to-amber-500",
    tagColor: "text-orange-400 border-orange-400/20 bg-orange-400/5",
    title: "Microservices E-Commerce",
    desc: "Scalable e-commerce backend with 8 microservices, Kubernetes orchestration, and full CI/CD pipeline on AWS.",
    stack: ["Java", "Spring Boot", "Docker", "K8s"],
    students: 5,
    live: false,
  },
  {
    tag: "AI / ML",
    color: "from-pink-500 to-rose-500",
    tagColor: "text-pink-400 border-pink-400/20 bg-pink-400/5",
    title: "Crop Disease Detector",
    desc: "Computer vision model that detects crop diseases from photos with 94% accuracy. Deployed as a mobile-friendly web app.",
    stack: ["Python", "TensorFlow", "React", "FastAPI"],
    students: 3,
    live: true,
  },
  {
    tag: "Full Stack",
    color: "from-violet-500 to-purple-500",
    tagColor: "text-violet-400 border-violet-400/20 bg-violet-400/5",
    title: "Real-Time Chat App",
    desc: "WhatsApp-style messaging platform with end-to-end encryption, file sharing, group chats, and read receipts.",
    stack: ["React", "Socket.io", "Node.js", "Redis"],
    students: 4,
    live: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#08091a 0%,#0b0d1e 100%)" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            120+ Live Projects{" "}
            <span style={{ background: "linear-gradient(90deg,#10b981,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Built by Students
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every student ships a real product. These aren't toy projects — they're deployed applications that employers notice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-white/15 transition-all duration-300 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${p.tagColor}`}>
                  {p.tag}
                </span>
                {p.live && (
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </span>
                )}
              </div>

              <div className={`w-full h-1 rounded-full bg-gradient-to-r ${p.color} mb-4 opacity-60`} />

              <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.stack.map((s) => (
                  <span key={s} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>👨‍💻 {p.students} students built this</span>
                <button className="text-cyan-400 font-semibold hover:underline">View →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
