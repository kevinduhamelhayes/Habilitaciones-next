import React from 'react';
import Image from 'next/image';
import { Accordion, AccordionItem, Button } from "@nextui-org/react";

const NewContent2 = () => {
    return (
        <section className='flex flex-col w-[1300px] min-h-[75%] bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600'>
            <div className='flex flex-row w-full'>
                <div className='w-[60%] p-6 pb-0'>
                    <ul>
                        <li className='mb-6'>
                            <h3 className='text-2xl font-semibold'>Te ayudamos a salir de los largos tramites de la municipalidad</h3>
                            <p className='text-lg'>Nos encargamos de todo para que no tengas que preocuparte por nada.</p>
                        </li>
                        <li className='mb-6'>
                            <h3 className='text-2xl font-semibold'>Te estan haciendo larga la habilitacion de tu industria o comercio?</h3>
                            <p className='text-lg'>Tranquilo estamos acostumbrados, y estas en el lugar correcto.</p>
                        </li>
                        <li className='mb-6'>
                            <h3 className='text-2xl font-semibold'>Servicios Flexibles:</h3>
                            <p className='text-lg'>Podes contar con nuestra asesoria mas basica o pedirnos que nos encarguemos de todo vos decidis SIEMPRE, contamos con tecnicos propios y mayoristas a tu dispocicion.</p>
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

                <figure className='w-[40%] h-full '>
                    <Image src="/habilitaciones/WhatsApp Image 2023-09-22 at 6.17.49 PM.jpeg" alt='depto1' width={500} height={500} className='rounded-lg rounded-l-none ' />
                </figure>
            </div>

        </section>
    )
}

export default NewContent2;