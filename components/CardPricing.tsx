import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Button } from "@nextui-org/react";


function CardPricing1() {
    return (
        <Card className="max-w-[370px] h-[450px] bg-blue-700 mt-4 text-white">
            <CardHeader className="relative flex-col gap-3 bg-blue-600">
                <div className="flex flex-col self-start">
                    <p className="text-2xl font-bold">Técnicos Matriculados</p>
                    <p className="text-sm text-blue-400">Trabajos especiales</p>
                </div>
            </CardHeader>

            <Divider className="bg-blue-500" />

            <CardBody className="text-blue-300 scrollbar-hide">
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

export default CardPricing1;




