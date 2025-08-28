
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Package,
  DollarSign,
  CalendarClock,
  CircleCheck,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const DonationSection = () => {
  const [donationAmount, setDonationAmount] = React.useState(25);

  const handleSliderChange = (value: number[]) => {
    setDonationAmount(value[0]);
  };

  return (
    <section id="donate" className="py-16 bg-white">
      <div className="conecta-container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-conecta-orange-500 font-semibold">Dona y Ayuda</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Elige Cómo Quieres Hacer la Diferencia
          </h2>
          <p className="text-gray-600">
            Cada aporte, por pequeño que sea, tiene un impacto real en nuestra comunidad.
            Puedes donar productos, dinero o suscribirte para ayudar de forma recurrente.
          </p>
        </div>

        <Tabs defaultValue="products" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-10">
            <TabsTrigger value="products" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>Donar Alimentos</span>
            </TabsTrigger>
            <TabsTrigger value="money" className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4" />
              <span>Donar Dinero</span>
            </TabsTrigger>
            <TabsTrigger value="subscription" className="flex items-center space-x-2">
              <CalendarClock className="h-4 w-4" />
              <span>Suscripción Solidaria</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Product Packs */}
              <Card className="card-conecta group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-gray-800">Pack Básico</CardTitle>
                  <CardDescription>
                    Alimentos básicos para una familia durante 1 semana
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img
                      src="https://media.istockphoto.com/id/1427666202/es/foto/un-hombre-con-una-cosecha-de-verduras-en-el-jard%C3%ADn-enfoque-selectivo.jpg?s=612x612&w=0&k=20&c=dM1bxWeaVuNuOrrvyze0Hf6MpjKzd_eecWGHdGsC4uI="
                      alt="Pack básico de alimentos"
                      className="rounded-lg w-full h-36 object-cover"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CircleCheck className="h-4 w-4 text-conecta-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Arroz, pasta y legumbres</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-4 w-4 text-conecta-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Aceite y conservas</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-4 w-4 text-conecta-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Enlatados y productos básicos</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xl font-bold text-conecta-green-600">
                    $25
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full btn-conecta-secondary group-hover:shadow-md transition-shadow">
                    Donar este pack
                  </Button>
                </CardFooter>
              </Card>

              <Card className="card-conecta group border-conecta-orange-200">
                <div className="bg-conecta-orange-500 text-white text-xs font-bold uppercase tracking-wider py-1 text-center">
                  Más Solicitado
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-gray-800">Pack Familia</CardTitle>
                  <CardDescription>
                    Alimentación completa para una familia durante 2 semanas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=300&fit=crop"
                      alt="Pack familia de alimentos"
                      className="rounded-lg w-full h-36 object-cover"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CircleCheck className="h-4 w-4 text-conecta-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Todo del pack básico</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-4 w-4 text-conecta-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Frutas y verduras</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-4 w-4 text-conecta-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Productos de higiene personal</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xl font-bold text-conecta-green-600">
                    $50
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full btn-conecta-secondary group-hover:shadow-md transition-shadow">
                    Donar este pack
                  </Button>
                </CardFooter>
              </Card>

              <Card className="card-conecta group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-gray-800">Pack Completo</CardTitle>
                  <CardDescription>
                    Alimentación y productos esenciales para un mes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=300&fit=crop"
                      alt="Pack completo de alimentos"
                      className="rounded-lg w-full h-36 object-cover"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CircleCheck className="h-4 w-4 text-conecta-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Todo del pack familia</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-4 w-4 text-conecta-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Productos para bebés</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-4 w-4 text-conecta-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Variedad de alimentos frescos</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xl font-bold text-conecta-green-600">
                    $100
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full btn-conecta-secondary group-hover:shadow-md transition-shadow">
                    Donar este pack
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="money">
            <Card className="card-conecta">
              <CardHeader>
                <CardTitle>Donar una cantidad</CardTitle>
                <CardDescription>
                  Elige la cantidad que deseas donar. El 100% de tu aporte llega a quienes más lo necesitan.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Cantidad</span>
                    <span className="text-sm font-medium">${donationAmount}</span>
                  </div>
                  <Slider
                    defaultValue={[25]}
                    max={200}
                    min={5}
                    step={5}
                    onValueChange={handleSliderChange}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>$5</span>
                    <span>$50</span>
                    <span>$100</span>
                    <span>$200</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {[10, 25, 50, 100].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className={`border-2 ${
                        donationAmount === amount ? "border-conecta-orange-500 bg-conecta-orange-50" : ""
                      }`}
                      onClick={() => setDonationAmount(amount)}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">
                    ¿A qué campaña deseas donar?
                  </label>
                  <Select defaultValue="general">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una campaña" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Fondo general</SelectItem>
                      <SelectItem value="children">Alimentación infantil</SelectItem>
                      <SelectItem value="elderly">Adultos mayores</SelectItem>
                      <SelectItem value="emergency">Respuesta a emergencias</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">
                    Mensaje (opcional)
                  </label>
                  <Input placeholder="Escribe un mensaje para los beneficiarios" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full btn-conecta-primary">
                  Donar ${donationAmount}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="subscription">
            <Card className="card-conecta">
              <CardHeader>
                <CardTitle>Suscripción Solidaria</CardTitle>
                <CardDescription>
                  Con una donación recurrente, puedes garantizar apoyo continuo a quienes más lo necesitan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <span className="text-sm text-gray-500">Frecuencia</span>
                    <Select defaultValue="monthly">
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Mensual</SelectItem>
                        <SelectItem value="quarterly">Trimestral</SelectItem>
                        <SelectItem value="annually">Anual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm text-gray-500">Cantidad</span>
                    <Select defaultValue="15">
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">$10</SelectItem>
                        <SelectItem value="15">$15</SelectItem>
                        <SelectItem value="25">$25</SelectItem>
                        <SelectItem value="50">$50</SelectItem>
                        <SelectItem value="100">$100</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">
                    ¿A qué programa deseas contribuir?
                  </label>
                  <Select defaultValue="general">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un programa" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Apoyo general</SelectItem>
                      <SelectItem value="children">Alimentación infantil</SelectItem>
                      <SelectItem value="elderly">Adultos mayores</SelectItem>
                      <SelectItem value="families">Familias vulnerables</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium block">Beneficios de suscripción</label>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CircleCheck className="h-4 w-4 text-conecta-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Reportes mensuales sobre el impacto de tu aporte</span>
                    </div>
                    <div className="flex items-start">
                      <CircleCheck className="h-4 w-4 text-conecta-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Posibilidad de dirigir tu donación a causas específicas</span>
                    </div>
                    <div className="flex items-start">
                      <CircleCheck className="h-4 w-4 text-conecta-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Certificado anual de donaciones para beneficios fiscales</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full btn-conecta-primary">
                  Suscribirme
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DonationSection;
