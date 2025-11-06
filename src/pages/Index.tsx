import { useState } from "react";
import { Header } from "@/components/Header";
import { ProductCarousel } from "@/components/ProductCarousel";
import { PriceSection } from "@/components/PriceSection";
import { ShippingInfo } from "@/components/ShippingInfo";
import { CustomerProtection } from "@/components/CustomerProtection";
import { OfferSection } from "@/components/OfferSection";
import { ReviewSection } from "@/components/ReviewSection";
import { ProductDescription } from "@/components/ProductDescription";
import { ColorSelectionModal } from "@/components/ColorSelectionModal";
import { FixedFooter } from "@/components/FixedFooter";
import { StoreInfo } from "@/components/StoreInfo";
import productMain from "@/assets/product-main.jpg";
import productBeige from "@/assets/product-beige.jpg";
import productBlack from "@/assets/product-black.jpg";
import productBlue from "@/assets/product-blue.jpg";
import productBrown from "@/assets/product-brown.jpg";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productImages = [
    productMain,
    productBlack,
    productBlue,
    productBrown,
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <Header />

      {/* Product Carousel */}
      <ProductCarousel images={productImages} />

      {/* Price Section */}
      <PriceSection />

      <hr className="my-6" />

      {/* Shipping Info */}
      <ShippingInfo />

      {/* Customer Protection */}
      <div className="border-t border-gray-200 my-4" />
      <CustomerProtection />

      {/* Offer Section */}
      <div className="border-t border-gray-200 my-4" />
      <OfferSection />

      {/* Reviews */}
      <div className="p-4">
        <ReviewSection />
      </div>

      {/* Store Info */}
      <StoreInfo />

      {/* Product Description */}
      <ProductDescription />

      {/* Color Selection Modal */}
      <ColorSelectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Fixed Footer */}
      <FixedFooter onBuyClick={() => setIsModalOpen(true)} />
    </div>
  );
};

export default Index;
