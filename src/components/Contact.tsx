"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const services = [
  "Assignment",
  "PPT",
  "Research Paper",
  "Project",
  "AI Project",
  "Website",
  "Mobile App",
  "Other",
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  college: "",
  course: "",
  semester: "",
  service: "",
  details: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  //   setTimeout(() => {
  //     setSubmitted(false);
  //     setForm(initialForm);
  //   }, 4000);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK!,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form), // sends all form data
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    const result = await response.json();

    console.log("Webhook Response:", result);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 4000);

  } catch (error) {
    console.error("Error:", error);
    alert("Failed to submit form.");
  }
};



  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="blob-bg w-[500px] h-[500px] bg-[var(--primary)] top-[-10%] right-[-10%] animate-blob" />
      <div className="blob-bg w-[400px] h-[400px] bg-[var(--secondary)] bottom-[-10%] left-[-10%] animate-blob" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/15 text-[var(--accent)] text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Request Assistance
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
            Fill in your details and we&apos;ll get back to you within 30 minutes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-[var(--primary)]/10 p-6 sm:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-[var(--accent)]" />
                </div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Request Submitted!
                </h3>
                <p className="text-[var(--muted)]">
                  We&apos;ll contact you within 30 minutes. Check your WhatsApp/Email.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Full Name"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    focused={focused}
                    setFocused={setFocused}
                    required
                  />
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    focused={focused}
                    setFocused={setFocused}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    focused={focused}
                    setFocused={setFocused}
                    required
                  />
                  <Field
                    label="College Name"
                    name="college"
                    value={form.college}
                    onChange={handleChange}
                    placeholder="Your college name"
                    focused={focused}
                    setFocused={setFocused}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Course / Branch"
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    placeholder="e.g. B.Tech CSE"
                    focused={focused}
                    setFocused={setFocused}
                    required
                  />
                  <Field
                    label="Semester"
                    name="semester"
                    value={form.semester}
                    onChange={handleChange}
                    placeholder="e.g. 3rd Sem"
                    focused={focused}
                    setFocused={setFocused}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Service Needed <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-[var(--primary)]/20 bg-white text-[var(--foreground)] outline-none appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Requirement Details <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    onFocus={() => setFocused("details")}
                    onBlur={() => setFocused(null)}
                    rows={4}
                    required
                    placeholder="Describe your requirement in detail..."
                    className="w-full px-4 py-3.5 rounded-xl border border-[var(--primary)]/20 bg-white text-[var(--foreground)] outline-none resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl text-base font-semibold text-white gradient-bg hover:opacity-90 transition-all duration-300 shadow-lg shadow-[var(--primary)]/30 flex items-center justify-center gap-2"
                >
                  Request Assistance
                  <Send size={18} />
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  focused,
  setFocused,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder: string;
  focused: string | null;
  setFocused: (name: string | null) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused(null)}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3.5 rounded-xl border bg-white text-[var(--foreground)] outline-none transition-all duration-300 ${
          focused === name
            ? "border-[var(--primary)] ring-2 ring-[var(--primary)]/20"
            : "border-[var(--primary)]/20"
        }`}
      />
    </div>
  );
}
