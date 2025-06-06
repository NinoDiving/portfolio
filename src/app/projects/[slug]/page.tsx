import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeroBannerProject from "@/components/heroBanner/heroBannerProject";
import HeroAppMobile from "@/public/images/hero-appmobile.png";
import IconExpo from "@/public/images/icon-expo.svg";
import IconNest from "@/public/images/icon-nest.svg";
import IconNext from "@/public/images/icon-next.svg";
import IconReact from "@/public/images/icon-react.svg";
import IconSupabase from "@/public/images/icon-supabase.svg";
import IconTailwind from "@/public/images/icon-tailwind.svg";
import IconTypescript from "@/public/images/icon-typescript.svg";
import MockUpCrmFreelance from "@/public/images/mockup-crmFreelance.png";
import Image from "next/image";
import { use } from "react";

const project = [
  {
    title: "Freelance CRM",
    description:
      "I actually work on a CRM for freelancers, it allows to manage customers, projects, invoices, and more. It is built with Next.js, TypeScript, TailwindCSS, Nest.JS, MongoDB.",
    link: "/projects/freelance-crm",
    heroImg: MockUpCrmFreelance,
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
    title: "App mobile for electrician company",
    description:
      "The application is designed to assist technical consultants during their visits to clients by providing them with an intuitive and user-friendly interface. It enables the management of user profiles (technician, administrator) as well as the scheduling and assignment of appointments, with automatic transmission of the necessary information to the technician. Once on site, geolocation confirms the technician's presence to initiate the appointment and follow a structured step-by-step process.",
    link: "/projects/electrician-app",
    heroImg: HeroAppMobile,
    technologies: [
      { name: "React Native", logo: IconReact },
      { name: "Expo", logo: IconExpo },
      { name: "TypeScript", logo: IconTypescript },
      { name: "Nest.JS", logo: IconNest },
      { name: "SupaBase", logo: IconSupabase },
    ],
    others: [
      {
        confidentiality:
          "The code source is not available for this project due to confidentiality reasons.",
        videoTitle: "You can check the video presentation of the app",
        videoLink: "https://www.youtube.com/watch?v=8b1d2k0g3a4",
      },
    ],
  },
];

export default function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const currentProject = project.find((proj) => proj.link.includes(slug));

  if (!currentProject) {
    return (
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-5xl text-red-500">Project not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1">
        <HeroBannerProject
          title={currentProject.title}
          heroImg={currentProject.heroImg}
          alt={currentProject.title}
        />
        <div className="max-w-4xl mx-auto px-5 py-8">
          <p className="text-lg text-left">{currentProject.description}</p>

          {/* Afficher les technologies */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              Technologies utilisées :
            </h3>
            <div className="flex flex-wrap gap-4">
              {currentProject.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded"
                >
                  <Image src={tech.logo} alt={tech.name} className="w-6 h-6" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {currentProject.others?.map((other) => (
          <div key={other.videoTitle} className="max-w-4xl mx-auto px-5 py-8">
            <h3 className="text-xl font-semibold mb-4">
              {other.confidentiality}
            </h3>
            <h4 className="text-lg mb-2">{other.videoTitle}</h4>
            <a
              href={other.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Watch Video
            </a>
          </div>
        ))}
        <div>
          <h4></h4>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
