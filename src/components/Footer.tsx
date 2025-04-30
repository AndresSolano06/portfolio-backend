import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black/90 text-white font-grotesk py-8 px-6 border-t border-neutral-700">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-white/70 text-center md:text-left">
          © {new Date().getFullYear()} Andrés Solano. Todos los derechos reservados.
        </p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/AndresSolano06"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/andres-camilo-solano-pantoja-13b52819a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:andresolano.12.651@gmail.com"
            className="hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
