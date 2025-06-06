"use client";
import {
  BookOpenText,
  Brain,
  ComputerIcon,
  Eye,
  TabletSmartphone,
} from "lucide-react";
import { useEffect, useState } from "react";
import ScrollReveal from "../framer/scrollReveal";

const skills = [
  {
    name: "Web Development",
    icon: ComputerIcon,
  },
  {
    name: "Mobile Development",
    icon: TabletSmartphone,
  },
  {
    name: "UI/UX Design",
    icon: Eye,
  },
  {
    name: "Problem Solving",
    icon: Brain,
  },
  {
    name: "Lifelong Learning",
    icon: BookOpenText,
  },
];
export default function Skills() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) =>
        prevIndex === skills.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Récupérer le composant d'icône actuel
  const CurrentIcon = skills[currentSkillIndex].icon;

  return (
    <section className="">
      <ScrollReveal delay={0.1}>
        <h1 className="text-5xl text-center p-4 text-blue md:text-6xl">
          Not only Developer
        </h1>
      </ScrollReveal>
      <div className="flex flex-col items-center justify-center p-4">
        <ScrollReveal delay={0.3}>
          <p className="text-xl text-gray-700 mb-4 md:text-2xl md:p-5">
            I don&apos;t just write code — I deliver solutions. As a developer
            with a strong interest in UI/UX, I combine analytical thinking, a
            keen eye for design, and a solid understanding of user needs.
            Passionate about creating applications and websites that are both
            beautiful and functional, I strive to craft tailored experiences
            that serve both users and business goals. Curious and committed to
            continuous learning, I&apos;m always ready to make concrete
            suggestions to help improve a product.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-4xl text-blue mb-4 pt-4">My skills include:</p>
        </ScrollReveal>

        <ul className="list-disc list-inside text-lg text-gray-700">
          <ScrollReveal delay={0.3}>
            <div className="border-2 border-green box-shadow-skills p-4 min-w-60 max-w-60 max-h-60">
              <li
                key={currentSkillIndex}
                className="list-none animate-fadeInUp flex items-center justify-center gap-3"
              >
                <CurrentIcon className="w-12 h-12 text-blue" />
                {skills[currentSkillIndex].name}
              </li>
            </div>
          </ScrollReveal>
        </ul>
      </div>
    </section>
  );
}
