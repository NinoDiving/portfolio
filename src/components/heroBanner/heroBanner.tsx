"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroBanner() {
  const stack = [
    "TypeScript",
    "React",
    "Native",
    "NextJS",
    "NodeJS",
    "NestJS",
    "TailwindCSS",
    "MongoDB",
  ];

  const [currentStackIndex, setCurrentStackIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStackIndex((prevIndex) =>
        prevIndex === stack.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [stack.length]);

  return (
    <section className="background-hero flex flex-col items-center md:flex-column  justify-evenly p-8 lg:flex-row">
      <div className="flex flex-col h-full items-center lg:items-start lg:justify-center ">
        <h1 className=" font-bold title-color text-5xl w-full text-center lg:text-8xl lg:text-left lg:w-2/3 mb-4 md:text-7xl  ">
          Web & mobile Developer{" "}
        </h1>
        <span
          key={currentStackIndex}
          className="text-5xl font-semibold text-white animate-fadeInUp"
        >
          {stack[currentStackIndex]}
        </span>
        <div className="mb-6 mt-10  flex justify-center lg:justify-start">
          <p className="text-xl text-white lg:w-2/3 lg:text-left md:w-2/3">
            You got an idea? I can help you build it! Whether it&apos;s a web
            app or a mobile app, I have the skills to bring your vision to life.
          </p>
        </div>
      </div>
      <Image
        className="box-shadow-picture md:w-1/2 lg:w-1/4"
        src="/images/ninoPicture.jpeg"
        alt="Nino's picture"
        width={400}
        height={400}
      />
    </section>
  );
}
