import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nino - Web & Mobile Developer",
  keywords: [
    "Nino",
    "Web Developer",
    "Mobile Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Web3",
    "Freelance Developer",
    "Portfolio",
    "Bordeaux",
    "Web Development",
    "Mobile Development",
    "Software Engineer",
    "Application Development",
    "Web Applications",
    "Mobile Applications",
  ],
  authors: [{ name: "Nino" }],
  creator: "Nino",
  description: "Nino's portfolio showcasing web and mobile development skills.",
  icons: {
    icon: "/images/favicon_io/favicon.ico",
    apple: "/images/favicon_io/apple-touch-icon.png",
    shortcut: "/images/favicon_io/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
