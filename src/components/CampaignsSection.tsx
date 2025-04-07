
import React from "react";
import CampaignCard from "./CampaignCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Sample campaign data
const campaigns = [
  {
    id: 1,
    title: "Alimentación para familias afectadas por la sequía",
    description: "Esta campaña busca proporcionar alimentos y agua a 500 familias en regiones afectadas por la sequía prolongada.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
    raised: 8500,
    goal: 12000,
    daysLeft: 14,
    supporters: 142,
  },
  {
    id: 2,
    title: "Desayunos escolares: niños con futuro",
    description: "Aseguramos que 200 niños en escuelas de bajos recursos reciban un desayuno nutritivo diario durante todo el año escolar.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
    raised: 15000,
    goal: 20000,
    daysLeft: 30,
    supporters: 310,
  },
  {
    id: 3,
    title: "Apoyo alimentario para adultos mayores",
    description: "Proporcionamos apoyo alimentario a 100 adultos mayores que viven solos y necesitan asistencia nutricional.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
    raised: 6200,
    goal: 10000,
    daysLeft: 21,
    supporters: 98,
  },
];

const CampaignsSection = () => {
  return (
    <section id="campaigns" className="py-16 bg-gray-50">
      <div className="conecta-container">
        <div className="text-center mb-12">
          <span className="text-conecta-orange-500 font-semibold text-lg">Causas Activas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Campañas que necesitan tu apoyo
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Estas son las campañas solidarias actualmente activas. Tu contribución, ya sea con alimentos
            o donaciones, puede marcar una gran diferencia en estas iniciativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="btn-conecta-primary px-6 py-3">
            Ver todas las campañas
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;
