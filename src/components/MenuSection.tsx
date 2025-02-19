import { Menu } from "@/types/menu";
interface MenuSectionProps {
  sectionTitle: string;
  menuItems: Menu;
  theme?: "primary" | "secondary";
}

export default function MenuSection({
  sectionTitle,
  menuItems,
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(menuItems).map(([category, items]) => (
          <div
            key={category}
            className={`p-6 ${
              theme === "primary" ? "bg-background" : ""
            } shadow-lg rounded-lg hover:shadow-xl transition-shadow`}
          >
            <h4 className="text-xl font-bold mb-3">{category}</h4>
            <div className="divider" />
            {items.map((item) => (
              <div key={item.title}>
                <h5 className="text-lg font-bold mb-2">{item.title}</h5>
                <div className="flex row justify-between mb-2">
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="divider" />
              </div>
            ))}
            {/* <Image
              src={item.imageSrc}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded"
            /> */}
          </div>
        ))}
      </div>
    </section>
  );
}
