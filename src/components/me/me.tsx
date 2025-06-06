import Link from "next/link";
import ScrollReveal from "../framer/scrollReveal";

export default function Me() {
  return (
    <section
      id="about"
      className="flex flex-col items-center pt-10 background-me"
    >
      <ScrollReveal delay={0.1}>
        <h1 className="text-5xl text-center title-color md:text-6xl">
          About me
        </h1>
      </ScrollReveal>
      <div className="p-4 flex flex-col items-center justify-center w-full gap-5 text-white">
        <ScrollReveal delay={0.3}>
          <p className="text-xl  md:*:text-2xl">
            Hi, I’m Nino, 28 years old, currently based in Bordeaux.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <p className="text-xl md:text-2xl md:p-5">
            My journey into tech began when I discovered the Liquid templating
            language (Shopify) and started experimenting with it in my spare
            time. Captivated by the creative and technical possibilities of the
            web, I decided to take on a new challenge: going back to school to
            pursue a field that has fascinated me for years.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <p className="text-xl md:text-2xl md:p-5">
            I’m currently in my third year of a Bachelor&apos;s degree in
            Application Design & Development, specializing in Web3, at the CESI
            School of Engineering, in a work-study program. After completing my
            first freelance projects, I’m eager to continue working on
            meaningful and stimulating challenges where I can bring value
            through both my skills and passion.
          </p>
        </ScrollReveal>
        <div className="flex flex-col items-center justify-center mt-5">
          <ScrollReveal delay={0.3}>
            <p className="text-2xl text-blue title-font pb-4 shadow-text md:text-6xl lg:text-7xl ">
              Have a project idea?
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <Link
              href="#contact"
              className="border-blue box-shadow-green border-1 mt-3 p-2 text-xl text-blue shadow-btn rounded md:text-4xl lg:text-5xl"
            >
              Let&apos;s connect !
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
