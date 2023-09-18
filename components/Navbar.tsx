import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import {SearchIcon} from "./SearchIcon.jsx";

const Component = () => {

  return (
    <Navbar className="bg-slate-900 min-h-[110px] text-white" position="static">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-2xl text-inherit">Habilitaciones Rosario</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6 ml-12" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#servicios" className="text-xl font-semibold text-white">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#"  className="text-lg text-white">
            Preguntas Frecuentes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-lg text-white">
            Regularizaciones
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as="a" color="success" className="text-xl text-white  px-8 py-6 mx-8" href="https://api.whatsapp.com/send/?phone=%2B543415883040" variant="solid">
            Wats App
          </Button>
   </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Component;
