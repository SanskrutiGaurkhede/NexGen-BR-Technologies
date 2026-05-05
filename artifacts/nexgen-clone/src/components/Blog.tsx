import { useState } from "react";

const CATEGORIES = ["All", "Career Guidance", "AI & ML Tutorial", "Data Science Tips", "Interview Prep", "Web Dev", "Cloud & DevOps"];

const BLOGS = [
  {
    category: "Career Guidance", featured: true, catColor: "text-emerald-400",
    title: "How to Crack Your First Data Science Interview in 2026",
    snippet: "A field-tested playbook covering DSA, ML fundamentals, SQL, and behavioral rounds — from NexGen mentors.",
    date: "Feb 10, 2026", readTime: "6 min",
    visual: "ds-interview",
  },
  {
    category: "AI & ML Tutorial", featured: false, catColor: "text-purple-400",
    title: "Transformers Explained: From Attention to Production",
    snippet: "Demystifying self-attention with intuitive analogies, code, and deployment patterns that work in prod.",
    date: "Feb 04, 2026", readTime: "9 min",
    visual: "transformer",
  },
  {
    category: "Data Science Tips", featured: false, catColor: "text-cyan-400",
    title: "5 Power BI Tricks Senior Analysts Use Daily",
    snippet: "DAX shortcuts, performance tuning, and dashboard storytelling techniques every analyst should know.",
    date: "Jan 28, 2026", readTime: "5 min",
    visual: "powerbi",
  },
  {
    category: "Interview Prep", featured: false, catColor: "text-orange-400",
    title: "FAANG Interview Roadmap (Indian Edition)",
    snippet: "Month-by-month plan blending DSA, system design, and storytelling for Google, Amazon & Microsoft.",
    date: "Jan 21, 2026", readTime: "11 min",
    visual: "faang",
  },
  {
    category: "Data Science Tips", featured: false, catColor: "text-cyan-400",
    title: "From Excel to Python: A 30-Day Migration Plan",
    snippet: "How to transition smoothly from spreadsheet workflows to Python-powered data analysis and automation.",
    date: "Jan 12, 2026", readTime: "7 min",
    visual: "excel-python",
  },
  {
    category: "Career Guidance", featured: false, catColor: "text-emerald-400",
    title: "Resume Hacks That Got Our Students Interviews at TCS, Infosys & Wipro",
    snippet: "Concrete bullet-point patterns, project framing, and ATS-friendly templates used by placed students.",
    date: "Jan 03, 2026", readTime: "4 min",
    visual: "resume",
  },
  {
    category: "Cloud & DevOps", featured: false, catColor: "text-violet-400",
    title: "Docker + Kubernetes for Beginners: Deploy Your First App",
    snippet: "Step-by-step guide to containerise a Node.js app and deploy it to a Kubernetes cluster — no prior DevOps knowledge needed.",
    date: "Dec 20, 2025", readTime: "10 min",
    visual: "docker",
  },
  {
    category: "Web Dev", featured: false, catColor: "text-blue-400",
    title: "Build Production-Grade REST APIs with Python FastAPI",
    snippet: "Authentication, rate limiting, async DB queries, and auto-generated docs — all in one FastAPI project.",
    date: "Dec 14, 2025", readTime: "9 min",
    visual: "fastapi",
  },
  {
    category: "Cloud & DevOps", featured: false, catColor: "text-violet-400",
    title: "AWS Free Tier: A Student's Complete Guide to Cloud Deployment",
    snippet: "Use EC2, S3, RDS, Lambda and CloudFront for free — host your portfolio projects without spending a rupee.",
    date: "Dec 07, 2025", readTime: "6 min",
    visual: "aws",
  },
];

// Inline SVG visual cards per blog type
function BlogVisual({ type }: { type: string }) {
  const base = "w-full h-full flex items-center justify-center";
  const mono = { fontFamily: "monospace" };

  if (type === "ds-interview") return (
    <svg viewBox="0 0 320 160" className={base}>
      <rect width="320" height="160" fill="#0c1a2e" />
      <rect x="20" y="20" width="130" height="120" rx="8" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
      <text x="32" y="40" fill="#06b6d4" fontSize="8" style={mono} fontWeight="bold">INTERVIEW QUESTION BANK</text>
      <text x="32" y="52" fill="#374151" fontSize="7" style={mono}>DATA SCIENCE</text>
      {["Q: Explain overfitting & regularization","Q: What is gradient descent?","Q: Bias-variance tradeoff?","Q: Explain PCA with example"].map((q, i) => (
        <g key={i}>
          <rect x="32" y={62 + i * 20} width="100" height="14" rx="3" fill={i === 0 ? "#1e3a5f" : "#0d1b2a"} />
          <text x="38" y={72 + i * 20} fill={i === 0 ? "#60a5fa" : "#4b5563"} fontSize="6" style={mono}>{q.slice(0, 28)}</text>
        </g>
      ))}
      <rect x="170" y="20" width="130" height="120" rx="8" fill="#0f172a" stroke="#1e3a5f" strokeWidth="1" />
      <text x="182" y="38" fill="#10b981" fontSize="8" style={mono} fontWeight="bold">FAANG ROADMAP</text>
      {["Month 1 · DSA Foundations","Month 2 · Advanced DS","Month 3 · System Design","Month 4 · Mock Interviews"].map((s, i) => (
        <g key={i}>
          <circle cx="188" cy={52 + i * 22} r="4" fill={["#7c3aed","#8b5cf6","#06b6d4","#10b981"][i]} />
          <text x="197" y={56 + i * 22} fill="#9ca3af" fontSize="6.5" style={mono}>{s}</text>
        </g>
      ))}
    </svg>
  );

  if (type === "transformer") return (
    <svg viewBox="0 0 320 160" className={base}>
      <rect width="320" height="160" fill="#0a0f1e" />
      <text x="16" y="22" fill="#8b5cf6" fontSize="9" style={mono} fontWeight="bold">ATTENTION MECHANISM</text>
      {[["Query","#a78bfa"],["Key","#60a5fa"],["Value","#34d399"]].map(([label, color], i) => (
        <g key={label}>
          <rect x={16 + i * 90} y="32" width="70" height="24" rx="4" fill="#1a1040" stroke={color as string} strokeWidth="0.8" />
          <text x={51 + i * 90} y="48" fill={color as string} fontSize="8" style={mono} textAnchor="middle">{label}</text>
        </g>
      ))}
      <rect x="80" y="72" width="160" height="30" rx="6" fill="#1e1b4b" stroke="#6d28d9" strokeWidth="1" />
      <text x="160" y="91" fill="#a78bfa" fontSize="9" style={mono} textAnchor="middle" fontWeight="bold">Scaled Dot-Product Attention</text>
      <rect x="110" y="118" width="100" height="24" rx="6" fill="#0d2a1e" stroke="#059669" strokeWidth="0.8" />
      <text x="160" y="133" fill="#34d399" fontSize="8" style={mono} textAnchor="middle">Output → Production</text>
      {[80, 130, 180, 230].map((x, i) => <line key={i} x1={x} y1="56" x2={x} y2="72" stroke="#6d28d9" strokeWidth="0.8" strokeDasharray="3,2" />)}
      <line x1="160" y1="102" x2="160" y2="118" stroke="#059669" strokeWidth="0.8" strokeDasharray="3,2" />
    </svg>
  );

  if (type === "powerbi") return (
    <svg viewBox="0 0 320 160" className={base}>
      <rect width="320" height="160" fill="#0a0f1e" />
      <text x="16" y="22" fill="#f59e0b" fontSize="9" style={mono} fontWeight="bold">Power BI · DASHBOARD</text>
      <text x="16" y="34" fill="#4b5563" fontSize="7" style={mono}>USERS: LAST 7 DAYS USING MEDIAN</text>
      {[60,80,50,90,70,110,95].map((h, i) => (
        <g key={i}>
          <rect x={20 + i * 38} y={145 - h} width="26" height={h} rx="3" fill={`rgba(245,158,11,${0.3 + i * 0.1})`} />
          <text x={33 + i * 38} y="155" fill="#4b5563" fontSize="7" style={mono} textAnchor="middle">{["M","T","W","T","F","S","S"][i]}</text>
        </g>
      ))}
      <line x1="16" y1="80" x2="304" y2="80" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="4,3" opacity="0.4" />
      <text x="290" y="77" fill="#f59e0b" fontSize="6" style={mono}>AVG</text>
    </svg>
  );

  if (type === "faang") return (
    <svg viewBox="0 0 320 160" className={base}>
      <rect width="320" height="160" fill="#07090f" />
      <text x="16" y="22" fill="#f97316" fontSize="9" style={mono} fontWeight="bold">FAANG INTERVIEW ROADMAP · INDIAN EDITION</text>
      {[
        { x: 20, y: 40, label: "Month 1", sub: "DSA Basics", c: "#7c3aed" },
        { x: 100, y: 40, label: "Month 2", sub: "Advanced DS", c: "#8b5cf6" },
        { x: 180, y: 40, label: "Month 3", sub: "System Design", c: "#06b6d4" },
        { x: 260, y: 40, label: "Month 4", sub: "Mock + Apply", c: "#10b981" },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x + 28} cy={n.y + 16} r="16" fill={n.c} fillOpacity="0.15" stroke={n.c} strokeWidth="1.5" />
          <text x={n.x + 28} y={n.y + 20} fill={n.c} fontSize="9" style={mono} fontWeight="bold" textAnchor="middle">{i + 1}</text>
          <text x={n.x + 28} y={n.y + 44} fill="#e5e7eb" fontSize="7" style={mono} textAnchor="middle">{n.label}</text>
          <text x={n.x + 28} y={n.y + 54} fill="#6b7280" fontSize="6" style={mono} textAnchor="middle">{n.sub}</text>
          {i < 3 && <line x1={n.x + 44} y1={n.y + 16} x2={n.x + 100} y2={n.y + 16} stroke={n.c} strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />}
        </g>
      ))}
      <rect x="16" y="110" width="288" height="36" rx="6" fill="#0f1a2e" stroke="#f97316" strokeWidth="0.8" />
      <text x="160" y="132" fill="#f97316" fontSize="8" style={mono} textAnchor="middle" fontWeight="bold">Excel Workbook · Python Script · Resume Template</text>
    </svg>
  );

  if (type === "excel-python") return (
    <svg viewBox="0 0 320 160" className={base}>
      <rect width="320" height="160" fill="#07090f" />
      <rect x="16" y="20" width="130" height="120" rx="6" fill="#052e16" stroke="#16a34a" strokeWidth="0.8" />
      <text x="28" y="38" fill="#4ade80" fontSize="8" style={mono} fontWeight="bold">Excel Workbook</text>
      {[["=VLOOKUP(A2,B:D,3,0)","#86efac"],["=SUMIFS(...)","#4ade80"],["Pivot Table","#22c55e"],["Power Query","#16a34a"]].map(([t, c], i) => (
        <text key={i} x="28" y={55 + i * 18} fill={c as string} fontSize="7.5" style={mono}>{t}</text>
      ))}
      <rect x="174" y="20" width="130" height="120" rx="6" fill="#1a0a2e" stroke="#7c3aed" strokeWidth="0.8" />
      <text x="186" y="38" fill="#a78bfa" fontSize="8" style={mono} fontWeight="bold">Python Script</text>
      {["import pandas as pd","df = pd.read_excel(...)","df.pivot_table(...)","df.to_csv('out.csv')"].map((line, i) => (
        <text key={i} x="186" y={55 + i * 18} fill={["#818cf8","#6ee7b7","#fbbf24","#f472b6"][i]} fontSize="7" style={mono}>{line}</text>
      ))}
      <path d="M 148 80 L 172 80" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr)" />
      <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" /></marker></defs>
      <text x="155" y="76" fill="#94a3b8" fontSize="7" style={mono}>30d</text>
    </svg>
  );

  if (type === "resume") return (
    <svg viewBox="0 0 320 160" className={base}>
      <rect width="320" height="160" fill="#07090f" />
      <rect x="50" y="10" width="220" height="140" rx="6" fill="#0d1b2a" stroke="#1e3a5f" strokeWidth="1" />
      <rect x="50" y="10" width="220" height="32" rx="6" fill="#1e3a5f" />
      <text x="160" y="24" fill="#fff" fontSize="10" style={mono} fontWeight="bold" textAnchor="middle">Rajesh Kumar</text>
      <text x="160" y="36" fill="#93c5fd" fontSize="6.5" style={mono} textAnchor="middle">Full Stack Developer | Python | React | ML</text>
      <text x="66" y="58" fill="#10b981" fontSize="7" style={mono} fontWeight="bold">EXPERIENCE</text>
      <text x="66" y="70" fill="#d1d5db" fontSize="6" style={mono}>• Built ML pipeline reducing inference time by 40%</text>
      <text x="66" y="82" fill="#d1d5db" fontSize="6" style={mono}>• React dashboard serving 10K+ users, 99.9% uptime</text>
      <text x="66" y="100" fill="#f59e0b" fontSize="7" style={mono} fontWeight="bold">SKILLS</text>
      {["Python","FastAPI","React","Node.js","MongoDB","AWS"].map((s, i) => (
        <g key={s}>
          <rect x={66 + (i % 3) * 68} y={110 + Math.floor(i / 3) * 18} width={58} height={12} rx="3" fill="#1e293b" />
          <text x={95 + (i % 3) * 68} y={120 + Math.floor(i / 3) * 18} fill="#94a3b8" fontSize="6.5" style={mono} textAnchor="middle">{s}</text>
        </g>
      ))}
    </svg>
  );

  if (type === "docker") return (
    <svg viewBox="0 0 320 160" className={base}>
      <rect width="320" height="160" fill="#07090f" />
      <text x="16" y="20" fill="#06b6d4" fontSize="9" style={mono} fontWeight="bold">DOCKER · KUBERNETES · CI/CD PIPELINE</text>
      <text x="16" y="32" fill="#374151" fontSize="7" style={mono}>Build → Test → Push → Deploy → Monitor</text>
      {["Build","Test","Push","Deploy","Monitor"].map((s, i) => (
        <g key={s}>
          <rect x={16 + i * 58} y="44" width="48" height="28" rx="4" fill={["#1e3a8a","#052e16","#1a1040","#3b1515","#0c2340"][i]} stroke={["#3b82f6","#22c55e","#7c3aed","#ef4444","#06b6d4"][i]} strokeWidth="0.8" />
          <text x={40 + i * 58} y="62" fill={["#60a5fa","#4ade80","#a78bfa","#f87171","#22d3ee"][i]} fontSize="7" style={mono} textAnchor="middle">{s}</text>
          {i < 4 && <path d={`M ${64 + i * 58} 58 L ${68 + i * 58} 58`} stroke="#4b5563" strokeWidth="1" markerEnd="url(#a2)" />}
        </g>
      ))}
      <defs><marker id="a2" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#4b5563" /></marker></defs>
      <rect x="16" y="86" width="135" height="60" rx="6" fill="#0d1b2a" stroke="#1e3a5f" strokeWidth="0.8" />
      <text x="28" y="102" fill="#60a5fa" fontSize="7.5" style={mono} fontWeight="bold">GitHub Actions</text>
      {["on: push → main","jobs: build-test-deploy","docker build -t app .","kubectl apply -f k8s/"].map((l, i) => (
        <text key={i} x="28" y={116 + i * 12} fill={["#818cf8","#4ade80","#22d3ee","#f472b6"][i]} fontSize="6" style={mono}>{l}</text>
      ))}
      <rect x="169" y="86" width="135" height="60" rx="6" fill="#0a1a0a" stroke="#16a34a" strokeWidth="0.8" />
      <text x="181" y="102" fill="#4ade80" fontSize="7.5" style={mono} fontWeight="bold">K8s Cluster</text>
      {["3 worker nodes running","pods: 6/6 healthy","service: LoadBalancer","ingress: nginx"].map((l, i) => (
        <text key={i} x="181" y={116 + i * 12} fill={["#86efac","#34d399","#6ee7b7","#a7f3d0"][i]} fontSize="6" style={mono}>{l}</text>
      ))}
    </svg>
  );

  if (type === "fastapi") return (
    <svg viewBox="0 0 320 160" className={base}>
      <rect width="320" height="160" fill="#07090f" />
      <text x="16" y="20" fill="#06b6d4" fontSize="9" style={mono} fontWeight="bold">PYTHON BACKEND · FastAPI + Django REST</text>
      <text x="16" y="32" fill="#374151" fontSize="7" style={mono}>REST · GraphQL · Auth · Rate Limiting · Deployment</text>
      {["GET /users","POST /auth/login","GET /data/{id}","DELETE /record"].map((ep, i) => (
        <g key={ep}>
          <rect x="16" y={44 + i * 26} width="280" height="20" rx="3" fill={["#0d2a1e","#1a0a2e","#1e2a0a","#2a0a0a"][i]} />
          <rect x="16" y={44 + i * 26} width="40" height="20" rx="3" fill={["#059669","#7c3aed","#ca8a04","#dc2626"][i]} />
          <text x="36" y={58 + i * 26} fill="#fff" fontSize="6.5" style={mono} textAnchor="middle">{ep.split(" ")[0]}</text>
          <text x="68" y={58 + i * 26} fill={["#4ade80","#a78bfa","#fde047","#f87171"][i]} fontSize="7" style={mono}>{ep.split(" ")[1]}</text>
          <text x="270" y={58 + i * 26} fill="#374151" fontSize="6" style={mono}>200 OK</text>
        </g>
      ))}
    </svg>
  );

  // aws
  return (
    <svg viewBox="0 0 320 160" className={base}>
      <rect width="320" height="160" fill="#07090f" />
      <text x="16" y="20" fill="#f59e0b" fontSize="9" style={mono} fontWeight="bold">AWS CLOUD · FREE TIER GUIDE FOR STUDENTS</text>
      <text x="16" y="32" fill="#374151" fontSize="7" style={mono}>Free Tier · Deploy · Scale · Monitor · Cost Optimize</text>
      {[
        { label: "EC2", sub: "t2.micro Free", x: 20, y: 50, c: "#f59e0b" },
        { label: "S3", sub: "5GB Storage", x: 100, y: 50, c: "#06b6d4" },
        { label: "RDS", sub: "db.t3.micro", x: 180, y: 50, c: "#10b981" },
        { label: "Lambda", sub: "1M req/mo", x: 250, y: 50, c: "#8b5cf6" },
      ].map((s) => (
        <g key={s.label}>
          <rect x={s.x} y={s.y} width="60" height="40" rx="6" fill="#111827" stroke={s.c} strokeWidth="0.8" />
          <text x={s.x + 30} y={s.y + 17} fill={s.c} fontSize="9" style={mono} textAnchor="middle" fontWeight="bold">{s.label}</text>
          <text x={s.x + 30} y={s.y + 31} fill="#6b7280" fontSize="6" style={mono} textAnchor="middle">{s.sub}</text>
        </g>
      ))}
      <rect x="16" y="108" width="288" height="36" rx="6" fill="#0f1a2e" stroke="#f59e0b" strokeWidth="0.8" />
      <text x="160" y="122" fill="#fbbf24" fontSize="7.5" style={mono} textAnchor="middle" fontWeight="bold">CloudFront CDN · IAM Security · Auto Scaling</text>
      <text x="160" y="136" fill="#6b7280" fontSize="6.5" style={mono} textAnchor="middle">Host your portfolio projects without spending a rupee ✓</text>
    </svg>
  );
}

export default function Blog() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? BLOGS : BLOGS.filter(b => b.category === active);

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#08091a 0%,#0d1120 50%,#08091a 100%)" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-10">
          <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">Blog</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Latest in{" "}
                <span style={{ background: "linear-gradient(90deg,#06b6d4,#4f46e5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Tech</span>
              </h2>
              <p className="text-gray-400 text-base max-w-xl">
                Tutorials, career guidance, interview prep, and industry insights — written by our mentors and students.
              </p>
            </div>
            <div className="text-gray-500 text-sm flex-shrink-0">
              <span className="text-cyan-400 font-bold text-lg">{BLOGS.length}</span> articles
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${active === cat ? "bg-white text-black border-white" : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((blog) => (
            <div
              key={blog.title}
              className="group cursor-pointer rounded-2xl border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-300 flex flex-col"
              style={{ background: "rgba(17,24,39,0.8)" }}
            >
              {/* Visual Image */}
              <div className="h-44 overflow-hidden relative flex-shrink-0">
                {blog.featured && (
                  <span className="absolute top-3 left-3 z-10 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Featured</span>
                )}
                <BlogVisual type={blog.visual} />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <span className={`text-[10px] font-bold tracking-widest uppercase mb-3 ${blog.catColor}`}>{blog.category}</span>
                <h3 className="text-white font-bold text-sm leading-snug mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">{blog.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-grow line-clamp-2">{blog.snippet}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-gray-600 text-xs font-medium">
                    <span>📅 {blog.date}</span>
                    <span>⏱ {blog.readTime}</span>
                  </div>
                  <span className="text-gray-600 text-sm group-hover:text-cyan-400 transition-colors">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
