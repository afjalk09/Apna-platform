"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What kind of academic help do you provide?",
    a: "We provide comprehensive academic support including assignment writing, PPT design, research papers, final year projects, AI/ML projects, website and mobile app development, and project documentation.",
  },
  {
    q: "How long does it take to complete an assignment?",
    a: "Turnaround time depends on complexity and urgency. Standard assignments are delivered in 3-5 days. We also offer express delivery (24-48 hours) for urgent requirements.",
  },
  {
    q: "Is the work original and plagiarism-free?",
    a: "Absolutely. Every piece of work is 100% original and created from scratch. We provide plagiarism reports with every delivery to ensure complete transparency.",
  },
  {
    q: "What if I need revisions?",
    a: "We offer free revisions to ensure your complete satisfaction. Our team works with you until the output meets your expectations and requirements.",
  },
  {
    q: "How do I share my requirements?",
    a: "Simply fill out the contact form on our website with your details and requirements. Our team will reach out within 30 minutes to discuss further.",
  },
  {
    q: "Do you handle urgent deadlines?",
    a: "Yes! We understand academic pressure and handle urgent requirements with dedicated teams to ensure timely delivery without compromising quality.",
  },
  {
    q: "What subjects do you cover?",
    a: "We cover a wide range of subjects including Computer Science, Engineering, Management, Commerce, Arts, Science, and many more across all academic levels.",
  },
  {
    q: "How do you ensure quality?",
    a: "Our quality assurance process includes expert review, plagiarism checking, formatting verification, and client feedback incorporation before final delivery.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-[var(--primary)]/10 rounded-xl overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-[var(--primary)]/5"
      >
        <span className="font-medium text-[var(--foreground)] pr-4">{faq.q}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-[var(--accent)] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-[var(--muted)] text-sm leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/15 text-[var(--accent)] text-sm font-medium mb-4">
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[var(--muted)] text-lg">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
