"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Fake News Detection",
    tech: "Python, NLP, TensorFlow, Flask",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Multi-Agent Blog Writer",
    tech: "LangChain, GPT API, Next.js, Redis",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Voice Assistant",
    tech: "Python, Speech Recognition, NLP, PyTorch",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Student Management System",
    tech: "React, Node.js, MongoDB, Express",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "CRM AI Assistant",
    tech: "OpenAI, Python, FastAPI, PostgreSQL",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Research Automation Tool",
    tech: "Python, Scrapy, NLP, Streamlit",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/15 text-[var(--accent)] text-sm font-medium mb-4">
            Our Work
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured Projects
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
            Showcasing some of our best work across different domains and technologies.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-[var(--primary)]/10 shadow-sm hover:shadow-xl transition-all duration-400"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/80 text-center px-4">
                    <div className="w-16 h-1 bg-white/40 mx-auto rounded-full mb-3" />
                    <p className="text-xs uppercase tracking-widest opacity-70">Featured Project</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--muted)] mb-4">{project.tech}</p>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:gap-3 transition-all">
                  View Details <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
