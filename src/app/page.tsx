"use client";

import Hero from "@/components/Hero";
// import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import { Menu } from "@/types/menu";

const menuItems: Menu = {
  Café: [
    {
      title: "Espresso",
      description: "Espresso",
      imageSrc: "/coffee1.png",
      price: 2.5,
    },
    {
      title: "Latte",
      description: "Latte",
      imageSrc: "/coffee1.png",
      price: 3,
    },
    {
      title: "Batch Brew",
      description: "Batch Brew",
      imageSrc: "/coffee1.png",
      price: 3,
    },
  ],
  Desayunos: [
    {
      title: "Tostada",
      description: "Tostada",
      imageSrc: "/coffee1.png",
      price: 2.5,
    },
  ],
  "Platos Especiales": [
    {
      title: "Tostada",
      description: "Tostada",
      imageSrc: "/coffee1.png",
      price: 2.5,
    },
  ],
  "Platos de la Casa": [
    {
      title: "Tostada",
      description: "Tostada",
      imageSrc: "/coffee1.png",
      price: 2.5,
    },
  ],
};

export default function Home() {
  return (
    <main>
      <Hero
        title="Bienvenidos a Bejaus"
        subtitle="Un lugar donde el café, la creatividad y la comunidad se encuentran."
        buttonText="Conócenos"
        videoSrc="/coffee1.mp4"
        onButtonClick={() => {
          // Handle button click
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <AboutSection />

      {/* <ContactSection title="Contacta con nosotros" /> */}

      <MenuSection sectionTitle="Nuestro Menú" menuItems={menuItems} />

      <Footer />
    </main>
  );
}
