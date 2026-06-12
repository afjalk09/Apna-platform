"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const metrics = [
  { end: 500, suffix: "+", label: "Assignments Delivered" },
  { end: 200, suffix: "+", label: "Projects Completed" },
  { end: 100, suffix: "+", label: "PPTs Designed" },
  { end: 98, suffix: "%", label: "Student Satisfaction" },
];

function Counter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2" style={{ fontFamily: "var(--font-heading)" }}>
        {count}{suffix}
      </div>
      <p className="text-[var(--muted)] text-sm sm:text-base">{label}</p>
    </div>
  );
}

export default function TrustMetrics() {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 p-8 sm:p-12 rounded-3xl bg-white shadow-lg border border-[var(--primary)]/10"
        >
          {metrics.map((metric) => (
            <Counter key={metric.label} {...metric} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
