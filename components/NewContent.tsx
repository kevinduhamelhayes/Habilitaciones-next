import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const NewContent = () => {
    return (
        <Card id='presupuesto' className='flex flex-col-reverse lg:flex-row w-full lg:w-[1300px] min-h-[488px] lg:h-[400px] bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto overflow-hidden'>
            <CardBody className='p-6 w-full lg:w-[50%]'>
                <ul>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Te ayudamos a salir de los largos trámites de la municipalidad</h4>
                        <p className='text-lg'>Puesta a tierra, Planos, Planes de evacuacion, Sistemas de deteccion de incendio, Certificacion electrica, Certificacion de Instalacion de Gas</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Tu contratista o arquitecto te dejo a medias?</h4>
                        <p className='text-lg'>Tranquilo estamos acostumbrados, podemos darte una mano</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Servicios Flexibles:</h4>
                        <p className='text-lg'>Podemos enviarte desde un electricista para una urgencia, un cerrajero, hasta pactar la direccion de una obra completa, solo acercate por WhatsApp o via email y te responderemos rapidamente</p>
                    </li>
                </ul>
                <div className='flex w-full flex-row justify-center gap-8'>
                    <Button
                        as="a"
                        color="success"
                        className="text-xl text-white font-semibold px-8 py-6 "
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://api.whatsapp.com/send/?phone=%2B543415883040"
                        variant="shadow"
                    >
                        WhatsApp
                    </Button>
                    <Button
                        as="a"
                        color="primary"
                        className="text-xl text-white font-semibold px-14 py-6"
                        href="mailto:info@habilitacionesrosario.com?subject=presupuesto&
  body=Contenido%20del%20correo."
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="shadow"
                    >
                        Email
                    </Button>

                </div>
            </CardBody>
            <CardFooter className='w-full p-0 m-0 lg:w-[50%] relative'>
                <Image src="/salta/salta7.jpg" alt='depto1' className='bg-cover object-fill rounded-lg ' />
            </CardFooter>
        </Card>
    )
}

export default NewContent;

