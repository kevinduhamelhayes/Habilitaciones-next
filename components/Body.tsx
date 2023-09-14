import React from "react";
import { Accordion, AccordionItem, Card, CardBody, Image } from "@nextui-org/react";
import FAQs from './constants/FaqConstants'

const Body = () => {
    return (
        <section className="w-full flex flex-col items-center bg-blue-800 text-white py-8">
            <h3 className="text-3xl mt-14 font-bold">
                Preguntas Frecuentes
            </h3>
            <Accordion variant="shadow" className="border-gray-600 bg-blue-300 max-w-[1100px] mt-12 text-gray-800 rounded-lg">
                {FAQs.map((faq) => (
                    <AccordionItem key={faq.id} aria-label={faq.title} title={faq.title} className="text-gray-800 ">
                        {faq.content}
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}

export default Body;
