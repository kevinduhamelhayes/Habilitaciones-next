import { Card, CardBody } from '@nextui-org/react'
import React from 'react'

import ModalQuestion from './ModalQuestion'

const Body3 = () => {
  const questions = [
    { 
      question: "¿En qué zona trabajan y brindan servicios?", 
      answer: "Trabajamos en Rosario y alrededores pero nuestra red técnica abarca Bs As y Córdoba también." 
    },
   
    { 
      question: "como les pido un presupuesto?", 
      answer: "Te esperamos por whatsApp hay un boton verde arriba de todo si presionas ahi te redirige a nuestro whatsApp." 
    },
    { 
      question: "ofrecen servicios de electricidad?", 
      answer: "Si, tenemos tecnicos matriculados que pueden ayudarte en todo lo que necesites." 
    },
    { 
      question: "Hacen factura A?", 
      answer: "Si, hacemos factura A y B." 
    },
    { 
      question: "Gas y plomeria hacen?", 
      answer: "Normalmente controlamos obras de terceros pero podemos ver tu inquietud y ayudarte." 
    },
    { 
      question: "los presupuestos son en pesos?", 
      answer: "por la situacion del pais ya no todos son en pesos hacemos presupuestos en pesos si es simple el trabajo y el plazo de ejecucion es corto, sino se hace en dolares." 
    },
    { 
      question: "En caso de necesitarlo ustedes se encargan de los materiales?", 
      answer: "es algo opcional plenamente a tu eleccion, podemos asesorarte en la compra de materiales y ayudarte a conseguirlos." 
    },
    
  ]
  return (
    <div
      className="flex flex-col max-w-[85%] rounded-2xl p-10 shadow-xl border-white border-3 bg-slate-950 mt-4 text-white scrollbar-hide "
    >
      <div className='flex flex-col w-full items-center justify-center'>
        <h3 className="text-3xl font-bold">Preguntas Frecuentes</h3>
        <div className='flex flex-wrap gap-4 mt-10 items-center  '>
        {questions.map((q, index) => (
          <ModalQuestion key={index} question={q.question} answer={q.answer} />
        ))}
        </div>
      </div>
    </div>


  )
}

export default Body3