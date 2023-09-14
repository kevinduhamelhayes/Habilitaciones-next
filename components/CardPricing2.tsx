import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Button } from "@nextui-org/react";

function CardPricing2() {
    return (
        <Card className="max-w-[370px] h-[450px] bg-gray-800 mt-4 text-white">
            <CardHeader className="relative flex-col gap-3 bg-gray-700">
                <div className="flex flex-col self-start">
                    <p className="text-2xl font-bold">Habilitaciones comerciales</p>
                    <p className="text-sm text-gray-400">Gestión online y asesoramiento</p>
                </div>
            </CardHeader>

            <Divider className="bg-gray-600" />

            <CardBody className="text-gray-400 scrollbar-hide">
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