import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const links = [
  { name: "Inicio", href: "#hero" },
  { name: "Proyectos", href: "#projects" },
  { name: "Sobre mí", href: "#about" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-neutral-700 text-white font-grotesk h-20"
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 h-full">
        <div className="flex items-center gap-4">
          {/* LOGO con tooltip visual */}
          <div className="relative group">
            <img
              src="/assets/Logo_sin.png"
              alt="Logo"
              className="h-20 w-auto object-contain"
            />
            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50 hidden md:block">
              Andrés Camilo Solano Pantoja | Backend Developer
            </div>
          </div>

          {/* Nombre escalonado */}
          <div className="leading-none">
            <span className="block text-white text-base font-bold">Andrés</span>
            <span className="block text-purple-400 text-base font-bold ml-12">
              Solano
            </span>
          </div>
        </div>

        <div className="hidden md:flex gap-6">
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

        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-purple-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
