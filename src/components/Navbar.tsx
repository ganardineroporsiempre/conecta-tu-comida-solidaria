import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Search, User, Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navLinks = [{
    name: "Inicio",
    href: "#"
  }, {
    name: "Mercado",
    href: "#marketplace"
  }, {
    name: "Donar",
    href: "#donate"
  }, {
    name: "Campañas",
    href: "#campaigns"
  }, {
    name: "Impacto",
    href: "#impact"
  }];
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="conecta-container py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {isMobile && <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6 text-gray-700" />
              </Button>}
            <a href="#" className="flex items-center space-x-2">
              <span className="text-conecta-green-500 text-2xl">
            </span>
              <span className="font-bold text-xl text-gray-800">
                Comida<span className="text-conecta-orange-500">Conecta</span>
              </span>
            </a>
          </div>

          {!isMobile && <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-600 hover:text-conecta-green-500 font-medium transition-colors">
                  {link.name}
                </a>)}
            </div>}

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-gray-600">
              <Search className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-600">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Mi Perfil</DropdownMenuItem>
                <DropdownMenuItem>Mis Donaciones</DropdownMenuItem>
                <DropdownMenuItem>Mis Compras</DropdownMenuItem>
                <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="text-gray-600">
              <Heart className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="text-gray-600 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-conecta-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </Button>

            {!isMobile && <Button className="btn-conecta-primary px-4 py-2 ml-4">
                Acceder
              </Button>}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && <div className="mt-3 pb-3 border-t pt-3 space-y-3 md:hidden animate-fade-in">
            {navLinks.map(link => <a key={link.name} href={link.href} className="block px-3 py-2 text-gray-600 hover:text-conecta-green-500 hover:bg-gray-50 rounded-md font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>)}
            <Button className="btn-conecta-primary w-full py-2 mt-3">
              Acceder
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navbar;