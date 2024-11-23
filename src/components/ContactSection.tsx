"use client";
interface ContactSectionProps {
  title: string;
  contactInfo: string;
  subscribeTitle: string;
  subscribeDescription: string;
  onSubscribe?: (email: string) => void;
}

export default function ContactSection({
  title = "Contact Us",
  contactInfo,
  subscribeTitle = "Stay Connected",
  subscribeDescription = "Subscribe to our newsletter for updates, events, and special offers.",
  onSubscribe,
}: ContactSectionProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    if (onSubscribe) {
      onSubscribe(email);
    }
  };

  return (
    <section id="contact" className="p-12">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-6">{title}</h3>
        <p className="text-center mb-12">{contactInfo}</p>
      </div>
    </section>
  );
}
