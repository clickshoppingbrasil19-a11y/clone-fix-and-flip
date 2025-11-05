import { Truck } from "lucide-react";
import { useEffect, useState } from "react";

export const ShippingInfo = () => {
  const [deliveryDate, setDeliveryDate] = useState("");

  useEffect(() => {
    const calculateDeliveryDate = () => {
      const today = new Date();
      const minDate = new Date(today);
      const maxDate = new Date(today);

      minDate.setDate(today.getDate() + 3);
      maxDate.setDate(today.getDate() + 8);

      const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short" };
      const locale = "pt-BR";

      const minStr = minDate.toLocaleDateString(locale, options);
      const maxStr = maxDate.toLocaleDateString(locale, options);

      const minMonth = minDate.toLocaleDateString(locale, { month: "short" });
      const maxMonth = maxDate.toLocaleDateString(locale, { month: "short" });

      let dateText;
      if (minMonth === maxMonth) {
        const minDay = minStr.split(" ")[0];
        const maxDay = maxStr.split(" ")[0];
        dateText = `${minDay}–${maxDay} de ${minMonth}`;
      } else {
        dateText = `${minStr} – ${maxStr}`;
      }

      setDeliveryDate(dateText);
    };

    calculateDeliveryDate();
  }, []);

  return (
    <div className="px-4 py-5 mt-4 text-gray-800 text-base flex items-start gap-3 bg-white rounded-xl border border-gray-100 mx-4">
      <Truck className="w-7 h-7 text-blue-600 flex-shrink-0 mt-0.5" />
      <div className="space-y-1.5">
        <p className="text-gray-700 font-medium">Receba até {deliveryDate}</p>
        <p className="text-gray-600 text-sm">
          Taxa de envio: <span className="text-success font-bold">Grátis</span>
        </p>
      </div>
    </div>
  );
};
