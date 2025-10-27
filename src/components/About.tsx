export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-32 w-full  py-10 px-6 text-white font-grotesk"
      // data-aos="fade-up"
      // data-aos-duration="1000"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#646cff]">🙋 Sobre mí</h2>

        <p className="mt-6 text-md md:text-lg text-[#646cff] italic">
          Soy <strong>Andrés Camilo Solano</strong>, un apasionado desarrollador
          backend con enfoque en <strong>.NET y Azure</strong>. Me caracterizo
          por ser analítico, metódico y siempre orientado a encontrar soluciones
          eficientes, limpias y seguras.
        </p>

        <p className="mt-6 text-md md:text-lg text-[#646cff] italic">
          Me encanta trabajar en sistemas escalables, aplicar principios SOLID y
          arquitectura hexagonal, optimizar el rendimiento y colaborar en
          soluciones con impacto real. Tengo experiencia profesional en sectores
          de entretenimiento, eventos, fintech y servicios cloud.
        </p>

        <p className="mt-6 text-md md:text-lg text-[#646cff] italic">
          Fuera del código, disfruto del trekking en Colombia, la fotografía de
          naturaleza, los videojuegos estratégicos como Age of Empires, y el
          café colombiano ☕ como ritual de enfoque y creatividad.
        </p>

        {/* Herramientas */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-[#646cff]">
            🛠️ Herramientas favoritas
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center text-sm text-white/80">
              <img
                src="/assets/tools/vscode.svg"
                alt="VS Code"
                className="w-16 h-16 object-contain mx-auto transition-transform transform hover:scale-150 duration-300"
              />
              <span className="mt-3">VS Code</span>
            </div>
            <div className="flex flex-col items-center text-sm text-white/80">
              <img
                src="/assets/tools/visualstudio.svg"
                alt="Visual Studio"
                className="w-16 h-16 object-contain mx-auto transition-transform transform hover:scale-150 duration-300"
              />
              <span className="mt-3">Visual Studio</span>
            </div>
            <div className="flex flex-col items-center text-sm text-white/80">
              <img
                src="/assets/tools/intellij.svg"
                alt="IntelliJ IDEA"
                className="w-16 h-16 object-contain mx-auto transition-transform transform hover:scale-150 duration-300"
              />
              <span className="mt-3">IntelliJ</span>
            </div>
            <div className="flex flex-col items-center text-sm text-white/80">
              <img
                src="/assets/tools/pycharm.svg"
                alt="PyCharm"
                className="w-16 h-16 object-contain mx-auto transition-transform transform hover:scale-150 duration-300"
              />
              <span className="mt-3">PyCharm</span>
            </div>
            <div className="flex flex-col items-center text-sm text-white/80">
              <img
                src="/assets/tools/terminal.svg"
                alt="Terminal"
                className="w-16 h-16 object-contain mx-auto transition-transform transform hover:scale-150 duration-300"
              />
              <span className="mt-3">CMD / Bash</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
