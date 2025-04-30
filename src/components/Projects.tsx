import React from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  repoUrl?: string;
  tags?: string[];
};

const projects: Project[] = [
  {
    title: "Wallet API (.NET 8)",
    description:
      "API REST desarrollada en .NET 8 con arquitectura limpia, JWT y pruebas automatizadas.",
    repoUrl: "https://github.com/AndresSolano06/wallet-api",
    tags: [".NET", "JWT", "Clean Architecture", "Azure"],
  },
  {
    title: "Hotel Booking App",
    description:
      "API RESTful para gestionar hoteles y reservas, protegida con JWT.",
    repoUrl: "https://github.com/AndresSolano06/HotelBookingApp",
    tags: [".NET", "API REST", "JWT"],
  },
  {
    title: "PQRS Tuboleta",
    description:
      "Migración de backend de PHP a C#, microservicios y despliegue en Azure y AWS.",
    tags: ["C#", "Microservicios", "Azure", "AWS"],
  },
  {
    title: "Plataforma de consultas afiliados",
    description:
      "App para consulta de afiliados en subsidios de eventos, basada en microservicios C#.",
    tags: ["C#", "Azure", "Microservicios"],
  },
  {
    title: "ChatBot por voz para AXEDE",
    description:
      "Asistente de IA por voz usando Python, OpenAI API, Docker y Azure.",
    tags: ["Python", "OpenAI", "Docker", "Azure"],
  },
  {
    title: "Bases para grupo I+D+i",
    description:
      "Formación y liderazgo del equipo I+D+i en Similtech con planes semestrales de innovación.",
    tags: ["Gestión", "Innovación", "Planificación"],
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 text-white font-grotesk bg-black/60 backdrop-blur-sm pt-24"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-3xl font-bold text-center mb-12">🚀 Proyectos destacados</h2>

      <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => {
          const Wrapper = project.repoUrl ? motion.a : motion.div;
          const props = project.repoUrl
            ? { href: project.repoUrl, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <Wrapper
              key={index}
              {...props}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-900 hover:bg-neutral-800 transition-all rounded-xl border border-neutral-700 p-6 shadow-md group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                {project.title}
              </h3>

              <p className="text-sm text-neutral-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 text-xs">
                {project.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-purple-700 text-white px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {!project.repoUrl && (
                  <span className="bg-yellow-700 text-white px-2 py-0.5 rounded-full">
                    Privado
                  </span>
                )}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
