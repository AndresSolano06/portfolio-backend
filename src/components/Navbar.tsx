import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Inicio", href: "#hero" },
  { name: "Proyectos", href: "#projects" },
  { name: "Sobre mí", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur border-neutral-700 text-white font-grotesk h-20"
    >
      <div className="max-w-screen-2xl mx-auto px-6 h-full relative flex items-center justify-between md:justify-normal">
        {/* Botón hamburguesa en mobile */}
        <button
          className="md:hidden z-50 text-[#646cff]"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nombre centrado solo en mobile */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center leading-none md:hidden pointer-events-none">
          <span className="block text-[#646cff] text-base font-bold">
            Andrés
          </span>
          <span className="block text-purple-400 text-base font-bold">
            Solano
          </span>
        </div>

        {/* Logo solo en mobile a la derecha */}
        <div className="md:hidden">
          <img
            src="/assets/Logo_sin.png"
            alt="Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Logo y nombre en desktop */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative group">
            <img
              src="/assets/Logo_sin.png"
              alt="Logo"
              className="h-20 w-auto object-contain"
            />
            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
              Andrés Camilo Solano Pantoja | Backend Developer
            </div>
          </div>
          <div className="leading-none">
            <span className="block text-[#646cff] text-base font-bold">
              Andrés
            </span>
            <span className="block text-[#646cff] text-base font-bold ml-12">
              Solano
            </span>
          </div>
        </div>

        {/* Enlaces en desktop */}
        <div className="hidden md:flex gap-6 ml-auto">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-purple-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Menú móvil desplegable animado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-lg flex flex-col items-center gap-6 py-6 z-40"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-lg hover:text-purple-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
