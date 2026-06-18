import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apna Platform - Your Academic Success Partner",
  description:
    "Assignments, PPTs, Projects, Research Papers, AI Solutions, and Academic Support — all in one place. We help students complete academic work professionally.",
  keywords: [
    "assignment help",
    "ppt design",
    "research papers",
    "final year projects",
    "AI ML projects",
    "website development",
    "mobile app development",
    "academic guidance",
    "student help",
    "Apna Platform",
  ],
  openGraph: {
    title: "Apna Platform - Your Academic Success Partner",
    description:
      "We help students complete academic work professionally.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
   
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
