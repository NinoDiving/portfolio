import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeroBanner from "@/components/heroBanner/heroBanner";
import Me from "@/components/me/me";
import Project from "@/components/project/project";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <Skills />
      <Me />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
