import React from "react";

const Section = () => {
    return (
        <section className="w-full flex flex-col items-center bg-blue-300 text-white py-10">
            <h2 className="text-3xl font-bold mb-5">Contáctanos</h2>
            
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl">
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-xl font-semibold mb-3">Dirección</h3>
                    <p>Calle Ejemplo 123</p>
                    <p>Rosario, Santa Fe</p>
                    <p>Argentina, CP 2000</p>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-xl font-semibold mb-3">Datos de contacto</h3>
                    <p><span className="font-semibold">Teléfono:</span> +54 341 588 3040</p>
                    <p><span className="font-semibold">Email:</span> contacto@habilitacionesrosario.com</p>
                    <p><span className="font-semibold">Horarios:</span> Lunes a Viernes de 9:00 a 18:00</p>
                </div>
            </div>
        </section>
    );
}

export default Section;
