import React from "react";
import ImageTextSection from "./ImageTextSection";

const AboutSection: React.FC = () => {
  return (
    <section id="quienes-somos" className="p-12">
      <div id="about" className="max-w-6xl mx-auto">
        <h2>Quienes Somos</h2>
        <p className="text-lg mt-8">
          Bejaus es más que un café: es un punto de encuentro en el corazón de
          Les Corts. Inspirados por la vibrante energía de Barcelona, hemos
          creado un espacio acogedor donde disfrutar de café de especialidad,
          cervezas locales y una gastronomía fresca y de proximidad. Nuestro
          enfoque es simple: calidad en cada detalle, desde el primer sorbo de
          café hasta el último bocado de un pastel casero.
        </p>
        <p className="text-lg mt-4">
          Aquí celebramos lo local y lo auténtico, priorizando ingredientes
          sostenibles y de productores cercanos. Creemos en el poder de la
          comunidad, en las conversaciones que fluyen mientras compartes una
          tapa o en las ideas que nacen con una taza en la mano.
        </p>
        <p className="text-lg mt-4">
          En Bejaus, no solo queremos que te sientas como en casa; queremos que
          encuentres un lugar que inspire tu día. Ven, siéntate y disfruta.
        </p>
        <div className="mt-12">
          <h2>Nuestros valores</h2>
          <ImageTextSection
            title="Calidad"
            description="Cada producto que ofrecemos está cuidadosamente seleccionado y preparado, asegurando siempre una experiencia excepcional a un precio justo."
            imageSrc="/coffee_break.jpg"
            imageAlt="Productos de calidad"
            imagePosition="left"
          />

          <ImageTextSection
            title="Comunidad"
            description="Somos un lugar para conectar, compartir y crear momentos memorables con vecinos y visitantes por igual."
            imageSrc="/friends.jpg"
            imageAlt="Conexión comunitaria"
            imagePosition="right"
          />

          <ImageTextSection
            title="Localidad"
            description="Apoyamos a los productores locales utilizando ingredientes de proximidad, celebrando lo mejor de nuestra tierra."
            imageSrc="/toast2.jpg"
            imageAlt="Productos locales"
            imagePosition="left"
          />

          <ImageTextSection
            title="Capital Humano"
            description="Promovemos un ambiente de trabajo basado en el respeto, el apoyo mutuo y el desarrollo personal. Nuestra gestión humana y cercana garantiza que cada colaborador se sienta valorado y sea una parte esencial de nuestro éxito."
            imageSrc="/happy_employee.jpg"
            imageAlt="Equipo de Bejaus"
            imagePosition="right"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
