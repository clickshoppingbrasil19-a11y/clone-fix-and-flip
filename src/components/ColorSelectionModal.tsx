import { X } from "lucide-react";
import { useState } from "react";
import productMain from "@/assets/product-main.jpg";
import productBeige from "@/assets/product-beige.jpg";
import productBlack from "@/assets/product-black.jpg";
import productBlue from "@/assets/product-blue.jpg";
import productBrown from "@/assets/product-brown.jpg";

interface ColorVariant {
  key: string;
  img: string;
  name: string;
}

interface ColorSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ColorSelectionModal = ({ isOpen, onClose }: ColorSelectionModalProps) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const colorVariants: ColorVariant[] = [
    { key: "beige", img: productBeige, name: "Bege" },
    { key: "black", img: productBlack, name: "Preto" },
    { key: "purple", img: productBlue, name: "Roxo" },  
    { key: "brown", img: productBrown, name: "Marrom" },
  ];

  const handleCheckout = () => {
    if (selectedColor) {
      window.location.href = "https://checkout.shoppingdochina.com.br/VCCL1O8SCG8Q";
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-full rounded-t-2xl p-5 relative shadow-xl transform transition-transform duration-300 max-w-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Product image and price */}
        <div className="flex items-center mb-6">
          <img
            src={productMain}
            alt="Produto"
            className="w-20 h-20 object-cover rounded-lg mr-4"
          />
          <div>
            <div className="text-rose-500 font-bold text-xl">
              <strong className="px-2 py-1 bg-tiktok text-white rounded-lg font-normal text-sm mr-1">
                -81%
              </strong>
              R$ 109,90
            </div>
            <div className="text-gray-500 line-through text-sm">R$ 589,43</div>
          </div>
        </div>

        {/* Color label */}
        <h2 className="text-gray-600 font-semibold mb-3">Cor</h2>

        {/* Color options */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {colorVariants.map((variant) => (
            <button
              key={variant.key}
              onClick={() => setSelectedColor(variant.key)}
              className={`p-2 border-2 rounded-lg transition ${
                selectedColor === variant.key
                  ? "border-tiktok bg-pink-light"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={variant.img}
                alt={variant.name}
                className="w-full h-16 object-contain rounded mb-1"
              />
              <p className="text-xs font-medium text-gray-800 text-center">{variant.name}</p>
            </button>
          ))}
        </div>

        {/* Checkout button */}
        <button
          onClick={handleCheckout}
          disabled={!selectedColor}
          className={`w-full font-semibold py-3 rounded-lg transition-all flex flex-col items-center ${
            selectedColor
              ? "bg-tiktok text-white hover:bg-[#e60049] cursor-pointer"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
        >
          <div>Comprar agora</div>
          <div className="text-sm">Frete grátis</div>
        </button>
      </div>
    </div>
  );
};
