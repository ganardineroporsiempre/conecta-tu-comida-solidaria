import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  CreditCard, 
  MapPin, 
  User, 
  Mail, 
  Phone,
  Truck,
  Package
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CheckoutProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock data - in a real app, this would come from state management
  const product: CheckoutProduct = location.state?.product || {
    id: 1,
    name: "Pasta de Trigo spagueti 500g",
    price: 2.49,
    quantity: location.state?.quantity || 1,
    image: "https://grupopanamarealestate.com/wp-content/uploads/2025/08/Untitled-design-3.png"
  };

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: ""
  });

  const subtotal = product.price * product.quantity;
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePlaceOrder = async () => {
    // Validate required fields
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.address) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("¡Pedido realizado con éxito!");
      navigate("/order-confirmation", { 
        state: { 
          orderNumber: Math.floor(Math.random() * 1000000),
          product,
          customerInfo,
          total
        }
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-muted/30">
        <div className="conecta-container py-8">
          {/* Header */}
          <div className="flex items-center space-x-2 mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="hover:bg-accent"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
            <Separator orientation="vertical" className="h-4" />
            <h1 className="text-2xl font-bold text-foreground">Checkout</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Customer Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    Información personal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        value={customerInfo.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Tu nombre completo"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="tu@email.com"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input
                      id="phone"
                      value={customerInfo.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+506 8888 8888"
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Dirección de entrega
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Dirección *</Label>
                    <Input
                      id="address"
                      value={customerInfo.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Tu dirección completa"
                      className="mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">Ciudad *</Label>
                      <Input
                        id="city"
                        value={customerInfo.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="Tu ciudad"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Código postal</Label>
                      <Input
                        id="postalCode"
                        value={customerInfo.postalCode}
                        onChange={(e) => handleInputChange("postalCode", e.target.value)}
                        placeholder="00000"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-primary" />
                    Método de pago
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 border rounded-lg bg-accent/50">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Pago contra entrega</span>
                      <Badge variant="secondary">Disponible</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Paga cuando recibas tu pedido en efectivo o con tarjeta
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Resumen del pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Product */}
                  <div className="flex items-center space-x-3">
                    <div className="relative w-16 h-16 bg-muted rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs">
                        {product.quantity}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm line-clamp-2">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        ${product.price.toFixed(2)} × {product.quantity}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <Truck className="h-4 w-4 mr-1" />
                        <span>Envío</span>
                      </div>
                      <span className="text-primary font-medium">Gratis</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Delivery Info */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Package className="h-4 w-4 mr-2" />
                      <span>Entrega estimada: 2-3 días</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="h-4 w-4 mr-2" />
                      <span>Envío gratuito incluido</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full btn-conecta-primary"
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Procesando..." : `Realizar pedido - $${total.toFixed(2)}`}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;