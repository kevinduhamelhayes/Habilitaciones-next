import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Button } from "@nextui-org/react";

function CardPricing2() {
    return (
        <Card className="max-w-[370px] h-[470px] bg-blue-700 mt-4 text-white shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
            <CardHeader className="relative flex-col gap-3 bg-blue-800">
                <div className="flex flex-col self-start">
                    <p className="text-2xl font-bold">Habilitaciones comerciales</p>
                    <p className="text-sm text-white">Gestión online y asesoramiento</p>
                </div>
            </CardHeader>

            <Divider className="bg-white" />

            <CardBody className=" scrollbar-hide">
                <ul className="px-1 space-y-2">
                    <li>Trámites de habilitación y renovación</li>
                    <li>Asesoramiento personalizado para tu negocio</li>
                    <li>Soporte técnico rápido y eficiente</li>
                    <li>Integración con sistemas municipales y estatales</li>
                    <li>Consultoría en normativas y regulaciones</li>
                    <li>Acceso a plataformas de gestión online</li>
                    <li>Webinars y capacitaciones sobre regulaciones</li>
                    <li>Asesoramiento en estrategias de cumplimiento</li>
                </ul>
            </CardBody>


        </Card>
    );
}

export default CardPricing2;