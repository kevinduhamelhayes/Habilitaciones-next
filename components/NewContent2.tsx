import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";

const NewContent2 = () => {
    return (
        <Card className='flex flex-col lg:flex-row w-full lg:w-[1300px] min-h-[500px] max-h-[1050px] overflow-hidden lg:h-[400px] bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto '>

            <CardBody className='p-6 w-full lg:w-[50%]'>
                <ul>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Planificación y Ejecución</h4>
                        <p className='text-lg'>Podemos planificar, dirigir y terminar tu obra en tiempo récord. Somos profesionales motivados y buscamos transmitir eso a nuestro personal para tu tranquilidad.</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Habilitación de Industria o Comercio</h4>
                        <p className='text-lg'>¿Te están haciendo larga la habilitación de tu industria o comercio? Tranquilo, estás en el lugar correcto, tenemos experiencia sacando adelante tramites que parecian imposibles.</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Servicios Flexibles</h4>
                        <p className='text-lg'>Puedes contar con nuestra asesoría más básica o pedirnos que nos encarguemos de todo (personal, materiales, seguros, etc), tú decides SIEMPRE.</p>
                    </li>
                </ul>
            </CardBody>
            <CardFooter className='w-full max-h-[500px] object-contain lg:w-[50%] relative m-2'>
                <Image src="/habilitaciones/WhatsApp Image 2023-09-22 at 6.17.49 PM.jpeg" alt='depto1' className=' rounded-lg object-fill' />
            </CardFooter>
        </Card>
    )
}

export default NewContent2;


