import { Shield, Check, ChevronRight } from "lucide-react";

export const CustomerProtection = () => {
  const protections = [
    "Devolução gratuita",
    "Pagamento seguro",
    "Reembolso automático por dano",
    "Cupom por atraso na coleta",
  ];

  return (
    <div className="bg-yellow-light p-4 rounded-lg shadow-sm mx-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2 relative flex-shrink-0 rounded-full bg-amber-dark flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-amber-dark font-semibold text-lg">Proteção do cliente</h3>
        </div>
        <ChevronRight className="h-5 w-5 text-amber-dark" />
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {protections.map((protection, index) => (
          <div key={index} className="flex items-start text-gray-800 text-sm">
            <Check className="h-4 w-4 text-success mt-0.5 mr-2 flex-shrink-0" />
            <span>{protection}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
