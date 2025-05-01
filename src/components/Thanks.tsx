export default function Thanks() {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center text-white px-6 font-grotesk bg-[url('/assets/bg.jpg')] bg-cover bg-center"
      >
        <div className="bg-black/80 backdrop-blur-md p-10 rounded-xl shadow-xl text-center max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-500 mb-4">
            ¡Gracias por tu mensaje!
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            He recibido tu mensaje con éxito. Te responderé lo más pronto posible.
          </p>
          <a
            href="/#hero"
            className="bg-purple-600 hover:bg-purple-800 transition text-white font-semibold py-3 px-6 rounded-full"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    );
  }
  