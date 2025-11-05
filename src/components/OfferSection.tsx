import { Check } from "lucide-react";

export const OfferSection = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-gray-900">Ofertas</h3>
      </div>

      <div className="bg-gradient-to-r from-pink-light to-rose-50 rounded-lg p-4 border border-rose-100 flex justify-between items-center">
        <div>
          <span className="text-2xl font-bold text-rose-600">Frete Grátis</span>
          <p className="text-xs text-gray-600 mt-1">
            Entrega gratuita para todo o Brasil em compras acima de R$ 50,00
          </p>
        </div>
        <div className="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md text-sm flex items-center gap-2 ml-4">
          <Check className="h-4 w-4 text-success" />
          Aplicado
        </div>
      </div>
    </div>
  );
};
