export default function About() {
    return (
      <section
        id="about"
        className="w-full py-20 px-6 text-white font-grotesk bg-black/70 backdrop-blur-sm"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="scroll-mt-32 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">🙋 Sobre mí</h2>
          <p className="text-md md:text-lg text-white/90 leading-relaxed">
            Soy <strong>Andrés Camilo Solano</strong>, un apasionado desarrollador backend con enfoque en <strong>.NET y Azure</strong>. Me caracterizo por ser analítico, metódico y siempre orientado a encontrar soluciones eficientes y seguras.
          </p>
          <p className="mt-6 text-md md:text-lg text-white/80">
            Me encanta trabajar en sistemas escalables, aprender nuevas tecnologías
            y contribuir a proyectos que generen impacto real. Fuera del código,
            disfruto del trekking, la fotografía y el café colombiano ☕.
          </p>
        </div>
      </section>
    );
  }
  