import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";

const NewContent1 = () => {
    return (
        <Card className='flex flex-col lg:flex-row w-full lg:w-[1300px] min-h-[500px] lg:h-[400px] bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto overflow-hidden'>
            <CardFooter className='w-full lg:w-[50%] relative'>
                <Image src="/pileta/IMG-20220520-WA0198.jpg"  alt='pileta' className='bg-cover object-fill rounded-lg rounded-r-none' />
            </CardFooter>
            <CardBody className='p-6 w-full lg:w-[50%]'>
                <ul>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Mira nuestras obras:</h4>
                        <p className='text-lg'>Puedes ver todos los antes y después, ahí tendrás una idea de nosotros, si tienes una idea innovadora consúltanos, no te olvides de pasar por la sección de preguntas frecuentes.</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>¿Quieres darle un giro a un ambiente de tu casa, industria o negocio?</h4>
                        <p className='text-lg'>Somos la mejor respuesta, no podemos asegurar ser los más baratos pero nuestros resultados hablan solos.</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Servicios a Industrias:</h4>
                        <p className='text-lg'>Podemos trabajar con hasta 10kva, sistemas hidráulicos y neumáticos, gas con matrículas de primera, certificar puesta a tierra, planes de seguridad, y de evacuación, hacemos Planos, gestionamos ampliaciones, y mucho más! Te esperamos.</p>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default NewContent1;
