import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

interface CardHabilitacionesProps {
  className: string;
}

function CardHabilitaciones({ className }: CardHabilitacionesProps) {
  return (
    <Card className={className}>
      <CardHeader className="relative max-h-[23%] min-h-[23%]  flex-col gap-3 bg-[#333]">
        <div className="flex flex-col items-start w-full justify-center h-full">
          <p className="text-2xl font-semibold">Habilitaciones de Comercio e Industria</p>
          <p className="text-sm text-white">Habilitaciones inspecciones certificaciones</p>
        </div>
      </CardHeader>

      <Divider className="bg-white" />

      <CardBody className="scrollbar-hide min-h-[300px] text-white">
        <ul className="px-1 space-y-2 text-lg">
          <li>Ampliacion de superficie, anexo de rubros</li>
          <li>Habilitacion provisoria</li>
          <li>Declaracion jurada de inicio de tramites y de modificaciones de rubro</li>

          <li>Consultoría en normativas y regulaciones</li>
          <li>Auditoria y certificaciones Electricas</li>
        </ul>
      </CardBody>
    </Card>
  );
}

export default CardHabilitaciones;
