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
    <footer className="flex flex-col min-h-[250px] w-full md:flex-col items-center space-y-10 bg-slate-950 px-20 py-10 font-medium text-white">
      <div className="flex w-full flex-col md:flex-row md:justify-between space-y-5 md:space-y-0">
        <figure className="flex flex-col items-center ">
          <AcmeLogo width={200} height={200} />

        </figure>
        <div>
          <h2 className="flex items-center space-x-2 text-2xl">
            <span>Devink desde la web para el mundo</span>
            <IoHammer className="text-cyan" />
          </h2>
          <div className="mt-4 flex flex-row justify-around">
            <span className="flex items-center space-x-4">
              <FaPhoneAlt />
              <span>+5493415366234</span>
            </span>
            <span className="flex items-center space-x-4">
              <FaEnvelope />
              <a
              className="hover:text-blue-400 transition-colors duration-200 font-semibold text-lg"
              href="mailto:team@devink.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              team@devink.dev
            </a>
            </span>
          </div>
          <div className="mt-8 flex flex-row justify-evenly  gap-5">
            <span className="mb-2 block">Social Media</span>

            <FaLinkedin className="cursor-pointer hover:text-blue-400" />
            <FaGithub className="cursor-pointer hover:text-purple-500" />
            <FaWhatsapp className="cursor-pointer hover:text-green-400" />
            <FaPinterest className="cursor-pointer hover:text-red-400" />
            <FaTwitch className="cursor-pointer hover:text-purple-600" />
            <FaYoutube className="cursor-pointer hover:text-red-600" />
          </div>
        </div>
      </div>
      <div className="my-4 w-full border-t border-slate-500" />
      <div className="flex flex-col mt-4 w-full md:flex-row items-center justify-between">
        <ul className="flex flex-row gap-8">
          <li className="cursor-pointer hover:underline">Servicios</li>
          <li className="cursor-pointer hover:underline">Preguntas Frecuentes</li>
          <li className="cursor-pointer hover:underline">Obras</li>
          <li className="cursor-pointer hover:underline">Presupuestos</li>
          
        </ul>
        <span className="mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} This website is made with <Link href="https://www.devink.dev/">Devink</Link>

        </span>
      </div>
    </footer>
  )
}

export default Footer1