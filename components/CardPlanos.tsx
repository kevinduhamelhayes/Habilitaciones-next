import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

interface CardPlanosProps {
  className: string;
}

function CardPlanos({ className }: CardPlanosProps) {
  return (
    <Card className={className}>
      <CardHeader className="relative max-h-[23%] min-h-[23%]  flex-col gap-3 bg-[#333]">
        <div className="flex flex-col items-start justify-center w-full h-full">
          <p className="text-2xl font-bold">Planos, finales de Obra</p>
          <p className="text-sm">Regularizaciones</p>
        </div>
      </CardHeader>

      <Divider className="bg-white" />

      <CardBody className="scrollbar-hide min-h-[300px]">
        <ul className="px-1 space-y-2 text-lg">
          <li>Elaboración y revisión de planos</li>
          <li>Planos de obra nueva y PROCREAR</li>
          <li>Trámites para finales de obra</li>
          <li>Regularización de construcciones existentes</li>
          <li>Consultoría en normativas de construcción</li>
          <li>Inspecciones y certificaciones de obra</li>
        </ul>
      </CardBody>
    </Card>
  );
}

export default CardPlanos;


