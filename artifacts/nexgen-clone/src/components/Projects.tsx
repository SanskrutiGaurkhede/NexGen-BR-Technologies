const mono = { fontFamily: "monospace" } as const;

const PROJECTS = [
  {
    tag: "AI / ML", color: "from-purple-500 to-indigo-500", tagColor: "text-purple-400 border-purple-400/20 bg-purple-400/5",
    title: "AI Resume Screener",
    desc: "NLP-powered system that scores resumes against job descriptions, ranks candidates, and generates interview shortlists automatically.",
    stack: ["Python", "FastAPI", "BERT", "React"], students: 4, live: true,
    visual: (
      <svg viewBox="0 0 320 160" className="w-full h-full">
        <rect width="320" height="160" fill="#0a0515" />
        <rect x="16" y="12" width="145" height="136" rx="6" fill="#100a2e" stroke="#6d28d9" strokeWidth="0.8" />
        <text x="28" y="30" fill="#a78bfa" fontSize="8" style={mono} fontWeight="bold">RESUME SCORING · NLP</text>
        {[["Rahul Kumar","92%","#22c55e"],["Priya Singh","87%","#84cc16"],["Amit Patel","74%","#f59e0b"],["Sonia Roy","61%","#f97316"]].map(([n,s,c],i)=>(
          <g key={n}>
            <rect x="28" y={40+i*26} width="115" height="18" rx="4" fill="#1a1040" />
            <text x="34" y={53+i*26} fill="#d1d5db" fontSize="7" style={mono}>{n}</text>
            <text x="118" y={53+i*26} fill={c as string} fontSize="7" style={mono} fontWeight="bold">{s}</text>
          </g>
        ))}
        <rect x="169" y="12" width="135" height="136" rx="6" fill="#050f1a" stroke="#4f46e5" strokeWidth="0.8" />
        <text x="181" y="30" fill="#818cf8" fontSize="8" style={mono} fontWeight="bold">BERT MATCHING</text>
        {["Skills alignment","Experience match","Keyword density","ATS score"].map((l,i)=>(
          <g key={l}>
            <text x="181" y={46+i*18} fill="#6b7280" fontSize="6.5" style={mono}>{l}</text>
            <rect x="247" y={38+i*18} width={[58,44,52,36][i]} height="8" rx="2" fill={["#4f46e5","#7c3aed","#6d28d9","#a855f7"][i]} opacity="0.7" />
          </g>
        ))}
        <rect x="169" y="118" width="135" height="22" rx="4" fill="#0f172a" stroke="#22c55e" strokeWidth="0.8" />
        <text x="236" y="132" fill="#22c55e" fontSize="7" style={mono} textAnchor="middle" fontWeight="bold">✓ Deployed · FastAPI</text>
      </svg>
    ),
  },
  {
    tag: "Data Science", color: "from-cyan-500 to-blue-500", tagColor: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
    title: "Stock Market Dashboard",
    desc: "Real-time stock analytics dashboard with predictive models, portfolio tracking, and automated news sentiment analysis.",
    stack: ["Python", "Pandas", "Power BI", "FastAPI"], students: 3, live: true,
    visual: (
      <svg viewBox="0 0 320 160" className="w-full h-full">
        <rect width="320" height="160" fill="#00060f" />
        <text x="16" y="20" fill="#06b6d4" fontSize="8" style={mono} fontWeight="bold">STOCK MARKET ANALYTICS · LIVE</text>
        {[72,58,85,63,90,78,110,95,88,115,102,130].map((h,i)=>(
          <g key={i}>
            <rect x={16+i*23} y={145-h} width="16" height={h} rx="2" fill={i===11?"#06b6d4":`rgba(6,182,212,${0.2+i*0.05})`} />
          </g>
        ))}
        <line x1="16" y1="95" x2="295" y2="95" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="4,3" opacity="0.4" />
        <rect x="16" y="28" width="60" height="22" rx="4" fill="#042830" stroke="#06b6d4" strokeWidth="0.5" />
        <text x="46" y="38" fill="#22d3ee" fontSize="7" style={mono} textAnchor="middle" fontWeight="bold">NIFTY 50</text>
        <text x="46" y="46" fill="#4ade80" fontSize="6" style={mono} textAnchor="middle">+2.4%</text>
        <rect x="84" y="28" width="60" height="22" rx="4" fill="#04150a" stroke="#22c55e" strokeWidth="0.5" />
        <text x="114" y="38" fill="#4ade80" fontSize="7" style={mono} textAnchor="middle" fontWeight="bold">SENSEX</text>
        <text x="114" y="46" fill="#4ade80" fontSize="6" style={mono} textAnchor="middle">+1.8%</text>
        <rect x="152" y="28" width="60" height="22" rx="4" fill="#15050a" stroke="#ef4444" strokeWidth="0.5" />
        <text x="182" y="38" fill="#f87171" fontSize="7" style={mono} textAnchor="middle" fontWeight="bold">USDINR</text>
        <text x="182" y="46" fill="#f87171" fontSize="6" style={mono} textAnchor="middle">-0.3%</text>
      </svg>
    ),
  },
  {
    tag: "Full Stack", color: "from-emerald-500 to-teal-500", tagColor: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
    title: "EdTech LMS Platform",
    desc: "Complete learning management system with video courses, quizzes, progress tracking, and certificate generation.",
    stack: ["React", "Node.js", "MongoDB", "AWS S3"], students: 6, live: true,
    visual: (
      <svg viewBox="0 0 320 160" className="w-full h-full">
        <rect width="320" height="160" fill="#000f0a" />
        <text x="16" y="20" fill="#10b981" fontSize="8" style={mono} fontWeight="bold">LMS PLATFORM · 6 STUDENTS BUILT THIS</text>
        <rect x="16" y="28" width="90" height="124" rx="6" fill="#031a0f" stroke="#065f46" strokeWidth="0.8" />
        <text x="27" y="45" fill="#34d399" fontSize="7" style={mono} fontWeight="bold">COURSES</text>
        {["Python Full Stack","Machine Learning","React + Node.js","DevOps Basics","UI/UX Design"].map((c,i)=>(
          <g key={c}>
            <rect x="27" y={52+i*18} width="68" height="13" rx="3" fill={i===0?"#064e3b":"#042f1e"} />
            <text x="32" y={62+i*18} fill={i===0?"#6ee7b7":"#4b5563"} fontSize="6" style={mono}>{c.slice(0,16)}</text>
          </g>
        ))}
        <rect x="116" y="28" width="188" height="124" rx="6" fill="#031a0f" stroke="#065f46" strokeWidth="0.8" />
        <text x="128" y="45" fill="#34d399" fontSize="8" style={mono} fontWeight="bold">Python Full Stack</text>
        <rect x="128" y="52" width="150" height="6" rx="3" fill="#1f2d25" />
        <rect x="128" y="52" width="98" height="6" rx="3" fill="#10b981" />
        <text x="283" y="58" fill="#6ee7b7" fontSize="6" style={mono}>65%</text>
        {["Week 1: HTML/CSS","Week 2: Python Basics","Week 3: Django API","Week 4: React UI"].map((w,i)=>(
          <g key={w}>
            <circle cx="132" cy={74+i*18} r="4" fill={i<2?"#10b981":"#1f2d25"} stroke={i===2?"#10b981":"none"} strokeWidth="1" />
            <text x="142" y={78+i*18} fill={i<2?"#d1d5db":"#4b5563"} fontSize="6.5" style={mono}>{w}</text>
          </g>
        ))}
        <rect x="128" y="140" width="68" height="6" rx="3" fill="#0d4429" />
        <text x="162" y="146" fill="#34d399" fontSize="5.5" style={mono} textAnchor="middle">CERTIFICATE READY</text>
      </svg>
    ),
  },
  {
    tag: "Cloud & DevOps", color: "from-orange-500 to-amber-500", tagColor: "text-orange-400 border-orange-400/20 bg-orange-400/5",
    title: "Microservices E-Commerce",
    desc: "Scalable e-commerce backend with 8 microservices, Kubernetes orchestration, and full CI/CD pipeline on AWS.",
    stack: ["Java", "Spring Boot", "Docker", "K8s"], students: 5, live: false,
    visual: (
      <svg viewBox="0 0 320 160" className="w-full h-full">
        <rect width="320" height="160" fill="#0a0500" />
        <text x="16" y="18" fill="#f97316" fontSize="8" style={mono} fontWeight="bold">MICROSERVICES · K8S · AWS</text>
        {[
          {x:16,y:28,label:"Auth",c:"#7c3aed"},{x:82,y:28,label:"Orders",c:"#f97316"},
          {x:148,y:28,label:"Products",c:"#06b6d4"},{x:220,y:28,label:"Payment",c:"#22c55e"},
          {x:16,y:88,label:"Cart",c:"#f59e0b"},{x:82,y:88,label:"Notify",c:"#ec4899"},
          {x:148,y:88,label:"Search",c:"#a855f7"},{x:220,y:88,label:"Analytics",c:"#10b981"},
        ].map(s=>(
          <g key={s.label}>
            <rect x={s.x} y={s.y} width="54" height="30" rx="4" fill="#111827" stroke={s.c} strokeWidth="0.8" />
            <text x={s.x+27} y={s.y+12} fill={s.c} fontSize="5.5" style={mono} textAnchor="middle" fontWeight="bold">⬡ {s.label}</text>
            <text x={s.x+27} y={s.y+23} fill="#4b5563" fontSize="5" style={mono} textAnchor="middle">Spring Boot</text>
          </g>
        ))}
        <rect x="16" y="136" width="288" height="18" rx="4" fill="#0c1a0a" stroke="#22c55e" strokeWidth="0.8" />
        <text x="160" y="148" fill="#22c55e" fontSize="6.5" style={mono} textAnchor="middle" fontWeight="bold">GitHub Actions CI/CD → Docker Hub → EKS Cluster</text>
      </svg>
    ),
  },
  {
    tag: "AI / ML", color: "from-pink-500 to-rose-500", tagColor: "text-pink-400 border-pink-400/20 bg-pink-400/5",
    title: "Crop Disease Detector",
    desc: "Computer vision model that detects crop diseases from photos with 94% accuracy. Deployed as a mobile-friendly web app.",
    stack: ["Python", "TensorFlow", "React", "FastAPI"], students: 3, live: true,
    visual: (
      <svg viewBox="0 0 320 160" className="w-full h-full">
        <rect width="320" height="160" fill="#0a0005" />
        <text x="16" y="18" fill="#f472b6" fontSize="8" style={mono} fontWeight="bold">CROP DISEASE DETECTOR · 94% ACC</text>
        <rect x="16" y="26" width="120" height="120" rx="6" fill="#1a0a10" stroke="#be185d" strokeWidth="0.8" />
        <text x="76" y="58" fill="#f472b6" fontSize="24" style={{fontFamily:"sans-serif"}} textAnchor="middle">🌱</text>
        <text x="76" y="80" fill="#ec4899" fontSize="7" style={mono} textAnchor="middle" fontWeight="bold">ANALYZING…</text>
        {[["Late Blight","94.2%","#ef4444"],["Early Blight","4.1%","#f97316"],["Healthy","1.7%","#22c55e"]].map(([l,v,c],i)=>(
          <g key={l as string}>
            <text x="24" y={100+i*16} fill="#9ca3af" fontSize="6.5" style={mono}>{l}</text>
            <rect x="82" y={94+i*16} width="46" height="8" rx="2" fill="#1f0d15" />
            <rect x="82" y={94+i*16} width={[42,2,1][i]} height="8" rx="2" fill={c as string} opacity="0.8" />
            <text x="132" y={102+i*16} fill={c as string} fontSize="6.5" style={mono}>{v}</text>
          </g>
        ))}
        <rect x="145" y="26" width="159" height="120" rx="6" fill="#050f0a" stroke="#16a34a" strokeWidth="0.8" />
        <text x="157" y="42" fill="#4ade80" fontSize="7.5" style={mono} fontWeight="bold">CNN Model · TensorFlow</text>
        {["Conv2D → MaxPool","ResNet50 backbone","Dropout: 0.3","Softmax output"].map((l,i)=>(
          <g key={l}>
            <rect x="157" y={50+i*20} width="130" height="14" rx="3" fill={["#0f2d1a","#0c2215","#091a0f","#071308"][i]} />
            <text x="163" y={61+i*20} fill={["#4ade80","#34d399","#6ee7b7","#86efac"][i]} fontSize="6.5" style={mono}>{l}</text>
          </g>
        ))}
        <rect x="157" y="138" width="130" height="6" rx="2" fill="#064e3b" />
        <text x="222" y="144" fill="#10b981" fontSize="5.5" style={mono} textAnchor="middle">FastAPI + React · Live</text>
      </svg>
    ),
  },
  {
    tag: "Full Stack", color: "from-violet-500 to-purple-500", tagColor: "text-violet-400 border-violet-400/20 bg-violet-400/5",
    title: "Real-Time Chat App",
    desc: "WhatsApp-style messaging platform with end-to-end encryption, file sharing, group chats, and read receipts.",
    stack: ["React", "Socket.io", "Node.js", "Redis"], students: 4, live: true,
    visual: (
      <svg viewBox="0 0 320 160" className="w-full h-full">
        <rect width="320" height="160" fill="#06000f" />
        <text x="16" y="18" fill="#a78bfa" fontSize="8" style={mono} fontWeight="bold">REAL-TIME CHAT · E2E ENCRYPTED</text>
        <rect x="16" y="26" width="85" height="126" rx="6" fill="#0d0a1e" stroke="#4c1d95" strokeWidth="0.8" />
        {[{n:"Priya S",t:"2m",last:"Hey! Deployed 🚀",c:"#a78bfa"},{n:"Rahul K",t:"8m",last:"PR merged ✅",c:"#818cf8"},{n:"Team Dev",t:"14m",last:"Standup in 5…",c:"#6d28d9"}].map((u,i)=>(
          <g key={u.n}>
            <circle cx="30" cy={44+i*32} r="10" fill={u.c} fillOpacity="0.3" />
            <text x="30" y={48+i*32} fill={u.c} fontSize="7" style={mono} textAnchor="middle">{u.n[0]}</text>
            <text x="45" y={42+i*32} fill="#e5e7eb" fontSize="6.5" style={mono}>{u.n}</text>
            <text x="45" y={53+i*32} fill="#4b5563" fontSize="5.5" style={mono}>{u.last.slice(0,16)}</text>
          </g>
        ))}
        <rect x="109" y="26" width="195" height="126" rx="6" fill="#070510" stroke="#4c1d95" strokeWidth="0.8" />
        {[{msg:"API server is live 🚀",own:false,c:"#1f1b40"},{msg:"Sick! Merging now",own:true,c:"#2d1b69"},{msg:"Sockets connected ✓",own:false,c:"#1f1b40"},{msg:"Let's ship it!🔥",own:true,c:"#2d1b69"}].map((m,i)=>(
          <g key={i}>
            <rect x={m.own ? 170 : 117} y={38+i*24} width={Math.min(m.msg.length*5.5,100)} height="16" rx="4" fill={m.c} />
            <text x={m.own ? 176 : 123} y={50+i*24} fill="#d1d5db" fontSize="6" style={mono}>{m.msg}</text>
          </g>
        ))}
        <rect x="117" y="136" width="179" height="11" rx="4" fill="#0d0a1e" stroke="#4c1d95" strokeWidth="0.5" />
        <text x="127" y="145" fill="#4b5563" fontSize="6" style={mono}>Type a message…</text>
        <text x="286" y="145" fill="#7c3aed" fontSize="7" style={mono}>➤</text>
      </svg>
    ),
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
            <div key={p.title} className="group rounded-2xl border border-white/8 bg-white/[0.03] hover:border-white/15 transition-all duration-300 flex flex-col overflow-hidden">
              {/* Visual */}
              <div className="h-44 overflow-hidden flex-shrink-0 bg-black">
                {p.visual}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${p.tagColor}`}>{p.tag}</span>
                  {p.live && (
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />LIVE
                    </span>
                  )}
                </div>
                <div className={`w-full h-1 rounded-full bg-gradient-to-r ${p.color} mb-4 opacity-60`} />
                <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">{s}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>👨‍💻 {p.students} students built this</span>
                  <button className="text-cyan-400 font-semibold hover:underline">View →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
