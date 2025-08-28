
import React from "react";
import { 
  ShoppingBasket, Droplet, Baby, 
  ShoppingBag, Package, PercentCircle, Heart, Home 
} from "lucide-react";

const categories = [
  { 
    name: "Alimentos básicos", 
    icon: <ShoppingBasket className="h-6 w-6 text-conecta-green-500" />,
    href: "#food" 
  },
  { 
    name: "Bebés y niños", 
    icon: <Baby className="h-6 w-6 text-conecta-green-500" />,
    href: "#babies" 
  },
  { 
    name: "Higiene y cuidado", 
    icon: <Droplet className="h-6 w-6 text-conecta-green-500" />,
    href: "#hygiene" 
  },
  { 
    name: "Limpieza Hogar", 
    icon: <Home className="h-6 w-6 text-conecta-green-500" />,
    href: "#drinks" 
  },
  { 
    name: "Combos de emergencia", 
    icon: <Package className="h-6 w-6 text-conecta-green-500" />,
    href: "#emergency" 
  },
  { 
    name: "Productos con descuento", 
    icon: <PercentCircle className="h-6 w-6 text-conecta-orange-500" />,
    href: "#discounts" 
  },
  { 
    name: "Campañas sociales", 
    icon: <Heart className="h-6 w-6 text-conecta-orange-500" />,
    href: "#campaigns" 
  },
];

const CategoryLinks = () => {
  return (
    <div className="conecta-container py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category) => (
          <a
            key={category.name}
            href={category.href}
            className="flex flex-col items-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group"
          >
            <div className="mb-3 p-3 bg-gray-50 rounded-full group-hover:bg-conecta-green-50 transition-colors">
              {category.icon}
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-conecta-green-600 transition-colors">
              {category.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryLinks;
