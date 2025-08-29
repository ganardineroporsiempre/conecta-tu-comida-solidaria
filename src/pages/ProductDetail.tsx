import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, Heart, ArrowLeft, Plus, Minus, 
  Calendar, Package, Shield, Truck 
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  expiryDate?: string;
  discountPercentage?: number;
  description: string;
  ingredients: string;
  nutritionalInfo: string;
  origin: string;
  brand: string;
}

// Mock product data - in a real app, this would come from an API
const mockProducts: Record<string, Product> = {
  "1": {
    id: 1,
    name: "Pasta de Trigo spagueti 500g",
    price: 2.49,
    image: "https://grupopanamarealestate.com/wp-content/uploads/2025/08/Untitled-design-3.png",
    category: "Alimentos básicos",
    description: "Pasta de trigo 100% natural, perfecta para tus comidas favoritas. Elaborada con ingredientes de alta calidad.",
    ingredients: "Sémola de trigo duro, agua",
    nutritionalInfo: "Por 100g: Energía 350kcal, Proteínas 12g, Carbohidratos 70g, Grasas 1.5g",
    origin: "Italia",
    brand: "Pasta Premium"
  },
  "5": {
    id: 5,
    name: "Lentejas por 500 gr",
    price: 1.99,
    originalPrice: 3.49,
    image: "https://grupopanamarealestate.com/wp-content/uploads/2025/08/158062-300-300.png",
    category: "Legimbres",
    expiryDate: "20/04/2025",
    discountPercentage: 40,
    description: "Lentejas rojas de alta calidad, ricas en proteínas y fibra. Perfectas para sopas, guisos y ensaladas.",
    ingredients: "Lentejas rojas 100%",
    nutritionalInfo: "Por 100g: Energía 116kcal, Proteínas 9g, Carbohidratos 20g, Fibra 8g",
    origin: "España",
    brand: "Legumbres del Campo"
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = id ? mockProducts[id] : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h1>
            <Button onClick={() => navigate("/")} className="btn-conecta-primary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`${quantity} ${product.name} añadido al carrito`);
  };

  const handleBuyNow = () => {
    toast.success("Redirigiendo al checkout...");
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const totalPrice = product.price * quantity;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="conecta-container py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <button onClick={() => navigate("/")} className="hover:text-conecta-orange-500">
              Inicio
            </button>
            <span>/</span>
            <span className="text-gray-800">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg bg-white shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.discountPercentage && (
                <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                  -{product.discountPercentage}%
                </Badge>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h1>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-end space-x-3">
                <span className="text-3xl font-bold text-conecta-orange-500">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Expiry Date */}
              {product.expiryDate && (
                <div className="flex items-center text-orange-600 bg-orange-50 p-3 rounded-lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-medium">Consumir antes: {product.expiryDate}</span>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Cantidad
                </label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 border rounded-md text-center min-w-[60px]">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-lg font-semibold text-gray-800">
                  Total: ${totalPrice.toFixed(2)}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <div className="flex space-x-3">
                  <Button 
                    className="flex-1 btn-conecta-primary"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Añadir al carrito
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={isFavorite ? "text-red-500 border-red-500" : ""}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
                  </Button>
                </div>
                <Button 
                  className="w-full btn-conecta-secondary"
                  onClick={handleBuyNow}
                >
                  Comprar ahora
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto text-conecta-orange-500 mb-2" />
                  <span className="text-sm text-gray-600">Envío gratis</span>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto text-conecta-orange-500 mb-2" />
                  <span className="text-sm text-gray-600">Garantía</span>
                </div>
                <div className="text-center">
                  <Package className="h-6 w-6 mx-auto text-conecta-orange-500 mb-2" />
                  <span className="text-sm text-gray-600">Empaque seguro</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Información del producto</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">Marca:</span>
                    <span className="ml-2 text-gray-600">{product.brand}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Origen:</span>
                    <span className="ml-2 text-gray-600">{product.origin}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Ingredientes:</span>
                    <span className="ml-2 text-gray-600">{product.ingredients}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Información nutricional</h3>
                <p className="text-gray-600">{product.nutritionalInfo}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;