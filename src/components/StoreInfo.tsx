import { CheckCircle, UserPlus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const StoreInfo = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    toast.success(isFollowing ? "Deixou de seguir a loja" : "Agora você está seguindo a loja!");
  };

  return (
    <div className="bg-white border-t-4 border-tiktok px-4 py-4">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
          LS
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-900 text-base">LIFE SMILE BRASIL</h3>
            <CheckCircle className="w-5 h-5 text-blue-500 fill-blue-500" />
            <span className="text-xs text-blue-600 border border-blue-600 rounded px-2 py-0.5">
              Loja Verificada
            </span>
          </div>
          <p className="text-xs text-gray-600">
            • 1706 produtos • 100% recomenda
          </p>
        </div>
      </div>

      {/* Trust bar */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-600">Confiança:</span>
          <span className="text-xs font-bold text-gray-900">100%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "100%" }}></div>
        </div>
      </div>

      {/* Follow button */}
      <button
        onClick={handleFollow}
        className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
          isFollowing
            ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
            : "bg-tiktok text-white hover:bg-[#e60049]"
        }`}
      >
        <UserPlus className="w-4 h-4" />
        {isFollowing ? "Seguindo" : "Seguir"}
      </button>
    </div>
  );
};
