import React from "react";
import { Sparkles, ShoppingCart, Heart } from "lucide-react";

export default function MerchandiseFeatures() {
  return (
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
              Tidak puas? Kembalikan dalam 30 hari untuk pengembalian dana penuh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
