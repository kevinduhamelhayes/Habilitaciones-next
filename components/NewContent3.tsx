import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";

const NewContent3 = () => {
    return (
        <Card id='Nosotros' className='flex flex-col lg:flex-row w-full lg:w-[1300px] min-h-[485px] lg:h-[400px] p-0 bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto overflow-hidden'>
            <CardFooter className='w-full lg:w-[50%] min-h-[485px] h-full relative p-0 m-0'>
                <Image src="/seguridad/IMG-20211118-WA0011.jpg"  alt='pileta' className='bg-cover object-fill min-h-[485px] rounded-lg p-0 m-0 h-full' />
            </CardFooter>
            <CardBody className='pt-6 w-full lg:w-[50%]'>
                <ul>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>La seguridad primero siempre:</h4>
                        <p className='text-lg'>Colocamos Concertinas (alambre carcelario), alambres de puas, pinchos por metro, y podemos asesorarte en la seguridad de tu familia o tus valores</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Alarmas y sistemas de CCTV</h4>
                        <p className='text-lg'>Nosotros ganamos si vos estas seguro, vendemos y colocamos sistemas de hasta 32 camaras, sistemas de alarmas industriales y domesticas de entre 4 y 128 zonas, si te preocupa la seguridad exterior consultanos por nuestras soluciones</p>
                    </li>
                    <li className=''>
                        <h4 className='text-xl font-semibold'>La Seguridad debe ser Comoda</h4>
                        <p className='text-lg'>Nuestra idea de seguridad parte de aqui, podemos ayudarte a que todo este vinculado a tu telefono, podemos armar un sistema completo para tu industria y que se vea en tu telefono de forma centralizada.</p>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default NewContent3;
