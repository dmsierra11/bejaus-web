import React from "react";
import ImageTextSection from "./ImageTextSection";

const AboutSection: React.FC = () => {
  return (
    <section id="quienes-somos" className="p-12">
      <div id="about" className="max-w-6xl mx-auto">
        <h2>Quienes Somos</h2>
        <p className="text-lg mt-8">
          Bejaus es mucho más que un café: es un espacio único en el corazón de
          Les Corts. Inspirados por la energía vibrante de Barcelona, hemos
          creado un lugar acogedor donde disfrutar de café de especialidad,
          cervezas locales y una gastronomía fresca, de proximidad y de calidad.
          Nuestro enfoque es sencillo: cuidar cada detalle, desde el primer
          sorbo de café hasta el último bocado de un pastel casero.
        </p>
        <p className="text-lg mt-4">
          Celebramos lo local y lo auténtico, priorizando ingredientes
          sostenibles de productores cercanos. Creemos en el poder de la
          comunidad, en las conversaciones que surgen al compartir una tapa o en
          las ideas que nacen con una taza en las manos.
        </p>
        <p className="text-lg mt-4">
          En Bejaus, queremos que te sientas como en casa y encuentres un lugar
          que inspire tu día. Ven, siéntate y disfruta de la experiencia.
        </p>
        <div className="mt-12">
          <h2>Nuestros valores</h2>
          <ImageTextSection
            title="Calidad"
            description="Seleccionamos cuidadosamente cada producto para ofrecerte una experiencia excepcional, siempre a un precio justo que refleje el valor de lo que ofrecemos."
            imageSrc="/coffee_break.jpg"
            imageAlt="Productos de calidad"
            imagePosition="left"
          />

          <ImageTextSection
            title="Comunidad"
            description="Bejaus es el lugar donde vecinos y visitantes se conectan, creando momentos memorables y compartiendo buenos ratos en un ambiente relajado y amigable."
            imageSrc="/friends.jpg"
            imageAlt="Conexión comunitaria"
            imagePosition="right"
          />

          <ImageTextSection
            title="Localidad"
            description="Apoyamos a productores locales utilizando ingredientes frescos y de proximidad, celebrando lo mejor de nuestra tierra y apoyando la economía local."
            imageSrc="/toast2.jpg"
            imageAlt="Productos locales"
            imagePosition="left"
          />

          <ImageTextSection
            title="Capital Humano"
            description="Fomentamos un ambiente de trabajo respetuoso, cercano y colaborativo, donde cada miembro se siente valorado y parte esencial de nuestro éxito."
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
