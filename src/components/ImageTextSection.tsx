import Image from "next/image";

interface ImageTextSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  bgColor?: string;
  textColor?: string;
}

export default function ImageTextSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  bgColor = "bg-primary",
  textColor = "text-background",
}: ImageTextSectionProps) {
  return (
    <section className={`p-12 ${bgColor} ${textColor}`}>
      <div
        className={`max-w-6xl mx-auto flex flex-col ${
          imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-8`}
      >
        {/* Image container */}
        <div className="w-full md:w-1/2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Text container */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-semibold mb-6">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
