import React from "react";

interface NewsletterSignupProps {
  title: string;
  description: string;
  onSubscribe?: (email: string) => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title,
  description,
  onSubscribe,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = new FormData(form).get("email") as string;
    onSubscribe?.(email);
  };

  return (
    <section id="newsletter-signup" className="newsletter-signup">
      <div className="bg-primary text-background p-8 rounded-lg">
        <h4 className="text-2xl font-semibold text-center mb-4">{title}</h4>
        <p className="text-center mb-6">{description}</p>
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
    </section>
  );
};

export default NewsletterSignup;
