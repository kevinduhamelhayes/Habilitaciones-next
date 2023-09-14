import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Button } from "@nextui-org/react";

function Card1() {
    return (
        <Card className="max-w-[370px] h-[450px] bg-green-700 mt-4 text-white">
            <CardHeader className="relative flex-col gap-3 bg-green-600">
                <div className="flex flex-col self-start">
                    <p className="text-2xl font-bold">Planos, finales de Obra</p>
                    <p className="text-sm text-green-400">Regularizaciones</p>
                </div>
            </CardHeader>

            <Divider className="bg-green-500" />

            <CardBody className="text-green-300 scrollbar-hide">
                <ul className="px-1 space-y-2">
                    <li>Elaboración y revisión de planos arquitectónicos</li>
                    <li>Trámites para finales de obra</li>
                    <li>Regularización de construcciones existentes</li>
                    <li>Consultoría en normativas de construcción</li>
                    <li>Asesoramiento en permisos y licencias</li>
                    <li>Inspecciones y certificaciones de obra</li>
                    <li>Integración con entidades municipales</li>
                    <li>Soporte técnico en proyectos de construcción</li>
                </ul>
            </CardBody>
        </Card>
    );
}

export default Card1;

