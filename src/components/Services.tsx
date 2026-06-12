"use client";
import { motion } from "framer-motion";
import {
  FileText,
  Presentation,
  ScrollText,
  Rocket,
  Cpu,
  Globe,
  Smartphone,
  BookOpen,
} from "lucide-react";

const services = [
  {
    title: "Assignment Writing",
    desc: "Well-researched, plagiarism-free assignments across all subjects and disciplines.",
    icon: FileText,
    color: "from-emerald-400/20 to-emerald-600/10",
  },
  {
    title: "PPT Design",
    desc: "Stunning, professional presentations with custom designs and animations.",
    icon: Presentation,
    color: "from-sky-400/20 to-sky-600/10",
  },
  {
    title: "Research Papers",
    desc: "Comprehensive research papers following academic standards and guidelines.",
    icon: ScrollText,
    color: "from-violet-400/20 to-violet-600/10",
  },
  {
    title: "Final Year Projects",
    desc: "End-to-end project development with complete documentation and support.",
    icon: Rocket,
    color: "from-rose-400/20 to-rose-600/10",
  },
  {
    title: "AI/ML Projects",
    desc: "Cutting-edge AI and machine learning solutions for academic and real-world problems.",
    icon: Cpu,
    color: "from-cyan-400/20 to-cyan-600/10",
  },
  {
    title: "Website Development",
    desc: "Modern, responsive websites built with latest technologies and frameworks.",
    icon: Globe,
    color: "from-blue-400/20 to-blue-600/10",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications with intuitive UI and robust functionality.",
    icon: Smartphone,
    color: "from-orange-400/20 to-orange-600/10",
  },
  {
    title: "Project Documentation",
    desc: "Detailed technical documentation, reports, and synopsis writing services.",
    icon: BookOpen,
    color: "from-teal-400/20 to-teal-600/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="blob-bg w-[400px] h-[400px] bg-[var(--primary)] top-[-5%] left-[-5%] animate-blob" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/15 text-[var(--accent)] text-sm font-medium mb-4">
            Our Services
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What We Offer
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
            Comprehensive academic support services designed to help you excel
            in every aspect of your education.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="service-card group relative p-6 sm:p-8 rounded-2xl bg-white border border-[var(--primary)]/10 shadow-sm hover:shadow-xl cursor-pointer"
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[var(--accent)]" />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
