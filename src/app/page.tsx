"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

function WaveSeparator() {
  return (
    <div className="wave-separator -mb-1">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1350,40 1440,40 L1440,80 L0,80 Z"
          fill="#F7F7F2"
        />
      </svg>
    </div>
  );
}

function WaveSeparatorInverted() {
  return (
    <div className="wave-separator -mb-1">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path
          d="M0,40 C360,0 720,80 1080,40 C1260,20 1350,40 1440,40 L1440,80 L0,80 Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function SectionWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`scroll-section ${className}`}>
      {children}
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".scroll-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[var(--background)] min-h-screen">
      <Navbar />
      <Hero />

      <WaveSeparatorInverted />
      <section className="bg-white">
        <TrustMetrics />
      </section>
      <WaveSeparator />

      <Services />

      <WaveSeparatorInverted />
      <section className="bg-white">
        <WhyChooseUs />
      </section>
      <WaveSeparator />

      <HowItWorks />

      <WaveSeparatorInverted />
      <section className="bg-white">
        <FeaturedProjects />
      </section>
      <WaveSeparator />

      <Testimonials />

      <WaveSeparatorInverted />
      <section className="bg-white">
        <FAQ />
      </section>
      <WaveSeparator />

      <Contact />

      <WaveSeparatorInverted />
      <section className="bg-white">
        <ContactInfo />
      </section>

      <Footer />
    </main>
  );
}
