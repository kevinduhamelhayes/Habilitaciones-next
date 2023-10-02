import React from 'react';
import Image from 'next/image';
import { Accordion, AccordionItem, Button } from "@nextui-org/react";

const NewContent1 = () => {
    return (
        <section className='flex flex-col w-[1300px] min-h-[75%] bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600'>
            <div className='flex flex-row w-full'>
            <figure className='w-[50%] h-full '>
                    <Image src="/pileta/IMG-20220520-WA0198.jpg" alt='depto1' width={1000} height={1000} className=' rounded-lg rounded-r-none' />
                </figure>
                <div className='w-[50%] p-6 pb-0'>
                    <ul>
                        <li className='mb-6'>
                            <h3 className='text-2xl font-semibold'>Mira nuestras obras:</h3>
                            <p className='text-lg'>Podes ver todos los antes y despues, ahi tendras una idea de nosotros, si tenes una idea inovadora consultanos, no te olvides de pasar por la seccion de preguntas frecuentes</p>
                        </li>
                        <li className='mb-6'>
                            <h3 className='text-2xl font-semibold'>Queres darle un giro a un ambiente de tu casa industria o negocio?</h3>
                            <p className='text-lg'>Somos la mejor respuesta, no te podemos asegurar ser los mas baratos pero nuestros resultados hablan solos</p>
                        </li>
                        <li className='mb-6'>
                            <h3 className='text-2xl font-semibold'>Servicios a Industrias:</h3>
                            <p className='text-lg'>Podemos trabajar con hasta 10kva, sitemas hidraulicos y neumaticos, gas con matriculas de primera, certificar puesta a tierra, planes de seguridad, y de evacuacion, hacemos Planos, gestionamos ampliaciones, y mucho mas! te esperamos.</p>
                        </li>
                    </ul>
                    
                    {/*
                    <Accordion className='w-full bg-no-repeat' style={{backgroundImage: "url(/svgs/airbnb-1.svg)",
                   backgroundSize: 'contain',  // o 'contain' para asegurarte de que se vea todo el SVG
                   backgroundRepeat: 'no-repeat',  // para que el SVG no se repita
                   backgroundPosition: 'center',  // para que el SVG se centre
                   }}>
                
                    <AccordionItem key="1" aria-label="Conveniencia" title={<span className='text-xl font-bold'>Conveniencia</span>}>
                        <div className='text-lg'>Ofrecemos un servicio integral que incluye desde la limpieza hasta la gestión de precios, para que no tengas que lidiar con los aspectos operativos del alquiler temporario.</div>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Profesionalismo" title={<span className='text-xl font-bold'>Profesionalismo</span>}>
                        <div className='text-lg'>Contamos con un equipo de profesionales experimentados en la gestión de propiedades, garantizando un servicio de alta calidad.</div>
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Transparencia" title={<span className='text-xl font-bold'>Transparencia</span>}>
                        <div className='text-lg'>Mantenemos una comunicación clara y transparente. Recibirás informes regulares sobre el rendimiento de tu propiedad.</div>
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="Flexibilidad" title={<span className='text-xl font-bold'>Flexibilidad</span>}>
                        <div className='text-lg'>Nos adaptamos a tus necesidades y preferencias, ofreciendo un servicio personalizado.</div>
                    </AccordionItem>
                    <AccordionItem key="5" aria-label="Rentabilidad" title={<span className='text-xl font-bold'>Rentabilidad</span>}>
                        <div className='text-lg'>Maximizamos la ocupación y los ingresos de tu propiedad a través de estrategias de pricing dinámico.</div>
                    </AccordionItem>
                </Accordion>
                */}
                </div>


            </div>

        </section>
    )
}

export default NewContent1;