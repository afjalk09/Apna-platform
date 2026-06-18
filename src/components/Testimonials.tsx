"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Vilas Oza ",
    course: "B.Tech CSE, 3rd Year",
    review:
      "Apna Platform saved my semester! My AI project was delivered in just 3 days and it was absolutely top-notch. Highly recommended for all tech students.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Shubham Sawant ",
    course: "MBA, 2nd Year",
    review:
      "The research paper they wrote for me was exactly what my professor wanted. Well-researched, properly cited, and delivered before the deadline. Thank you!",
    rating: 5,
    initials: "RV",
  },
  {
    name: "Sejal Rai ",
    course: "B.Sc Computer Science",
    review:
      "I've used their PPT design service multiple times. The presentations look incredibly professional. My class presentations have never been better!",
    rating: 5,
    initials: "AP",
  },
  {
    name: "Anjali Gupta",
    course: "B.Tech ME, 4th Year",
    review:
      "Final year project was stressing me out, but Apna Platform handled everything — from ideation to documentation. Got an A grade! Worth every penny.",
    rating: 5,
    initials: "AS",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="blob-bg w-[450px] h-[450px] bg-[var(--primary)] top-[-10%] right-[-5%] animate-blob" />
      <div className="blob-bg w-[350px] h-[350px] bg-[var(--secondary)] bottom-[-5%] left-[-5%] animate-blob" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/15 text-[var(--accent)] text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Students Say
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
            Real reviews from real students who transformed their academic journey with us.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 rounded-2xl bg-white border border-[var(--primary)]/10 shadow-sm"
            >
              <div className="absolute -top-3 left-6 w-6 h-6 rotate-45 bg-white border-l border-t border-[var(--primary)]/10" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="fill-[var(--primary)] text-[var(--primary)]" />
                ))}
              </div>

              <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">&ldquo;{t.review}&rdquo;</p>

              <div className="flex items-center gap-3 pt-4 border-t border-[var(--primary)]/10">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">{t.name}</p>
                  <p className="text-xs text-[var(--muted)]">{t.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
