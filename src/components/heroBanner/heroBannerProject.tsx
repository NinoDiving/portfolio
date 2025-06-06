import Image, { StaticImageData } from "next/image";

type HeroBannerProjectProps = {
  heroImg: string | StaticImageData;
  alt: string;
  title: string;
};

export default function HeroBannerProject({
  heroImg,
  alt,
  title,
}: HeroBannerProjectProps) {
  return (
    <header className="flex flex-col-reverse items-center justify-start h-full background-me ">
      <Image
        src={heroImg}
        alt={alt}
        width={200}
        height={200}
        className="w-full"
      />
      <h1 className="text-5xl p-5 pb-20 title-color shadow-text-blue">
        {title}
      </h1>
    </header>
  );
}
