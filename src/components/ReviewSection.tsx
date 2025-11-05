import { Star } from "lucide-react";
import review1 from "@/assets/review1.jpg";
import review2 from "@/assets/review2.jpg";
import review3 from "@/assets/review3.jpg";

interface Review {
  name: string;
  time: string;
  rating: number;
  comment: string;
  avatar: string;
}

export const ReviewSection = () => {
  const reviews: Review[] = [
    {
      name: "Juliana Moraes",
      time: "há 23 minutos",
      rating: 5,
      comment:
        "Excelente conjunto de panelas! A qualidade é impressionante e a cerâmica antiaderente realmente funciona. Minhas refeições não grudam mais e a limpeza ficou muito mais fácil.",
      avatar: review1,
    },
    {
      name: "Carla Albuquerque",
      time: "há 41 minutos",
      rating: 5,
      comment:
        "Comprei e adorei! As panelas são bonitas, práticas e aquecem de forma uniforme. O conjunto completo atende todas as necessidades da cozinha.",
      avatar: review2,
    },
    {
      name: "Marina Santos",
      time: "há 1 hora",
      rating: 5,
      comment:
        "Melhor investimento que fiz para minha cozinha! As panelas são lindas, duráveis e muito fáceis de limpar. O revestimento antiaderente é de excelente qualidade.",
      avatar: review3,
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">Avaliações dos clientes (207)</h2>
      </div>

      <div className="flex items-center mb-4">
        <span className="text-3xl font-bold text-gray-800">4.7</span>
        <span className="text-lg text-gray-600 ml-2">/5</span>
        <div className="ml-4 flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-warning text-warning" />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start gap-3 mb-2">
              <img 
                src={review.avatar} 
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-800">{review.name}</p>
                <p className="text-xs text-success">{review.time}</p>
              </div>
            </div>
            <div className="flex mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-warning text-warning" />
              ))}
            </div>
            <p className="text-sm text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
