import type React from "react";
import ProductCard from "@/components/merchandise/ProductCard";
import MerchandiseHeader from "@/components/merchandise/MerchandiseHeader";
import MerchandiseFeatures from "@/components/merchandise/MerchandiseFeatures";

const tshirtProducts = [
  {
    id: 3,
    name: "Stussy Hoodie",
    price: 2500000,
    images: [
      "/images/t-shirt/stussy/jblack.webp",
      "/images/t-shirt/stussy/jnavy.webp",
      "/images/t-shirt/stussy/jwhite.webp",
    ],
    colors: ["Hitam", "Navy", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 15,
    description:
      "Stussy Hoodie adalah jaket katun premium dengan desain yang elegan dan modern, memberikan sentuhan klasik pada gaya sehari-hari.",
  },
  {
    id: 4,
    name: "Stussy T-Shirt",
    price: 750000,
    images: [
      "/images/t-shirt/stussy/black.webp",
      "/images/t-shirt/stussy/white.webp",
      "/images/t-shirt/stussy/navy.webp",
    ],
    colors: ["Hitam", "Navy", "White"],
    sizes: ["M", "L", "XL"],
    rating: 5.0,
    reviews: 10,
    description:
      "Stussy T-shirt adalah kaos katun premium dengan desain yang elegan dan modern, memberikan sentuhan klasik pada gaya sehari-hari.",
  },
  {
    id: 1,
    name: "T-Shirt 404 Not Found",
    price: 150000,
    images: ["/images/t-shirt/1.png", "/images/t-shirt/2.png"],
    colors: ["Hitam"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 20,
    description:
      "404 Not Found adalah kaos katun premium dengan desain yang terinspirasi dari tema teknologi dan internet, memberikan sentuhan modern pada gaya sehari-hari.",
  },
  {
    id: 2,
    name: "Gravewood T-Shirt",
    price: 245000,
    images: [
      "/images/t-shirt/Gravewood.webp",
      "/images/t-shirt/GravewoodFront.webp",
      "/images/t-shirt/Sacred-Shadow.webp",
      "/images/t-shirt/SacredShadow.webp",
    ],
    colors: ["Brown", "Hitam"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 20,
    description:
      "Gravewood T-shirt adalah kaos katun premium dengan desain yang terinspirasi dari tema horor, memberikan sentuhan misterius pada gaya sehari-hari.",
  },
];

export default function MerchandisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      <MerchandiseHeader />
      {/* Products Section */}
      <section className="pb-16 sm:pb-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-12 sm:space-y-16">
            {tshirtProducts.map((product, index) => (
              <div
                key={product.id}
                className={index % 2 === 1 ? "lg:flex-row-reverse" : ""}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <MerchandiseFeatures />
    </div>
  );
}
