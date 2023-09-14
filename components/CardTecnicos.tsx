import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Button } from "@nextui-org/react";


function CardTecnicos() {
    return (
      <Card className="max-w-[420px] h-[400px] md:max-w-[370px] md:h-[470px] bg-orange-700 mt-4 text-white shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
            <CardHeader className="relative flex-col gap-3 bg-orange-800">
                <div className="flex flex-col self-start">
                    <p className="text-2xl font-bold">Técnicos Matriculados</p>
                    <p className="text-sm ">Trabajos especiales</p>
                </div>
            </CardHeader>

            <Divider className="bg-white" />

            <CardBody className=" scrollbar-hide">
                <ul className="px-1 space-y-2">
                    <li>Asesoramiento técnico especializado</li>
                    <li>Elaboración de informes técnicos</li>
                    <li>Inspecciones técnicas y certificaciones</li>
                    <li>Consultoría en proyectos de ingeniería y arquitectura</li>
                    <li>Trabajos de medición y cálculos estructurales</li>
                    <li>Supervisión y dirección de obras</li>
                    <li>Regularizaciones y trámites ante entidades</li>
                    <li>Soporte técnico en instalaciones especiales</li>
                </ul>
            </CardBody>
        </Card>
    );
}

export default CardTecnicos;




