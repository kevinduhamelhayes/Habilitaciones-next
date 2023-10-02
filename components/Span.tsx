import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import FAQs from './constants/FaqConstants'

const Span = () => {
  return (
      <section id="faq" className="w-full flex flex-col items-center text-white py-8">
          <h3 className="text-4xl mt-0 mb-16 mt-16 font-bold">
              Preguntas Frecuentes
          </h3>
          <Accordion className="w-[95%] max-w-[1300px] md:w-[80%] text-white bg-white " variant="bordered">
              {FAQs.map((faq) => (
                  <AccordionItem key={faq.id} aria-label={faq.title} 
                                 title={<span className="font-bold">{faq.title}</span>}  
                                 className="text-black font-light">
                      <div className="font-normal">{faq.content}</div>
                  </AccordionItem>
              ))}
          </Accordion>
      </section>
  );
}


export default Span;