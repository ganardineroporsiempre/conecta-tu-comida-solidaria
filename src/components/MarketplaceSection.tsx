
import React from "react";
import FoodCard from "./FoodCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Mock data for food products
const regularProducts = [
  {
    id: 1,
    name: "Pasta de Trigo 500g",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=350&fit=crop",
    category: "Alimentos básicos",
  },
  {
    id: 2,
    name: "Arroz Basmati Premium 1kg",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=350&fit=crop",
    category: "Alimentos básicos",
  },
  {
    id: 3,
    name: "Aceite de Girasol 750ml",
    price: 8.50,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=350&fit=crop",
    category: "Alimentos básicos",
  },
  {
    id: 4,
    name: "Atún en Conserva Natural Pack 3x80g",
    price: 4.75,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=350&fit=crop",
    category: "Alimentos básicos",
  },
];

const discountedProducts = [
  {
    id: 5,
    name: "Yogurt Natural Pack 4x125g",
    price: 1.99,
    originalPrice: 3.49,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=350&fit=crop",
    category: "Lácteos",
    expiryDate: "20/04/2025",
    discountPercentage: 40,
  },
  {
    id: 6,
    name: "Pan de Molde Integral 500g",
    price: 1.29,
    originalPrice: 2.15,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=350&fit=crop",
    category: "Panadería",
    expiryDate: "15/04/2025",
    discountPercentage: 35,
  },
  {
    id: 7,
    name: "Ensalada Mediterránea Lista para Comer",
    price: 2.49,
    originalPrice: 4.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=350&fit=crop",
    category: "Frescos",
    expiryDate: "12/04/2025",
    discountPercentage: 50,
  },
  {
    id: 8,
    name: "Zumo de Naranja Natural 1L",
    price: 1.75,
    originalPrice: 2.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=350&fit=crop",
    category: "Bebidas",
    expiryDate: "14/04/2025",
    discountPercentage: 30,
  },
];

const MarketplaceSection = () => {
  return (
    <section id="marketplace" className="py-16 bg-gray-50">
      <div className="conecta-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestro Mercado Solidario
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Compra alimentos de calidad y apoya nuestra causa. Por cada compra, ayudas a reducir el desperdicio
            alimentario y contribuyes a que más personas tengan acceso a comida.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-10">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="all">Todos los Productos</TabsTrigger>
            <TabsTrigger value="regular">Regulares</TabsTrigger>
            <TabsTrigger value="discounted">Con Descuento</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...regularProducts, ...discountedProducts].slice(0, 8).map((product) => (
                <FoodCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="regular" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {regularProducts.map((product) => (
                <FoodCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="discounted" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {discountedProducts.map((product) => (
                <FoodCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-8">
          <Button className="btn-conecta-outline px-6 py-2">
            Ver todos los productos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
