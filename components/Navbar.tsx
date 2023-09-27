import React from "react";
import { Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

const Navbar = () => {
  return (
    <div className="bg-black w-full min-h-[90px] justify-center text-white flex items-center p-4 sticky top-0 z-50">
      <div className="flex flex-row items-center justify-between max-w-[90%] w-full">
        <div className="flex items-center">
          <AcmeLogo/>
            <p className="font-bold hidden md:flex text-2xl">Habilitaciones Rosario</p>
        </div>
        <div className="gap-6 ml-12 md:flex  hidden sm:hidden lg:flex xl:flex">
          <span className="text-xl font-semibold text-white cursor-pointer">
            <Link color="foreground" href="#servicios">
              Servicios
            </Link>
          </span>
          <span className="text-lg text-white cursor-pointer">
            <Link href="#" className="">
              Preguntas Frecuentes
            </Link>
          </span>
          <span className="text-lg texhiddent-white cursor-pointer">
            <Link color="foreground" href="#">
              Regularizaciones
            </Link>
          </span>
        </div>
          <Button
            as="a"
            color="success"
            className="text-xl text-white font-semibold px-8 py-6"
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


