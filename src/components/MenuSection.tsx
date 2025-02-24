import Image from "next/image";

interface MenuItem {
  title: string;
  description: string;
  imageSrc: string;
}

interface MenuSectionProps {
  sectionTitle: string;
  items: MenuItem[];
  theme?: "primary" | "secondary";
}

export default function MenuSection({
  sectionTitle,
  items,
  theme = "primary",
}: Readonly<MenuSectionProps>) {
  return (
    <section
      id="menu"
      className={`p-12 ${theme === "primary" ? "bg-primary" : ""}`}
    >
      <h2
        className={`${
          theme === "primary" ? "text-background" : "text-primary"
        }`}
      >
        {sectionTitle}
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={`${index}-${item.title}`}
            className={`p-6 ${
              theme === "primary" ? "bg-background" : ""
            } shadow-lg rounded-lg hover:shadow-xl transition-shadow`}
          >
            <Image
              src={item.imageSrc}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
