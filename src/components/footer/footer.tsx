import IconGithub from "@/public/images/icon-github.svg";
import IconInsta from "@/public/images/icon-insta.svg";
import IconLinkedin from "@/public/images/icon-linkedin.svg";
import Image from "next/image";
import Link from "next/link";

const footerIcon = [
  {
    name: "Github",
    href: "https://github.com/NinoDiving/NinoDiving",
    icon: IconGithub,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nino-jautee-aa2723321/",
    icon: IconLinkedin,
  },
  {
    name: "Instagam",
    href: "https://www.instagram.com/ninodiving/",
    icon: IconInsta,
  },
];

export default function Footer() {
  return (
    <footer className=" bckg-blue flex flex-col items-center justify-center p-4">
      <div className="flex items-center gap-10 text-white">
        {footerIcon.map((icon) => (
          <Link
            key={icon.name}
            href={icon.href}
            className="flex flex-col items-center"
          >
            {icon.name}
            <Image src={icon.icon} alt={icon.name} />
          </Link>
        ))}
      </div>
    </footer>
  );
}
