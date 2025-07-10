import React from "react";
import { Badge } from "@/components/ui/badge";

export default function MerchandiseHeader() {
  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
      <div className="container mx-auto text-center">
        <Badge className="mb-4 sm:mb-6 bg-indigo-500/20 text-indigo-300 border-indigo-400/30 shadow-lg shadow-indigo-500/10 text-xs sm:text-sm">
          ✨ TOP 1 JAKARTA
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
  );
}
