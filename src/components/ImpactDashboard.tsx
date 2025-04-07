
import React from "react";
import {
  Award,
  Users,
  ShoppingBag,
  Package,
  Home,
  Truck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

// Mock data for the impact chart
const impactData = [
  {
    name: 'Ene',
    donaciones: 4000,
    comidas: 2400,
    familias: 90,
  },
  {
    name: 'Feb',
    donaciones: 3000,
    comidas: 1398,
    familias: 70,
  },
  {
    name: 'Mar',
    donaciones: 5000,
    comidas: 3200,
    familias: 120,
  },
  {
    name: 'Abr',
    donaciones: 7800,
    comidas: 5000,
    familias: 150,
  },
  {
    name: 'May',
    donaciones: 5500,
    comidas: 3500,
    familias: 100,
  },
  {
    name: 'Jun',
    donaciones: 9000,
    comidas: 6000,
    familias: 200,
  },
];

const ImpactDashboard = () => {
  return (
    <section id="impact" className="py-16 bg-white">
      <div className="conecta-container">
        <div className="text-center mb-12">
          <span className="text-conecta-green-500 font-semibold">Nuestro Impacto</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            El cambio que estamos generando juntos
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Gracias a la participación de nuestra comunidad, hemos logrado un impacto
            significativo en la vida de muchas personas. Estos son algunos resultados:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="card-conecta">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-conecta-green-100 rounded-full">
                  <Package className="h-6 w-6 text-conecta-green-500" />
                </div>
                <div>
                  <CardTitle className="text-xl">42,300</CardTitle>
                  <CardDescription>Comidas distribuidas</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-2 bg-gray-100 rounded-full mt-2">
                <div className="h-2 bg-conecta-green-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                85% de nuestro objetivo anual
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-conecta">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-conecta-orange-100 rounded-full">
                  <Users className="h-6 w-6 text-conecta-orange-500" />
                </div>
                <div>
                  <CardTitle className="text-xl">3,850</CardTitle>
                  <CardDescription>Familias beneficiadas</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-2 bg-gray-100 rounded-full mt-2">
                <div className="h-2 bg-conecta-orange-500 rounded-full" style={{ width: '77%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                77% de nuestro objetivo anual
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-conecta">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-conecta-green-100 rounded-full">
                  <ShoppingBag className="h-6 w-6 text-conecta-green-500" />
                </div>
                <div>
                  <CardTitle className="text-xl">15,200</CardTitle>
                  <CardDescription>Kg de alimentos rescatados</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-2 bg-gray-100 rounded-full mt-2">
                <div className="h-2 bg-conecta-green-500 rounded-full" style={{ width: '63%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                63% de nuestro objetivo anual
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Impacto Mensual</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={impactData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="donaciones" name="Donaciones ($)" fill="#8BC34A" />
                <Bar dataKey="comidas" name="Comidas distribuidas" fill="#FF9800" />
                <Bar dataKey="familias" name="Familias alcanzadas" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-conecta-green-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Dónde operamos</h3>
            <p className="text-gray-600">
              Actualmente tenemos presencia en 40 ciudades con diferentes aliados y voluntarios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg flex items-center space-x-4">
              <div className="p-3 bg-conecta-green-100 rounded-full">
                <Home className="h-6 w-6 text-conecta-green-600" />
              </div>
              <div>
                <h4 className="font-semibold">40+ Ciudades</h4>
                <p className="text-sm text-gray-500">Con centros de distribución</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg flex items-center space-x-4">
              <div className="p-3 bg-conecta-orange-100 rounded-full">
                <Truck className="h-6 w-6 text-conecta-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold">120+ Colaboradores</h4>
                <p className="text-sm text-gray-500">Entre voluntarios y personal</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg flex items-center space-x-4">
              <div className="p-3 bg-conecta-green-100 rounded-full">
                <Award className="h-6 w-6 text-conecta-green-600" />
              </div>
              <div>
                <h4 className="font-semibold">90+ Alianzas</h4>
                <p className="text-sm text-gray-500">Con ONGs y empresas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;
