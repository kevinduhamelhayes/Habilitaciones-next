import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

interface CardHabilitacionesProps {
  className: string;
}

function CardHabilitaciones({ className }: CardHabilitacionesProps) {
  return (
    <Card className={className}>
      <CardHeader className="relative flex-col gap-3 bg-[#333]">
        <div className="flex flex-col self-start">
          <p className="text-2xl font-bold">Habilitaciones comerciales</p>
          <p className="text-sm text-white">Gestión online y asesoramiento</p>
        </div>
      </CardHeader>

      <Divider className="bg-white" />

      <CardBody className="scrollbar-hide min-h-[300px] text-white">
        <ul className="px-1 space-y-2 text-lg">
          <li>Trámites de habilitación y renovación</li>
          <li>Asesoramiento personalizado para tu negocio</li>
          <li>Soporte técnico rápido y eficiente</li>
          <li>Integración con sistemas municipales</li>
          <li>Consultoría en normativas y regulaciones</li>
          <li>Inspecciones y certificaciones Electricas</li>
        </ul>
      </CardBody>
    </Card>
  );
}

export default CardHabilitaciones;
