import React from "react";
import { motion } from "framer-motion";
type Project = {
  title: string;
  description: string;
  repoUrl: string;
};

const projects: Project[] = [
  {
    title: "Wallet API (.NET 8)",
    description:
      "API REST desarrollada en .NET 8 siguiendo el patrón de arquitectura limpia. Esta aplicación permite la gestión de billeteras digitales y sus movimientos, con autenticación basada en JWT y pruebas automatizadas.",
    repoUrl: "https://github.com/AndresSolano06/wallet-api",
  },
  {
    title: "Hotel Booking App",
    description:
      "Hotel Booking API es una API RESTful para gestionar hoteles, habitaciones y reservas. Proporciona puntos finales para crear, actualizar, recuperar y eliminar hoteles, habitaciones y reservas de forma eficiente; todo mediante una protección de JWT",
    repoUrl: "https://github.com/AndresSolano06/HotelBookingApp",
  },
  {
    title: "PQRS Tuboleta",
    description:
      "Participación en la actualización y mejora de la parte backend del PQRS de Tuboleta, realizando una migración de PHP a C#, haciendo una arquitectura de microservicios, en AZURE y AWS como principales servicios en nube e implementando CI/CD",
    repoUrl: "",
  },
  {
    title: "Plataforma de consultas afiliados",
    description:
      "Creación",
    repoUrl: "https://github.com/AndresSolano06/legal-assistance-api",
  },
  // Puedes agregar más aquí
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 text-white font-grotesk bg-black/60 backdrop-blur-sm pt-24"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        🚀 Proyectos destacados
      </h2>

      <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-neutral-900 hover:bg-neutral-800 transition-all rounded-xl border border-neutral-700 p-6 shadow-md group"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
              {project.title}
            </h3>
            <p className="text-sm text-neutral-300">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
