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

        {/* Subscribe Section */}
        <div className="bg-primary text-background p-8 rounded-lg">
          <h4 className="text-2xl font-semibold text-center mb-4">
            {subscribeTitle}
          </h4>
          <p className="text-center mb-6">{subscribeDescription}</p>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded text-primary"
              required
            />
            <button
              type="submit"
              className="bg-accent text-background px-6 py-2 rounded hover:bg-background hover:text-accent transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
