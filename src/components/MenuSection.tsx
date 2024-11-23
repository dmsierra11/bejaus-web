interface MenuItem {
  title: string;
  description: string;
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
}: MenuSectionProps) {
  return (
    <section
      id="menu"
      className={`p-12 ${theme === "primary" ? "bg-primary" : ""}`}
    >
      <h3
        className={`text-3xl font-semibold text-center mb-6 ${
          theme === "primary" ? "text-background" : "text-primary"
        }`}
      >
        {sectionTitle}
      </h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-6 ${
              theme === "primary" ? "bg-background" : ""
            } shadow-lg rounded-lg hover:shadow-xl transition-shadow`}
          >
            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
