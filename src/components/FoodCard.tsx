
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, Heart, ArrowRight, 
  PlusCircle, Calendar 
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface FoodCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  expiryDate?: string;
  discountPercentage?: number;
}

const FoodCard: React.FC<FoodCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  expiryDate,
  discountPercentage
}) => {
  return (
    <Card className="card-conecta overflow-hidden flex flex-col h-full">
      <div className="relative pb-[60%] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 left-3 bg-white/90 hover:bg-white text-gray-500 hover:text-conecta-orange-500 rounded-full"
        >
          <Heart className="h-5 w-5" />
        </Button>
        
        {discountPercentage && (
          <div className="discount-badge">
            -{discountPercentage}%
          </div>
        )}
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <div className="mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {category}
          </span>
        </div>
        <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">
          {name}
        </h3>
        
        <div className="flex items-end mt-2">
          <span className="text-lg font-bold text-gray-800">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm font-medium text-gray-400 line-through ml-2">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {expiryDate && (
          <div className="mt-3 flex items-center text-xs text-gray-500">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            <span>Consumir antes: {expiryDate}</span>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-0 pb-4 flex space-x-2">
        <Button 
          className="flex-1 btn-conecta-primary px-2 text-sm py-2 h-9"
        >
          <ShoppingCart className="h-4 w-4 mr-1" />
          Añadir
        </Button>
        <Button 
          className="flex-1 btn-conecta-secondary px-2 text-sm py-2 h-9"
        >
          <PlusCircle className="h-4 w-4 mr-1" />
          Donar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
