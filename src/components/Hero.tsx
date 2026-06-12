"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="blob-bg w-[500px] h-[500px] bg-[var(--primary)] top-[-10%] right-[-10%] animate-blob" />
      <div className="blob-bg w-[400px] h-[400px] bg-[var(--secondary)] bottom-[-10%] left-[-10%] animate-blob" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/15 text-[var(--accent)] text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              Trusted by 500+ Students
            </motion.div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Your Academic{" "}
              <span className="gradient-text">Success</span> Partner
            </h1>

            <p className="text-lg sm:text-xl text-[var(--muted)] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Assignments, PPTs, Projects, Research Papers, AI Solutions,
              and Academic Support — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white gradient-bg hover:opacity-90 transition-all duration-300 shadow-xl shadow-[var(--primary)]/30 hover:shadow-2xl hover:shadow-[var(--primary)]/40"
              >
                Get Help Now
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-[var(--foreground)] border-2 border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-[var(--primary)]/30 flex items-center justify-center text-xs font-bold text-[var(--accent)]"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-[var(--primary)] flex items-center justify-center text-xs font-bold text-white">
                  +5k
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-[var(--foreground)]">Happy Students</p>
                <p className="text-xs text-[var(--muted)]">Across India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-lg">
              <div className="animate-float">
                <div className="relative">
                  <div className="w-full aspect-square rounded-[30%_70%_70%_30%/30%_30%_70%_70%] gradient-bg opacity-20" />
                  <div className="absolute inset-4 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] bg-white shadow-2xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                        <Sparkles size={32} className="text-white" />
                      </div>
                      <h3
                        className="text-2xl font-bold mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Academic Excellence
                      </h3>
                      <p className="text-[var(--muted)] text-sm">
                        Professional support for every student
                      </p>
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        {["Assignments", "PPTs", "Projects", "Research"].map(
                          (item) => (
                            <div
                              key={item}
                              className="px-3 py-2 rounded-lg bg-[var(--primary)]/10 text-xs font-medium text-[var(--accent)]"
                            >
                              {item}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[var(--secondary)]/30 animate-float-delayed" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[var(--primary)]/20 animate-float" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
