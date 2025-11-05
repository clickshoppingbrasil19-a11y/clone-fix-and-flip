import { useState } from "react";
import { Check } from "lucide-react";

export const ProductDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const items = [
    "7 Panelas com tampa (16cm a 40cm)",
    "4 Frigideiras (24cm a 32cm) – 1 com alça removível",
    "1 Panela rasa dupla 30cm",
    "1 Grill duplo fundo 30cm",
    "7 Utensílios de cozinha (colher, espátula, concha, etc.)",
    "Todas as tampas em vidro temperado 5mm com saída de vapor",
  ];

  const highlights = [
    "Revestimento granito 100% antiaderente – nada gruda!",
    "100% livre de PFOA – cozinha saudável para sua família",
    "Aquece 2x mais rápido – economiza gás e tempo",
    "Fundo triplo 6mm – sem pontos quentes",
    "Compatível com TODOS os fogões + forno + micro-ondas",
    "Garantia LIFE SMILE de 1 ano",
  ];

  return (
    <section className="max-w-md mx-auto space-y-6 mb-20">
      <article className="bg-white p-5 border border-gray-100">
        <h2 className="text-lg font-extrabold text-gray-900 tracking-tight">
          Conjunto de Panelas LIFE SMILE 29 Peças Granito Antiaderente
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          O Conjunto de Panelas LIFE SMILE 29 Peças une a potência do alumínio fundido
          reforçado de 6 mm com a tecnologia de revestimento granito multicamadas, que combina
          durabilidade extrema + antiaderência total para cozinhar sem esforço, com distribuição
          uniforme de calor e resultados perfeitos em qualquer receita.
        </p>

        <div
          className={`mt-3 text-sm text-gray-700 transition-all duration-200 ${
            isExpanded ? "max-h-full" : "max-h-28 overflow-hidden"
          }`}
        >
          <p className="mb-2">
            Com tampas de vidro temperado 5 mm com saída de vapor, alças fixas em alumínio
            fundido, compatibilidade total com todos os fogões (gás, elétrico, vitrocerâmico,
            indução), forno e micro-ondas, ele é perfeito tanto para o dia a dia quanto para
            receitas elaboradas. Tudo isso com limpeza em segundos e segurança 100% livre de
            PFOA, do jeito que a família moderna merece.
          </p>
        </div>

        <div className="mt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-semibold text-rose-600 hover:underline focus:outline-none"
          >
            {isExpanded ? "Ver menos" : "Ver mais"}
          </button>
        </div>

        {/* Items included */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900">Itens Inclusos</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 text-success mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Highlights */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900">
            Por que escolher LIFE SMILE 29 Peças?
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            {highlights.map((highlight, index) => (
              <li key={index}>✅ {highlight}</li>
            ))}
          </ul>
        </div>

        {/* Shipping */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-700">
            🚚 Envio rápido e seguro para todo o Brasil. Aproveite essa oferta e leve a
            experiência TikTok Shop para o seu dia a dia!
          </p>
        </div>
      </article>
    </section>
  );
};
