"use client";

import Hero from "@/components/Hero";
// import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main>
      <Hero
        title="Welcome to Bejaus"
        subtitle="A space where coffee, creativity, and community meet."
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

      <Footer />
    </main>
  );
}
