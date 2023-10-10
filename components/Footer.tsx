import Link from "next/link"
import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaWhatsapp,

  FaRocket,
  FaPinterest,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa"
import {IoHammer} from "react-icons/io5"
import {AcmeLogo} from "./AcmeLogo.jsx";

const Footer1 = () => {
  return (
    <footer className="flex flex-col min-h-[250px] w-full md:flex-col items-center space-y-10 bg-black px-8 md:px-20 py-10 font-medium text-white">
      <div className="flex w-full flex-col md:flex-row md:justify-between  md:space-y-0">
        <figure className="flex flex-col items-center ">
          <AcmeLogo width={200} height={200} />

        </figure>
        <div className="md:px-8">
          <h2 className="flex items-center space-x-2 text-2xl">
            <span>Habilitaciones Rosario SRL</span>
            </h2>
          <div className="mt-8 flex flex-col gap-8 justify-around">
            <span className="flex items-center space-x-4">
              <FaPhoneAlt />
              <span>+5493415883040</span>
              
            </span>
            <span className="flex items-center space-x-4">
              <FaEnvelope />
              <a
              className="hover:text-blue-400 transition-colors duration-200 font-semibold text-lg"
              href="info@habilitacionesrosario.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@habilitacionesrosario.com
            </a>
            </span>
          </div>

        </div>
      </div>
      <div className="my-4 w-full border-t border-slate-500" />
      <div className="flex flex-col mt-4 w-full md:flex-row items-center justify-between">
        <ul className="flex flex-row gap-8">
          <li className="hidden md:flex cursor-pointer hover:underline">Servicios</li>
          <li className="cursor-pointer hover:underline">Preguntas Frecuentes</li>
          <li className="cursor-pointer hover:underline">Obras</li>
          <li className="cursor-pointer hover:underline" href="#presupuesto">Presupuestos</li>
          
        </ul>
        <span className="mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} This website is made with{" "}
          <Link
            className="hover:text-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500 animate-gradient-x"
            href="https://www.devink.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            devink.dev
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer1