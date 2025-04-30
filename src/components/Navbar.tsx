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
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-neutral-700 text-white font-grotesk"
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-lg font-bold">Andrés Solano</h1>

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
