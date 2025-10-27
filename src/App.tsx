import Projects from "./components/Projects";
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full font-grotesk text-white">
      <Navbar />

      {/* Hero Section */}
      <div
        id="hero"
        className="scroll-mt-32 min-h-screen w-full flex flex-col items-center justify-center text-center px-4 pt-20 pb-32"
      >
        <div className="bg-black/70 p-6 rounded-lg"> 
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 mb-10">
            <img
              src="/assets/icons/c-sharp.svg"
              alt="C#"
              className="w-16 h-16 object-contain mx-auto transition-transform transform hover:scale-150 duration-300"
            />
            <img
              src="/assets/icons/azure.svg"
              alt="Azure"
              className="w-16 h-16 object-contain mx-auto transition-transform transform hover:scale-150 duration-300"
            />
            <img
              src="/assets/icons/devops.svg"
              alt="DevOps"
              className="w-16 h-16 object-contain mx-auto transition-transform transform hover:scale-150 duration-300"
            />
            <img
              src="/assets/icons/aws.svg"
              alt="AWS"
              className="w-16 h-16 object-contain mx-auto transition-transform transform hover:scale-150 duration-300"
            />
            <img
              src="/assets/icons/java.svg"
              alt="JAVA"
              className="w-16 h-16 object-contain mx-auto transition-transform transform hover:scale-150 duration-300"
            />
            <img
              src="/assets/icons/sqlserver.svg"
              alt="SQL Server"
              className="w-16 h-16 object-contain mx-auto transition-transform transform hover:scale-150 duration-300"
            />
            <img
              src="/assets/icons/github.svg"
              alt="GitHub"
              className="w-16 h-16 object-contain mx-auto transition-transform transform hover:scale-150 duration-300"
            />
            <img
              src="/assets/icons/python.svg"
              alt="Python"
              className="w-16 h-16 object-contain mx-auto transition-transform transform hover:scale-150 duration-300"
            />
          </div>

          {/* Button */}
          <button
            onClick={scrollToProjects}
            className="bg-[rgba(199,175,235,1)] hover:bg-[rgba(182,127,238,1)] text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition duration-300 shadow-md hover:shadow-lg"
          >
            Ver Proyectos <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Projects Section */}
      <Projects />
      {/* Sobre mí Section */}
      <About />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
