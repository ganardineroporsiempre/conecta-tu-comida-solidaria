
import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, Users, Calendar, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface CampaignCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  daysLeft: number;
  supporters: number;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  id,
  title,
  description,
  image,
  raised,
  goal,
  daysLeft,
  supporters,
}) => {
  const progressPercentage = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <div className="card-conecta flex flex-col h-full group">
      <div className="relative pb-[56.25%] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 right-3 bg-white/90 hover:bg-white text-conecta-orange-500 hover:text-conecta-orange-600 rounded-full"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="p-5 flex-grow">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-semibold">${raised.toLocaleString()}</span>
            <span className="text-gray-500">de ${goal.toLocaleString()}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        
        <div className="flex justify-between text-sm text-gray-500 mb-5">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-conecta-orange-500" />
            <span>{daysLeft} días</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 text-conecta-orange-500" />
            <span>{supporters} apoyos</span>
          </div>
        </div>
        
        <Button className="w-full btn-conecta-outline group-hover:bg-conecta-green-50 flex items-center justify-center">
          Apoyar Campaña
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CampaignCard;
