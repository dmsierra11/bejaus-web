"use client";

import Hero from "@/components/Hero";
import ImageTextSection from "@/components/ImageTextSection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EventsOffers from "@/components/EventsOffers";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <main>
      <Hero
        title="Welcome to Bejaus"
        subtitle="A space where coffee, creativity, and community meet."
        buttonText="Explore our menu"
        videoSrc="/coffee1.mp4"
        onButtonClick={() => {
          // Handle button click
          document
            .getElementById("menu")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <ImageTextSection
        title="Our Philosophy"
        description="We believe in creating a space that brings together design, comfort, and exceptional coffee. Our approach combines the timeless principles of Bauhaus design with the warmth of a neighborhood café."
        imageSrc="/barna_bejaus.jpg"
        imageAlt="Bejaus coffee shop interior"
      />

      <ImageTextSection
        title="Community"
        description="More than just a café, we're a gathering place for creatives, coffee enthusiasts, and neighbors. Our space is designed to foster connections and inspire collaboration within our vibrant Les Corts community."
        imageSrc="/community.jpg"
        imageAlt="Bejaus community gathering"
        imagePosition="right"
      />

      <MenuSection
        sectionTitle="Our Menu"
        items={[
          {
            title: "Brunch",
            description:
              "A delightful mix of sandwiches, homemade bread, and healthy bowls.",
            imageSrc: "/brunch.jpg",
          },
          {
            title: "Specialty Coffee",
            description: "Carefully brewed with love, featuring local roasts.",
            imageSrc: "/coffee.jpg",
          },
          {
            title: "Craft Beer",
            description:
              "Experience local craft beer and vermouth with appetizers.",
            imageSrc: "/beer.jpg",
          },
        ]}
        theme="secondary"
      />

      <ContactSection
        title="Contact Us"
        contactInfo="Visit us at Les Corts, Barcelona, or follow us on Instagram @bejauscafe."
        subscribeTitle="Stay Connected"
        subscribeDescription="Subscribe to our newsletter for updates, events, and special offers."
      />

      {/* <EventsOffers events={[]} /> */}

      <Footer
        additionalContent={
          <NewsletterSignup
            title="Stay Connected"
            description="Subscribe to our newsletter for updates, events, and special offers."
          />
        }
      />
    </main>
  );
}
