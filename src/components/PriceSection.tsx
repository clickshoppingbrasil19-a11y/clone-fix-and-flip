import { Zap, Tag } from "lucide-react";
import { useState, useEffect } from "react";

export const PriceSection = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `00:${mins}:${secs}`;
  };

  return (
    <div className="bg-white border border-gray-200 shadow">
      {/* Orange gradient header */}
      <div className="bg-gradient-to-r from-tiktok-gradient-start to-tiktok-gradient-end pt-2 pb-1 text-white px-4 pb-4">
        <div className="flex justify-between items-start">
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">R$ 109,90</p>
              <Tag className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-2 mt-1">
              <p className="line-through text-sm text-orange-200">R$ 589,43</p>
              <span className="px-2 py-1 rounded-full bg-[#fe5d38] text-xs font-semibold">
                Economize 81%
              </span>
            </div>
          </div>
          <div className="text-xs font-semibold uppercase text-right flex items-center gap-1">
            <Zap className="w-5 h-5 fill-current" />
            Oferta Relâmpago
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <p className="bg-white text-orange-600 font-bold px-2 py-0.5 rounded text-[11px] uppercase">
            Termina em {formatTime(timeLeft)}
          </p>
        </div>
      </div>

      {/* Discount badges */}
      <div className="flex gap-2 px-4 mt-4">
        <span className="bg-pink-light text-pink-accent text-xs font-bold px-3 py-1 rounded">
          Economize R$479,53
        </span>
        <span className="bg-pink-light text-pink-accent text-xs font-bold px-3 py-1 rounded">
          Economize 81% COM CUPOM
        </span>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <p className="text-gray-800 font-medium leading-snug text-lg">
          <span className="inline-block bg-gradient-to-r from-[#f9c2d0] to-[#c2f9f1] px-2 py-1 rounded-lg font-bold text-[11px] text-black mr-2">
            🔥 OFERTA PRÉ BLACK FRIDAY
          </span>
          Conjunto de Panelas LIFE SMILE 29 Peças Granito Antiaderente
        </p>
      </div>

      {/* Rating */}
      <div className="px-4 mt-2 flex items-center gap-1 text-gray-600 text-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-yellow-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z" />
        </svg>
        <span className="font-semibold">4.7</span>
        <span>(204)</span>
        <span className="mx-1">•</span>
        <span>4473 vendidos</span>
      </div>
    </div>
  );
};
