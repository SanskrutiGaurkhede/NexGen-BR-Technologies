const REVIEWS = [
  { initials: "PP", name: "Pawan Patil", role: "Full Stack Developer Intern", color: "from-blue-500 to-cyan-400", rating: 5, content: "Best internship with real-time projects. The mentors actually care — got placed within 2 months. NexGen ne meri zindagi badal di!" },
  { initials: "AT", name: "Aditya Talwekar", role: "Data Science Trainee", color: "from-violet-500 to-purple-400", rating: 5, content: "Learned Data Science from scratch. The capstone projects gave me a portfolio I was proud to share. Bahut hi practical approach hai." },
  { initials: "VV", name: "Vivek Virkhede", role: "Python Developer Intern", color: "from-emerald-500 to-teal-400", rating: 5, content: "Highly recommended for freshers. The DSA + System Design tracks made interviews feel manageable. Interview crack ho gaya thanks to NexGen!" },
  { initials: "HK", name: "Harsh Kshirsagar", role: "AI / ML Trainee", color: "from-orange-500 to-amber-400", rating: 5, content: "From zero to ML engineer in 3 months. The project-first curriculum is exactly what industry needs. Real experience mile yahan!" },
  { initials: "AW", name: "Adarsh Wani", role: "Web Development Intern", color: "from-pink-500 to-rose-400", rating: 5, content: "NexGen ka internship program game-changer hai. Got my first job at a Pune startup. Resume se lekar interview tak sab mein help mila." },
  { initials: "PM", name: "Pravin More", role: "Cloud Computing Trainee", color: "from-sky-500 to-blue-400", rating: 5, content: "AWS certification support + hands-on labs gave me real confidence. Mentor sessions are genuinely helpful, not just theory." },
  { initials: "SP", name: "Suhas Patak", role: "DevOps Intern", color: "from-indigo-500 to-violet-400", rating: 5, content: "Docker, Kubernetes, CI/CD — sab kuch practically sikhaya. The live project deployment experience is unmatched for freshers." },
  { initials: "YP", name: "Yash Phohane", role: "Data Analyst Trainee", color: "from-fuchsia-500 to-pink-400", rating: 5, content: "Power BI + SQL + Python combo training is perfect. Got a data analyst offer within 6 weeks of completing the program. Ekdum sahi jagah!" },
  { initials: "AG", name: "Arya Giri", role: "Java Developer Intern", color: "from-teal-500 to-emerald-400", rating: 5, content: "Java Spring Boot se lekar microservices tak — sab kuch covered. The mentors are working professionals which makes a huge difference." },
  { initials: "AA", name: "Aman Aamtake", role: "Cyber Security Trainee", color: "from-red-500 to-orange-400", rating: 5, content: "CEH prep + ethical hacking labs — NexGen ke bina yeh possible nahi tha. Real-world security scenarios practice karwate hain yahan." },
  { initials: "MI", name: "Megha Ingle", role: "Data Science Trainee", color: "from-purple-400 to-fuchsia-500", rating: 5, content: "NexGen ke mentors ne personally guide kiya — Python se Machine Learning tak ka full journey smooth raha. Girls ke liye bhi bahut supportive environment hai." },
  { initials: "PP2", name: "Pooja Patil", role: "Web Development Intern", color: "from-rose-400 to-pink-500", rating: 5, content: "Internship ke baad seedha campus drive mein select ho gayi! NexGen ka resume-building session aur mock interviews bahut kaam aye. Highly recommended!" },
  { initials: "RM", name: "Raksha Madpe", role: "AI / ML Intern", color: "from-green-400 to-teal-500", rating: 5, content: "Deep Learning concepts ko itna clearly explain karte hain yahan. Projects actual industry datasets pe hote hain — yahi farq hai NexGen aur baaki institutes mein." },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#0b0d1e 0%,#08091a 100%)" }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-yellow-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-yellow-400/20 bg-yellow-400/5">
            NexGen Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real testimonials from real students who turned{" "}
            <span style={{ background: "linear-gradient(90deg,#facc15,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              skills into careers.
            </span>
          </h2>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="text-center">
              <div className="flex items-center gap-3 justify-center">
                <span className="text-6xl font-black text-white">4.9</span>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">★</span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">{REVIEWS.length} verified student reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name + r.initials} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-white/15 transition-colors flex flex-col">
              <Stars count={r.rating} />
              <p className="text-gray-300 text-sm leading-relaxed my-4 flex-grow">"{r.content}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                  {r.initials.replace("2", "")}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{r.name}</h4>
                  <p className="text-gray-500 text-xs">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
