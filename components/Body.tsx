import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import FAQs from './constants/FaqConstants'

const Body = () => {
    return (
        <section className="w-full flex flex-col items-center  text-white py-8">
            <h3 className="text-3xl mt-14 font-bold">
                Preguntas Frecuentes
            </h3>
            <Accordion
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
       className="w-[70%] bg-slate-300 text-black h-[50%] text-xl font-bold">
                {FAQs.map((faq) => (
                    <AccordionItem key={faq.id} aria-label={faq.title} title={faq.title} className=" items-center font-semibold  ">
                        {faq.content}
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}

export default Body;
