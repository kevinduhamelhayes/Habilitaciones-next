import React from "react";

const Section = () => {
    return (
        <section className="w-full flex flex-col items-center bg-gray-100 text-black py-20 md:py-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Contáctanos</h2>
            
            <div className="flex flex-col md:flex-row gap-8 max-w-4xl text-center items-center justify-center">
                <div className="hidden flex flex-col items-center md:items-start">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-5"></h3>
                    
                    <p className="text-lg md:text-xl">Rosario, Santa Fe</p>
                    <p className="text-lg md:text-xl">Argentina, CP 2000</p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-5">Datos de contacto</h3>
                    <p className="text-lg md:text-xl"><span className="font-semibold ">Teléfono:</span> +54 341 588 3040</p>
                    <span className="flex items-center space-x-4"><span className="font-bold text-lg md:text-xl ">Email:  </span> 
              <a
              className="hover:text-blue-400 transition-colors duration-200 font-semibold text-lg"
              href="mailto:info@habilitacionesrosario.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@habilitacionesrosario.com
            </a>
            </span>
                    <p className="text-lg md:text-xl"><span className="font-semibold">Horarios:</span> Lunes a Viernes de 9:00 a 18:00</p>
                </div>
            </div>
        </section>
    );
}

export default Section;

