import { X, Share2, ShoppingCart, MoreHorizontal } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between p-4">
        <button className="p-2" aria-label="Fechar">
          <X className="w-6 h-6 text-gray-800" />
        </button>
        
        <div className="flex items-center gap-4">
          <button className="p-2" aria-label="Compartilhar">
            <Share2 className="w-6 h-6 text-gray-800" />
          </button>
          <button className="p-2" aria-label="Carrinho">
            <ShoppingCart className="w-6 h-6 text-gray-800" />
          </button>
          <button className="p-2" aria-label="Mais opções">
            <MoreHorizontal className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </header>
  );
};
