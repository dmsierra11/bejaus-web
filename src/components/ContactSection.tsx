"use client";
import { useState } from "react";

interface ContactSectionProps {
  title: string;
  onSubmit?: (formData: {
    name: string;
    email: string;
    message: string;
    phone?: string;
  }) => void;
}

export default function ContactSection({
  title = "Contact Us",
  onSubmit,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <section id="contact" className="p-12 bg-background text-primary">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-6">{title}</h3>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex-1 flex items-center order-1 md:order-2">
            <form onSubmit={handleSubmit} className="text-center w-full">
              <p className="mb-4 text-center">
                Have questions, feedback, or just want to say hi? We&apos;d love
                to hear from you!
              </p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="border p-2 mb-4 w-full"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border p-2 mb-4 w-full"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="border p-2 mb-4 w-full"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="border p-2 mb-4 w-full h-32"
                required
              />
              <button
                type="submit"
                className="bg-accent text-background px-6 py-2 rounded hover:bg-background hover:text-accent transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map and Contact Info */}
          <div className="flex-1 mb-12 md:mb-0 order-2 md:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11973.474384282477!2d2.1277698613120215!3d41.38780093953926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4987ba239aaf5%3A0xb7470b80311eb856!2sCarrer%20de%20l&#39;Equador%2C%2089%2C%20Les%20Corts%2C%2008029%20Barcelona!5e0!3m2!1sen!2ses!4v1732372006315!5m2!1sen!2ses"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
