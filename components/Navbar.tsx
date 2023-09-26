import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import {SearchIcon} from "./SearchIcon.jsx";

const Component = () => {

  return (
    <Navbar className="bg-black rounded-b-xl min-h-[90px] text-white" position="sticky">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-2xl text-inherit">Habilitaciones Rosario</p>
      </NavbarBrand>
      <NavbarContent className=" gap-6 ml-12 md:flex hidden " justify="center"> {/* md:hidden esconde el contenido en pantallas medianas y más pequeñas */}
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
          <Button as="a" color="success" className="text-xl text-white font-semibold px-8 py-6 mx-8" href="https://api.whatsapp.com/send/?phone=%2B543415883040" variant="shadow">
            Wats App
          </Button>
   </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
export default Component;

