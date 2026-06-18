"use client";
import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const contacts = [
  {
    label: "WhatsApp",
    value: "+91 7559127572",
    icon: MessageCircle,
    href: "https://wa.me/7559127572",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    label: "Email",
    value: "hello@apnaplatform.com",
    icon: Mail,
    href: "mailto:apnaplatform01@gmail.com",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/afjalkhan1704/",
    icon: LinkedinIcon,
    href:  "https://www.linkedin.com/in/afjalkhan1704/",
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    label: "Instagram",
    value: "instagram.com/afzal.k27/",
    icon: InstagramIcon,
    href:"https://www.instagram.com/afzal.k27/",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="blob-bg w-[400px] h-[400px] bg-[var(--secondary)] top-[-5%] left-[-5%] animate-blob" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/15 text-[var(--accent)] text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Connect With Us
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
            Reach out to us anytime through your preferred channel.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 rounded-2xl bg-white border border-[var(--primary)]/10 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${contact.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${contact.color}`} />
                </div>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {contact.label}
                </h3>
                <p className="text-[var(--muted)] text-sm break-all">{contact.value}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
