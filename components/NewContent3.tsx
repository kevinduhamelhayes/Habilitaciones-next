import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";

const NewContent3 = () => {
    return (
        <Card id='Nosotros' className='flex flex-col lg:flex-row w-full lg:w-[1300px] min-h-[485px] lg:h-[400px] p-0 bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto overflow-hidden'>
            <CardFooter className='w-full lg:w-[50%] min-h-[485px] h-full relative p-0 m-0'>
                <Image src="/seguridad/IMG-20211118-WA0011.jpg"  alt='pileta' className='bg-cover object-fill min-h-[485px] rounded-lg p-0 m-0 h-full' />
            </CardFooter>
            <CardBody className='p-6 w-full lg:w-[50%]'>
                <ul>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>La seguridad primero siempre:</h4>
                        <p className='text-lg'>Colocamos Concertinas (alambre carcelario), alambres de puas, pinchos por metro, y podemos asesirarte en tus rejas o la seguridad de tu familia</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Alarmas y sistemas de CCTV</h4>
                        <p className='text-lg'>Nosotros ganamos si vos estas seguro, vendemos y colocamos sistemas de 1 , 4, 8 , 16 y 32 camaras, sistemas de alarmas industriales y domesticas de entre 4 y 128 zonas, si te preocupa la seguridad exterior consultanos por los detectores TAKEX</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>La Seguridad debe ser Comoda</h4>
                        <p className='text-lg'>Podemos poner un boton de panico en la casa de la abue, podemos ayudarte a que todo este vinculado a tu telefono, podemos armar un sistema completo para tu industria y que sevea en tu telefono de forma centralizada.</p>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default NewContent3;
