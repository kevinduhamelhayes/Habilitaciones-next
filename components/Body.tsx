import React from "react";
import {Accordion, AccordionItem, Card, CardBody, Image} from "@nextui-org/react";
import FAQs from './constants/FaqConstants'
const Body = () => {

  return (
    <section className="w-full flex flex-col items-center">
      <h3 className="text-3xl mt-14">
        Preguntas Frecuentes
      </h3>
      <Accordion variant="shadow" className="border-white  bg-white max-w-[1100px] mt-12 text-black">
        {FAQs.map((faq) => (
        <AccordionItem key={faq.id} aria-label={faq.title} title={faq.title} className=" text-black">
          {faq.content}
        </AccordionItem>))}
      </Accordion>
    </section>
  );
}


export default Body