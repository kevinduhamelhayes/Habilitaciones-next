import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";

function CardPricing1() {
    return (
<Card className="max-w-[370px] h-[470px] bg-red-700 mt-4 text-white shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
    <CardHeader className="relative flex-col gap-3 bg-red-800">
        <div className="flex flex-col self-start">
            <p className="text-2xl font-bold">Dirección de Obra</p>
            <p className="text-sm ">Gestión y supervisión de proyectos constructivos</p>
        </div>
    </CardHeader>

    <Divider className="bg-white" />

    <CardBody className=" scrollbar-hide">
        <ul className="px-1 space-y-2">
            <li>Supervisión constante de la obra en construcción</li>
            <li>Coordinación y gestión de equipos de trabajo</li>
            <li>Control de calidad y cumplimiento de normativas</li>
            <li>Optimización de recursos y tiempos</li>
            <li>Medición y seguimiento del avance de obra</li>
            <li>Resolución de imprevistos y desafíos técnicos</li>
            <li>Garantizar la seguridad y bienestar del personal</li>
            <li>Reportes periódicos al cliente o inversor</li>
        </ul>
    </CardBody>
</Card>

    );
}



export default CardPricing1;