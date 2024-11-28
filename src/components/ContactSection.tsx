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
  title = "Contacta con nosotros",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);
    try {
      const response = await fetch("https://formspree.io/f/xzzbavqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Aquí puedes manejar la respuesta, por ejemplo, mostrar un mensaje de éxito
      } else {
        const errorData = await response.json();
        console.error("Error submitting form:", errorData);
        // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error
      }
    } catch (error) {
      console.error("Error:", error);
      // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error
    }
  };

  return (
    <section id="contact" className="p-12 bg-background text-primary">
      <div className="max-w-6xl mx-auto">
        <h2>{title}</h2>
        <p className="mb-4">
          Si tienes alguna pregunta, sugerencia o simplemente quieres
          saludarnos, no dudes en escribirnos.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex items-center order-1 md:order-2">
            <form onSubmit={handleSubmit} className="text-center w-full">
              <p className="mb-4 text-center">
                Completa el formulario y nos pondremos en contacto contigo lo
                antes posible.
              </p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Introduce tu nombre"
                className="border p-2 mb-4 w-full"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Introduce tu correo electrónico"
                className="border p-2 mb-4 w-full"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Introduce tu teléfono"
                className="border p-2 mb-4 w-full"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Introduce tu mensaje"
                className="border p-2 mb-4 w-full h-32"
                required
              />
              <button
                type="submit"
                className="bg-accent text-background px-6 py-2 rounded hover:bg-background hover:text-accent transition-colors"
              >
                Enviar
              </button>
              <p className="mt-4 text-sm">
                Al enviar este formulario, aceptas nuestra{" "}
                <a
                  href="/privacy-policy"
                  className="text-accent hover:underline"
                >
                  Política de Privacidad
                </a>
                .
              </p>
            </form>
          </div>

          {/* Mapa e Información de Contacto */}
          <div className="flex-1 mb-12 md:mb-0 order-2 md:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11973.474384282477!2d2.1277698613120215!3d41.38780093953926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4987ba239aaf5%3A0xb7470b80311eb856!2sCarrer%20de%20l&#39;Equador%2C%2089%2C%20Les%20Corts%2C%2008029%20Barcelona!5e0!3m2!1sen!2ses!4v1732372006315!5m2!1sen!2ses"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
