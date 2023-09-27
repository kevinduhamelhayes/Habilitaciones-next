import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

interface CardTecnicosProps {
  className: string;
}

function CardTecnicos({ className }: CardTecnicosProps) {
  return (
    <Card className={className}>
      <CardHeader className="relative flex-col gap-3 bg-[#333]">
        <div className="flex flex-col self-start">
          <p className="text-2xl font-bold">Técnicos Matriculados</p>
          <p className="text-sm">Trabajos especiales</p>
        </div>
      </CardHeader>

      <Divider className="bg-white" />

      <CardBody className="scrollbar-hide min-h-[300px]">
        <ul className="px-1 space-y-2 text-lg">
          <li>Asesoramiento técnico especializado</li>
          <li>Elaboración de informes técnicos</li>
          <li>Inspecciones técnicas y certificaciones</li>
          <li>Consultoría Electrica, hidraulica neumatica y de gas</li>
          <li>Trabajos de medición y cálculos</li>
          <li>Regularizaciones y trámites ante entidades Litoral Gas, Epe</li>
          <li>Asesoria en instalaciones de deteccion de incendio</li>
        </ul>
      </CardBody>
    </Card>
  );
}

export default CardTecnicos;





