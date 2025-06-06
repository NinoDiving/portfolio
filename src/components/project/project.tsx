import IconExpo from "@/public/images/icon-expo.svg";
import IconGithub from "@/public/images/icon-github.svg";
import IconNest from "@/public/images/icon-nest.svg";
import IconNext from "@/public/images/icon-next.svg";
import IconReact from "@/public/images/icon-react.svg";
import IconSupabase from "@/public/images/icon-supabase.svg";
import IconTailwind from "@/public/images/icon-tailwind.svg";
import IconTypescript from "@/public/images/icon-typescript.svg";
import IconWordpress from "@/public/images/icon-wordpress.svg";
import Image from "next/image";
import Link from "next/link";

const project = [
  {
    title: "Uvibes",
    description:
      "Uvibes website, from scratch to production, built with Next.js, TypeScript, WordPress as Headerless CMS for content management, many features like a blog, a contact form, book an appointment, and more.",
    link: "https://www.uvibes.fr/",
    technologies: [
      { name: "Next.js", logo: IconNext },
      { name: "TypeScript", logo: IconTypescript },
      { name: "WordPress", logo: IconWordpress },
    ],
  },
  {
    title: "App mobile for electrician company",
    description:
      "The app allows admin to create customers and employees. Admin can also assign employees to appointments, the employees can see their appointments and got a road map to follow after geolocoding the address of the appointment and more features.",
    link: "/projects/electrician-app",
    technologies: [
      { name: "React Native", logo: IconReact },
      { name: "Expo", logo: IconExpo },
      { name: "TypeScript", logo: IconTypescript },
      { name: "Nest.JS", logo: IconNest },
      { name: "SupaBase", logo: IconSupabase },
    ],
  },
  {
    title: "Freelance CRM",
    description:
      "I actually work on a CRM for freelancers, it allows to manage customers, projects, invoices, and more. It is built with Next.js, TypeScript, TailwindCSS, Nest.JS, MongoDB.",
    link: "/projects/freelance-crm",
    technologies: [
      { name: "Next.js", logo: IconNext },
      { name: "TypeScript", logo: IconTypescript },
      { name: "Tailwind CSS", logo: IconTailwind },
      { name: "Nest.JS", logo: IconNest },
      {
        name: "MongoDB",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO1ZzW8NURS/Qgg74n8Qdjydc6bRiCBqZdNnJ11gzp1i0USCVS2EBV0Im37MOe+JRrwNC2VRrNiwI5FoQlSCin7YVIJq5b6Oph/z5s6C+ZD+kl8yyb2L3+/cc86cuaPUCv5j6AB8T1CrIkKz06IFf9TJTosqEvyBXRtJ8L0WnDUkgQ9eT2mzKgpIoPZH/ALeVUWAZmyPED9HxnaVZxztw03E8LmRAWIcy3UqkUDQMPrzpwD9Ko/wGHdoxpklYqfrXJxGM2avyhu04GBExKeI4VtEKt1TeYLPbtOy6NeFwgQxTEalkldtdlVeQAJDDYr2k2HkmsCQygN0f/OWqOiHIt9phpFGBe1XYWvW+hUxXolpm6+14HBMV7qcqfhybdvauL6vBV6QwMsYA19OXW1dl5kBCpw2S99/HrLhHgqctuwMMN6yvLSekMDTWAMCA5mI7+ravUYLjMeLw0eG8acE4+VaeXXqBvwKlGxjAzHe1wwPrONF1d2eugFi6LAbgDtmjLYaCMBP3YBm7LUKY7hdp3Uf9qZugBgfJzBQJcYbCfY9TN2AZnxrTSGBPkP7PnyTugEzqFkjK3CNGK4nKPax1A2ENw42YWbM6E5QA99TN0ACPxOcwEVivJRLA1rwawJhXXXa2+1E6gbCSdN2AmeJ8VyCVHuVuoEkb1gKsNPQbhQHMzCAFxKkRocW50SCdns+dQOeuHsT1MCxOi37/IqzJ6NpFEfjxTlH5hhr8mMm06gBsXM6NrLilqmCh211orKC11PaEHcKxM4hw7jod9ZwvcoSxLB/2e3bvED3gCfYGl24+EtX4KDKAxr1elOchpFrDGdUnkACx5eOF+b2zWe3efGpwDQxnlR5BFXQWXgLYT47F356ksAzr79pp8o1ZtWqsC5uzhswzwHuM2uqSNCCw2ZmUkWFZhgx96OqqNCCo+Z2WhUVxDCZyaz/txD+nZlSRYUO/5FlrWMF6h/iNwFD5Zin1tTcAAAAAElFTkSuQmCC",
      },
    ],
  },
  {
    title: "Portfolio",
    description:
      "This portfolio is built with Next.js, TypeScript, and Tailwind CSS. It showcases my skills, projects, and experience as a web and mobile developer.",
    link: "/",
    technologies: [
      { name: "Next.js", logo: IconNext },
      { name: "TypeScript", logo: IconTypescript },
      { name: "Tailwind CSS", logo: IconTailwind },
    ],
  },
];

export default function Project() {
  return (
    <section className="pt-8">
      <h1 className="text-5xl text-center text-blue pb-5">My project</h1>
      <div className="flex flex-col items-center justify-center w-full gap-10 p-5">
        {project.map((proj, index) => (
          <div
            key={index}
            className={`p-4 w-full max-w-3xl border-2 rounded ${
              index % 2 === 0
                ? "border-blue box-shadow-blue"
                : "border-green box-shadow-skills"
            }`}
          >
            <h2 className="text-2xl font-bold mb-2 text-center">
              {proj.title}
            </h2>
            <p className="text-lg mb-4 text-gray-700">{proj.description}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue  hover:underline"
            >
              Visit Project
            </a>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-center pb-2">
                Technologies Used:
              </h3>
              <ul className="list-disc pl-5 grid grid-cols-2  gap-4 mt-2">
                {proj.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex flex-col items-center gap-2"
                  >
                    <li className="list-none text-gray-700" key={techIndex}>
                      {tech.name}
                    </li>
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={40}
                      height={40}
                    />
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <h3 className="w-2/3 text-blue">
          You can get my other project on my Github !
        </h3>
        <Link className="" href="https://github.com/NinoDiving/NinoDiving">
          <Image src={IconGithub} alt="Lien github" />
        </Link>
      </div>
    </section>
  );
}
