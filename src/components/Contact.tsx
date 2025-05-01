export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-32 w-full py-20 px-6 text-white font-grotesk bg-black/70 backdrop-blur-sm min-h-[calc(100vh-80px-200px)]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-xl mx-auto flex flex-col justify-center h-full">
        <h2 className="text-3xl font-bold text-center mb-10">📬 Contáctame</h2>

        <form
          action="https://formsubmit.co/andresolano.12.651@gmail.com"
          method="POST"
          className="flex flex-col gap-6"
        >
          {/* Evita spam */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://portfolio-backend-lake-seven.vercel.app/thanks"
          />

          <input
            type="text"
            name="name"
            required
            placeholder="Tu nombre"
            className="bg-neutral-900 border border-neutral-700 p-3 rounded-md text-white placeholder-white/70"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Tu correo"
            className="bg-neutral-900 border border-neutral-700 p-3 rounded-md text-white placeholder-white/70"
          />
          <textarea
            name="message"
            required
            placeholder="Tu mensaje"
            rows={5}
            className="bg-neutral-900 border border-neutral-700 p-3 rounded-md text-white placeholder-white/70"
          ></textarea>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-800 transition text-white font-semibold py-3 px-6 rounded-full"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
