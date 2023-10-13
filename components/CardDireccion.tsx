import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

interface CardDireccionProps {
  className: string;
}

function CardDireccion({ className }: CardDireccionProps) {
  return (
    <Card className={className}>
      <CardHeader className="relative max-h-[23%] min-h-[23%]  flex-col gap-3 bg-[#333]">
        <div className="flex flex-col items-start justify-center h-full">
          <p className="text-2xl font-bold">Dirección de Obra</p>
          <p className="text-sm">Gestión y supervisión de proyectos constructivos</p>
        </div>
      </CardHeader>

      <Divider className="bg-white" />

      <CardBody className="scrollbar-hide min-h-[300px]">
        <ul className="px-1 space-y-2 text-lg">
          <li>Supervisión rigurosa en cada etapa.</li>
          <li>Gestión eficiente de equipos profesionales.</li>
          <li>Cumplimiento estricto de normativas y calidad.</li>
          <li>Reportes de progreso.</li>
          <li>Solución rápida a desafíos técnicos.</li>
          <li>Prioridad en la seguridad y motivacion del equipo.</li>
        </ul>
      </CardBody>
    </Card>
  );
}

export default CardDireccion;
