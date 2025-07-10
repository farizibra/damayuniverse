"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Minus, Plus } from "lucide-react";
import SwipeableImageGallery from "./SwipeableImageGallery";
import { formatRupiah } from "@/components/lib/utils";

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
  description: string;
}

export default function ProductCard({ product }: { product: Product }) {
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
                Rp. {formatRupiah(product.price)}
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
                  const message = `Halo bang! Saya tertarik untuk memesan:\n\n *${
                    product.name
                  }*\n Harga: Rp.${formatRupiah(
                    product.price
                  )}\n Warna: ${selectedColor}\n📏 Ukuran: ${selectedSize}\n Jumlah: ${quantity}\n Total: Rp.${formatRupiah(
                    product.price * quantity
                  )}\n\nLink Produk: ${productUrl}\n\nBisakah Anda membantu saya dengan pesanan ini? Terima kasih!`;
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
                  {formatRupiah(product.price * quantity)}
                </span>
                <span className="xs:hidden">
                  WhatsApp - Rp. {formatRupiah(product.price * quantity)}
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
