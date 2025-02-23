"use client";

import Hero from "@/components/Hero";
// import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import useMenuItems from "@/hooks/use-menu-items";

export default function Home() {
  const menuItems = useMenuItems();

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
