import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="conecta-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-conecta-green-400 text-2xl">🍽️</span>
              <span className="font-bold text-xl text-white">
                Comida<span className="text-conecta-orange-400">Conecta</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">Somos una  plataforma que conecta alimentos y lo lleva a quienes mas lo   necesitan. Combatimos el hambre, la pobresa y reducimos el desperdicio de alimentos.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-conecta-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-conecta-green-400 transition-colors">
                
              </a>
              <a href="#" className="text-gray-400 hover:text-conecta-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-conecta-green-400 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#marketplace" className="text-gray-400 hover:text-conecta-green-400 transition-colors">Mercado</a>
              </li>
              <li>
                <a href="#donate" className="text-gray-400 hover:text-conecta-green-400 transition-colors">Donar</a>
              </li>
              <li>
                <a href="#campaigns" className="text-gray-400 hover:text-conecta-green-400 transition-colors">Campañas</a>
              </li>
              <li>
                <a href="#impact" className="text-gray-400 hover:text-conecta-green-400 transition-colors">Impacto</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-conecta-orange-400 mr-3 mt-0.5" />
                <span className="text-gray-400">Av. 34 Ciudad Dorada</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-conecta-orange-400 mr-3" />
                <span className="text-gray-400">+50761677739</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-conecta-orange-400 mr-3" />
                <span className="text-gray-400">info@conecta.org</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Suscríbete</h3>
            <p className="text-gray-400 mb-4">
              Recibe actualizaciones sobre nuevas campañas e iniciativas.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Tu email" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-conecta-orange-500 hover:bg-conecta-orange-600 text-white">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ComidaConecta. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-conecta-green-400 text-sm transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-500 hover:text-conecta-green-400 text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-conecta-green-400 text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
