"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  ShoppingCart,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const tshirtProducts = [
  {
    id: 1,
    name: "Kaos Penjelajah Kosmik",
    price: 149.999,
    images: [
      "/placeholder.svg?height=600&width=600&text=Penjelajah+Kosmik+Depan",
      "/placeholder.svg?height=600&width=600&text=Penjelajah+Kosmik+Belakang",
      "/placeholder.svg?height=600&width=600&text=Penjelajah+Kosmik+Samping",
      "/placeholder.svg?height=600&width=600&text=Penjelajah+Kosmik+Detail",
    ],
    colors: ["Hitam", "putih"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 20,
    description:
      "Jelajahi kosmos dengan gaya menggunakan kaos katun premium kami dengan desain bertema luar angkasa yang eksklusif.",
  },
  {
    id: 2,
    name: "Kaos Penjelajah Kosmik",
    price: 149.999,
    images: [
      "/placeholder.svg?height=600&width=600&text=Penjelajah+Kosmik+Depan",
      "/placeholder.svg?height=600&width=600&text=Penjelajah+Kosmik+Belakang",
      "/placeholder.svg?height=600&width=600&text=Penjelajah+Kosmik+Samping",
      "/placeholder.svg?height=600&width=600&text=Penjelajah+Kosmik+Detail",
    ],
    colors: ["Hitam", "putih"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 20,
    description:
      "Jelajahi kosmos dengan gaya menggunakan kaos katun premium kami dengan desain bertema luar angkasa yang eksklusif.",
  },
  {
    id: 3,
    name: "Kaos Penjelajah Kosmik",
    price: 149.999,
    images: [
      "/placeholder.svg?height=600&width=600&text=Penjelajah+Kosmik+Depan",
      "/placeholder.svg?height=600&width=600&text=Penjelajah+Kosmik+Belakang",
      "/placeholder.svg?height=600&width=600&text=Penjelajah+Kosmik+Samping",
      "/placeholder.svg?height=600&width=600&text=Penjelajah+Kosmik+Detail",
    ],
    colors: ["Hitam", "putih"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 5.0,
    reviews: 20,
    description:
      "Jelajahi kosmos dengan gaya menggunakan kaos katun premium kami dengan desain bertema luar angkasa yang eksklusif.",
  },
];

function SwipeableImageGallery({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <div className="relative group">
      <div
        className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square bg-slate-900/30 border border-indigo-500/20"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${productName} - Image ${currentIndex + 1}`}
          fill
          className={`object-cover transition-all duration-300 ${
            isTransitioning ? "scale-105" : "scale-100"
          }`}
        />

        {/* Navigation Arrows - Hidden on mobile, shown on hover for desktop */}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-slate-900/70 hover:bg-slate-800/80 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-indigo-400/30 hidden sm:flex"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-200" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-slate-900/70 hover:bg-slate-800/80 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-indigo-400/30 hidden sm:flex"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-200" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-indigo-300" : "bg-slate-400/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex space-x-2 mt-3 sm:mt-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              index === currentIndex
                ? "border-indigo-400"
                : "border-slate-600/40 hover:border-slate-500/60"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${productName} thumbnail ${index + 1}`}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: (typeof tshirtProducts)[0] }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card
      id={`product-${product.id}`}
      className="bg-slate-900/40 border-indigo-500/20 backdrop-blur-sm overflow-hidden shadow-2xl shadow-indigo-900/20"
    >
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Image Gallery */}
          <div className="p-4 sm:p-6">
            <SwipeableImageGallery
              images={product.images}
              productName={product.name}
            />
          </div>

          {/* Product Details */}
          <div className="p-4 sm:p-6 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2 truncate">
                  {product.name}
                </h2>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-400 fill-current"
                            : "text-slate-500"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-slate-400 text-xs sm:text-sm">
                    ({product.reviews} ulasan)
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-colors flex-shrink-0 ml-2 ${
                  isLiked
                    ? "bg-rose-500 text-white"
                    : "bg-slate-800/50 text-slate-400 hover:text-rose-400 hover:bg-slate-700/50"
                }`}
              >
                <Heart
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    isLiked ? "fill-current" : ""
                  }`}
                />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-bold text-slate-100">
                Rp. {product.price}
              </span>
            </div>

            <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-slate-100 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Warna
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 sm:px-4 py-2 rounded-lg border transition-all text-xs sm:text-sm ${
                      selectedColor === color
                        ? "border-indigo-400 bg-indigo-500/20 text-slate-100 shadow-lg shadow-indigo-500/20"
                        : "border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-slate-100 hover:bg-slate-800/30"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-slate-100 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Ukuran
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 sm:px-4 py-2 rounded-lg border transition-all text-xs sm:text-sm min-w-[2.5rem] ${
                      selectedSize === size
                        ? "border-indigo-400 bg-indigo-500/20 text-slate-100 shadow-lg shadow-indigo-500/20"
                        : "border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-slate-100 hover:bg-slate-800/30"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-slate-100 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Jumlah
              </h3>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700/60 flex items-center justify-center text-slate-200 border border-slate-600/30 hover:border-slate-500/50 transition-all"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-slate-100 font-semibold text-base sm:text-lg w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700/60 flex items-center justify-center text-slate-200 border border-slate-600/30 hover:border-slate-500/50 transition-all"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* WhatsApp Order */}
            <div className="mt-auto space-y-3">
              <Button
                onClick={() => {
                  const productUrl = `${window.location.origin}/merchandise#product-${product.id}`;
                  const message = `Halo! Saya tertarik untuk memesan:

🛍️ *${product.name}*<br />
💰 Harga: Rp.${product.price}
🎨 Warna: ${selectedColor}
📏 Ukuran: ${selectedSize}
📦 Jumlah: ${quantity}
💵 Total: Rp.${(product.price * quantity).toFixed(2)}

Link Produk: ${productUrl}

Bisakah Anda membantu saya dengan pesanan ini? Terima kasih!`;

                  const whatsappUrl = `https://wa.me/628976041515?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 shadow-lg shadow-emerald-600/20 border border-emerald-500/30 text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span className="hidden xs:inline">
                  Pesan via WhatsApp - Rp.{" "}
                  {(product.price * quantity).toFixed(2)}
                </span>
                <span className="xs:hidden">
                  WhatsApp - Rp. {product.price * quantity}
                </span>
              </Button>
              <Button
                variant="outline"
                className="w-full border-slate-600/50 text-slate-200 hover:bg-slate-800/30 bg-transparent hover:border-slate-500/60 text-sm sm:text-base"
              >
                Lihat Panduan Ukuran
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function MerchandisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 sm:mb-6 bg-indigo-500/20 text-indigo-300 border-indigo-400/30 shadow-lg shadow-indigo-500/10 text-xs sm:text-sm">
            ✨ Merchandise Resmi
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-4 sm:mb-6 leading-tight">
            DamaySK
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Merch
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Official merchandise dari DamaySK. Dapatkan kaos eksklusif dengan
            desain yang kece dan kualitas terbaik.
          </p>
        </div>
      </section>

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

      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4 border-t border-indigo-500/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-indigo-600/30">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                Kualitas Premium
              </h3>
              <p className="text-slate-300 text-sm sm:text-base">
                100% katun premium dengan kenyamanan dan daya tahan superior
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-teal-600/30">
                <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                Gratis Ongkir
              </h3>
              <p className="text-slate-300 text-sm sm:text-base">
                Gratis ongkos Untuk daerah Jakarta timur
              </p>
            </div>

            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-rose-600/30">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                Garansi 30 Hari
              </h3>
              <p className="text-slate-300 text-sm sm:text-base">
                Tidak puas? Kembalikan dalam 30 hari untuk pengembalian dana
                penuh
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
