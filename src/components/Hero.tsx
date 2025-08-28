import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";
const Hero = () => {
  return <div className="relative bg-gradient-to-r from-conecta-green-50 to-conecta-orange-50 overflow-hidden">
      <div className="conecta-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-conecta-orange-100 text-conecta-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold"> Banco de Alimentos Digital</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Compra alimentos y 
              <span className="text-conecta-orange-500"> ayuda a quien más lo necesita</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">Una plataforma que conecta  correctamente la abundancia de alimento,  haciendo que el que mas tenga no le sobre, y el que menos tenga no le falte. 

          </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Button className="btn-conecta-primary px-6 py-3 text-base flex items-center space-x-2 sm:w-auto w-full">
                <ShoppingBag className="h-5 w-5 mr-2" />
                <span>Comprar </span>
              </Button>
              <Button className="btn-conecta-outline px-6 py-3 text-base flex items-center space-x-2 sm:w-auto w-full">
                <Heart className="h-5 w-5 mr-2" />
                <span>Donar</span>
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <p className="text-conecta-green-500 font-bold text-2xl">8,500+</p>
                <p className="text-gray-500 text-sm">Comidas donadas</p>
              </div>
              <div className="text-center">
                <p className="text-conecta-green-500 font-bold text-2xl">120+</p>
                <p className="text-gray-500 text-sm">Colaboradores</p>
              </div>
              <div className="text-center">
                <p className="text-conecta-green-500 font-bold text-2xl">40+</p>
                <p className="text-gray-500 text-sm">Ciudades</p>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block animate-scale-in">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" alt="Alimentos frescos" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-conecta-green-100 p-3 rounded-full">
                  <span className="text-2xl">🍎</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800"> Frescos</p>
                  <p className="text-xs text-gray-500">Directos del productor</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-conecta-orange-100 p-3 rounded-full">
                  <span className="text-2xl">🎁</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Donaciones Seguras</p>
                  <p className="text-xs text-gray-500">Trazabilidad garantizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </div>;
};
export default Hero;