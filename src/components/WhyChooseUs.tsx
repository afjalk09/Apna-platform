"use client";
import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  Zap,
  FileCheck,
  HeadphonesIcon,
  Cpu,
  Clock,
  Award,
  Users,
} from "lucide-react";

const reasons = [
  { title: "Affordable Pricing", icon: BadgeDollarSign, desc: "Student-friendly prices that won't break your budget." },
  { title: "Fast Delivery", icon: Zap, desc: "Quick turnaround times without compromising on quality." },
  { title: "Original Work", icon: FileCheck, desc: "100% plagiarism-free content with proper citations." },
  { title: "Personalized Support", icon: HeadphonesIcon, desc: "Dedicated support tailored to your specific needs." },
  { title: "Latest Technologies", icon: Cpu, desc: "Up-to-date tools and frameworks for modern solutions." },
  { title: "24/7 Assistance", icon: Clock, desc: "Round-the-clock support whenever you need help." },
  { title: "Professional Quality", icon: Award, desc: "Industry-standard quality that exceeds expectations." },
  { title: "Student Friendly", icon: Users, desc: "Built by students, for students — we understand you." },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--secondary)]/15 text-[var(--secondary)] text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why Students Choose Us
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
            We understand student challenges and deliver solutions that make a real difference.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 p-5 rounded-xl hover:bg-white/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">{reason.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
