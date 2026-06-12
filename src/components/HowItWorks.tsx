"use client";
import { motion } from "framer-motion";
import { FileText, MessageCircle, Workflow, HeartHandshake } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Submit Requirement",
    desc: "Tell us what you need — assignment, project, PPT, or research paper with all details.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Discuss With Expert",
    desc: "Connect with our subject matter expert to refine requirements and set expectations.",
    icon: MessageCircle,
  },
  {
    step: 3,
    title: "Work Starts",
    desc: "Our team begins working on your project with regular progress updates.",
    icon: Workflow,
  },
  {
    step: 4,
    title: "Receive Delivery",
    desc: "Get your completed work on time with free revisions if needed.",
    icon: HeartHandshake,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="blob-bg w-[500px] h-[500px] bg-[var(--secondary)] bottom-[-10%] right-[-10%] animate-blob" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/15 text-[var(--accent)] text-sm font-medium mb-4">
            How It Works
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Simple 4-Step Process
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
            Getting academic help is as simple as 1-2-3-4. No complicated procedures.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-[var(--primary)]/20 -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-[var(--primary)]/20">
                      <Icon className="w-9 h-9 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-[var(--primary)] flex items-center justify-center text-sm font-bold text-[var(--accent)]">
                      {step.step}
                    </div>
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
