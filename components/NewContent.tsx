import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const NewContent = () => {
    return (
        <Card className='flex flex-col-reverse lg:flex-row w-full lg:w-[1300px] min-h-[500px] lg:h-[400px] bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto overflow-hidden'>
            <CardBody className='p-6 w-full lg:w-[50%]'>
                <ul>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Te ayudamos a salir de los largos trámites de la municipalidad</h4>
                        <p className='text-lg'>Nos encargamos de todo para que no tengas que preocuparte por nada.</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Te están haciendo larga la habilitación de tu industria o comercio?</h4>
                        <p className='text-lg'>Tranquilo estamos acostumbrados, y estás en el lugar correcto.</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Servicios Flexibles:</h4>
                        <p className='text-lg'>Puedes contar con nuestra asesoría más básica o pedirnos que nos encarguemos de todo tú decides SIEMPRE, contamos con técnicos propios y mayoristas a tu disposición.</p>
                    </li>
                </ul>
                <div className='flex w-full flex-row justify-center'>
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
                </div>
            </CardBody>
            <CardFooter className='w-full lg:w-[50%] relative'>
                <Image src="/salta/salta7.jpg"  alt='depto1' className='bg-cover object-fill rounded-lg rounded-l-none' />
            </CardFooter>
        </Card>
    )
}

export default NewContent;

