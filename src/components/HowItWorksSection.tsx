import React from "react";
import { ShoppingBag, Heart, Truck, User } from "lucide-react";
const steps = [{
  icon: <ShoppingBag className="h-10 w-10 text-white" />,
  title: "Compra o dona",
  description: "Elige entre comprar productos con descuento para ti o donar alimentos y productos a quienes lo necesitan.",
  color: "bg-conecta-green-500"
}, {
  icon: <Heart className="h-10 w-10 text-white" />,
  title: "Apoya campañas",
  description: "Participa en campañas específicas orientadas a apoyar diferentes necesidades y comunidades.",
  color: "bg-conecta-orange-500"
}, {
  icon: <Truck className="h-10 w-10 text-white" />,
  title: "Enviamos Alimentos",
  description: "Nuestros aliados logísticos se encargan de que los alimentos lleguen a quienes  los necesitan.",
  color: "bg-conecta-green-500"
}, {
  icon: <User className="h-10 w-10 text-white" />,
  title: "Genera impacto",
  description: "Visualiza el impacto que tus compras y donaciones generan en la comunidad.",
  color: "bg-conecta-orange-500"
}];
const HowItWorksSection = () => {
  return <section className="py-16 bg-gray-50">
      <div className="conecta-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Conecta es una plataforma fácil de usar  conectamos  alimentos con personas que los necesitan, generando un impacto social positivo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className={`w-20 h-20 ${step.color} rounded-full mx-auto flex items-center justify-center shadow-lg`}>
                  {step.icon}
                </div>
                {index < steps.length - 1 && <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200" style={{
              width: "calc(100% - 5rem)"
            }}></div>}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;
