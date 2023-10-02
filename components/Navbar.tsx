import React from "react";
import { Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { Link } from 'react-scroll'; // Importa Link de react-scroll

const Navbar = () => {
  return (
    <div className="bg-black w-full min-h-[90px] justify-center text-white flex items-center sticky top-0 p-4 z-50">
      <div className="flex flex-row items-center justify-between max-w-[90%] w-full">
        <div className="flex items-center">
          <AcmeLogo />
          <p className="font-bold hidden md:flex text-2xl">Habilitaciones Rosario</p>
        </div>
        <div className="gap-12 ml-12 hidden sm:hidden justify-center items-center lg:mx-4 lg:flex xl:flex">
          <span className="text-xl font-semibold text-white cursor-pointer">
            <Link to='services' smooth={true} duration={500} className="text-white font-semibold text-lg">
              Servicios
            </Link>
          </span>
          <span className="text-lg text-white cursor-pointer">
            <Link to='faq' smooth={true} duration={500} className="text-white font-semibold text-lg">
              Preguntas Frecuentes
            </Link>
          </span>
          <span className="text-lg text-white cursor-pointer ">
            <Link to='Nosotros' smooth={true} duration={500} className="text-white font-semibold text-lg">
              Mas Sobre Nosotros
            </Link>
          </span>
        </div>
        <Button
          as="a"
          color="success"
          className="text-xl text-white font-semibold px-8 py-6"
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send/?phone=%2B543415883040"
          variant="shadow"
        >
          WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default Navbar;



