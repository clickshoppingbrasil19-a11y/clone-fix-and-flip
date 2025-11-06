import { Home, MessageCircle, ShoppingCart } from "lucide-react";

interface FixedFooterProps {
  onBuyClick: () => void;
}

export const FixedFooter = ({ onBuyClick }: FixedFooterProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md px-4 py-2 flex items-center justify-between z-40">
      {/* Left icons */}
      <div className="flex items-center gap-6">
        <button className="flex flex-col items-center text-xs text-gray-600 hover:text-gray-900">
          <Home className="w-5 h-5 mb-0.5" />
          <span>Loja</span>
        </button>
        <button className="flex flex-col items-center text-xs text-gray-600 hover:text-gray-900">
          <MessageCircle className="w-5 h-5 mb-0.5" />
          <span>Chat</span>
        </button>
      </div>

      {/* Right buttons */}
      <div className="flex items-center gap-2 w-full max-w-[65%]">
        <button
          onClick={onBuyClick}
          className="inline-flex items-center justify-center h-11 px-3 py-2 rounded-lg bg-gray-100 text-gray-900 text-sm font-medium shadow-sm active:scale-[.98] whitespace-nowrap transition-colors duration-200 flex-[1.2] hover:bg-gray-200"
        >
          <span className="text-sm leading-none text-center flex items-center gap-1">
            <ShoppingCart className="w-4 h-4" />
            <span className="flex flex-col items-start">
              <span className="text-[10px] leading-tight">Adicionar</span>
              <span className="text-[10px] leading-tight">ao carrinho</span>
            </span>
          </span>
        </button>

        <button
          onClick={onBuyClick}
          className="inline-flex items-center justify-center h-12 px-4 py-3 rounded-lg bg-tiktok hover:bg-[#e60049] text-white text-sm font-semibold uppercase tracking-wide shadow-md active:scale-[.98] whitespace-nowrap transition-all duration-200 flex-[1.8]"
        >
          <span className="text-sm leading-none text-center">Comprar</span>
        </button>
      </div>
    </div>
  );
};
