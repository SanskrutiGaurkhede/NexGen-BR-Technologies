import { useState } from "react";

const CATEGORIES = ["All", "Career Guidance", "AI & ML Tutorial", "Data Science Tips", "Interview Prep", "Web Dev", "Cloud & DevOps"];

const BLOGS = [
  {
    category: "Career Guidance",
    featured: true,
    catColor: "text-emerald-400",
    title: "How to Crack Your First Data Science Interview in 2026",
    snippet: "A field-tested playbook covering DSA, ML fundamentals, SQL, and behavioral rounds — from NexGen mentors.",
    date: "Feb 10, 2026",
    readTime: "6 min",
  },
  {
    category: "AI & ML Tutorial",
    featured: false,
    catColor: "text-purple-400",
    title: "Transformers Explained: From Attention to Production",
    snippet: "Demystifying self-attention with intuitive analogies, code, and deployment patterns that work in prod.",
    date: "Feb 04, 2026",
    readTime: "9 min",
  },
  {
    category: "Data Science Tips",
    featured: false,
    catColor: "text-cyan-400",
    title: "5 Power BI Tricks Senior Analysts Use Daily",
    snippet: "DAX shortcuts, performance tuning, and dashboard storytelling techniques every analyst should know.",
    date: "Jan 28, 2026",
    readTime: "5 min",
  },
  {
    category: "Interview Prep",
    featured: false,
    catColor: "text-orange-400",
    title: "FAANG Interview Roadmap (Indian Edition)",
    snippet: "Month-by-month plan blending DSA, system design, and storytelling for Google, Amazon & Microsoft.",
    date: "Jan 21, 2026",
    readTime: "11 min",
  },
  {
    category: "Data Science Tips",
    featured: false,
    catColor: "text-cyan-400",
    title: "From Excel to Python: A 30-Day Migration Plan",
    snippet: "How to transition smoothly from spreadsheet workflows to Python-powered data analysis and automation.",
    date: "Jan 12, 2026",
    readTime: "7 min",
  },
  {
    category: "Career Guidance",
    featured: false,
    catColor: "text-emerald-400",
    title: "Resume Hacks That Got Our Students Interviews at TCS, Infosys & Wipro",
    snippet: "Concrete bullet-point patterns, project framing, and ATS-friendly templates used by placed students.",
    date: "Jan 03, 2026",
    readTime: "4 min",
  },
  {
    category: "Web Dev",
    featured: false,
    catColor: "text-blue-400",
    title: "React 19 + Next.js 15: What's New & How to Upgrade",
    snippet: "Breaking down React Server Components, the new App Router patterns, and performance gains in Next.js 15.",
    date: "Dec 28, 2025",
    readTime: "8 min",
  },
  {
    category: "Cloud & DevOps",
    featured: false,
    catColor: "text-violet-400",
    title: "Docker + Kubernetes for Beginners: Deploy Your First App",
    snippet: "Step-by-step guide to containerise a Node.js app and deploy it to a Kubernetes cluster — no prior DevOps knowledge needed.",
    date: "Dec 20, 2025",
    readTime: "10 min",
  },
  {
    category: "Web Dev",
    featured: false,
    catColor: "text-blue-400",
    title: "Build Production-Grade REST APIs with Python FastAPI",
    snippet: "Authentication, rate limiting, async DB queries, and auto-generated docs — all in one FastAPI project.",
    date: "Dec 14, 2025",
    readTime: "9 min",
  },
  {
    category: "Cloud & DevOps",
    featured: false,
    catColor: "text-violet-400",
    title: "AWS Free Tier: A Student's Complete Guide to Cloud Deployment",
    snippet: "Use EC2, S3, RDS, Lambda and CloudFront for free — host your portfolio projects without spending a rupee.",
    date: "Dec 07, 2025",
    readTime: "6 min",
  },
];

const BG_COLORS: Record<string, string> = {
  "Career Guidance": "from-emerald-900/40 to-teal-900/20",
  "AI & ML Tutorial": "from-purple-900/40 to-indigo-900/20",
  "Data Science Tips": "from-cyan-900/40 to-blue-900/20",
  "Interview Prep": "from-orange-900/40 to-amber-900/20",
  "Web Dev": "from-blue-900/40 to-sky-900/20",
  "Cloud & DevOps": "from-violet-900/40 to-purple-900/20",
};

export default function Blog() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? BLOGS : BLOGS.filter((b) => b.category === active);

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#08091a 0%,#0d1120 50%,#08091a 100%)" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-10">
          <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            Blog
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Stay Updated with the{" "}
                <span style={{ background: "linear-gradient(90deg,#06b6d4,#4f46e5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Latest in Tech
                </span>
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
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                active === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
              }`}
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
              {/* Visual placeholder */}
              <div className={`h-40 bg-gradient-to-br ${BG_COLORS[blog.category] ?? "from-gray-900 to-gray-800"} relative flex-shrink-0 flex items-end p-4`}>
                {blog.featured && (
                  <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
                <span className="text-4xl opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">📝</span>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <span className={`text-[10px] font-bold tracking-widest uppercase mb-3 ${blog.catColor}`}>{blog.category}</span>
                <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-2">{blog.snippet}</p>
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
