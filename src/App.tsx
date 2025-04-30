import Projects from "./components/Projects";
import { FaArrowRight } from "react-icons/fa6";

export default function App() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen font-grotesk text-white">
      {/* Hero Section */}
      <div
        className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center px-4 py-16"
        style={{ backgroundImage: "url('/assets/Background.png')" }}
      >
        <div className="bg-black/60 p-6 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hola, soy Andrés Camilo
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Desarrollador Backend apasionado por .NET y Azure
          </p>
          <p className="text-md md:text-lg text-white/80 max-w-2xl mb-8">
            Me especializo en la creación de APIs robustas, seguras y escalables
            usando el ecosistema .NET y servicios en la nube como Azure. Me
            apasiona la eficiencia del backend y la arquitectura limpia.
          </p>

          {/* Icons */}
          <div className="grid grid-cols-4 gap-8 mb-10">
            <img src="/assets/icons/c-sharp.svg" alt="C#" className="w-20 h-20 mx-auto" />
            <img src="/assets/icons/azure.svg" alt="Azure" className="w-20 h-20 mx-auto" />
            <img src="/assets/icons/devops.svg" alt="DevOps" className="w-20 h-20 mx-auto" />
            <img src="/assets/icons/aws.svg" alt="AWS" className="w-20 h-20 mx-auto" />
            <img src="/assets/icons/java.svg" alt="JAVA" className="w-20 h-20 mx-auto" />
            <img src="/assets/icons/python.svg" alt="Python" className="w-20 h-20 mx-auto" />
            <img src="/assets/icons/github.svg" alt="GitHub" className="w-20 h-20 mx-auto" />
            <img src="/assets/icons/sqlserver.svg" alt="SQL Server" className="w-20 h-20 mx-auto" />
          </div>

          {/* Button */}
          <button
            onClick={scrollToProjects}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition duration-300"
          >
            Ver Proyectos <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Projects Section */}
      <Projects />
    </div>
  );
}
