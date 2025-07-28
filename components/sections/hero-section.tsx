import { Button } from "@/components/ui/button";
import { Crown, Mail } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-pure-black flex items-center justify-center relative overflow-hidden">
      {/* Background pattern - subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Crown icon with glow */}
        <div className="flex justify-center">
          <Crown className="h-20 w-20 sm:h-24 sm:w-24 animate-pulse" />
        </div>

        <div className="mb-2">
          <Image
            src="/images/dmyuniverse.png" // Ganti dengan path logo Anda
            alt="DAMAY UNIVERSE"
            width={600} // Sesuaikan dengan ukuran logo Anda
            height={300} // Sesuaikan dengan rasio logo Anda
            className="mx-auto h-auto w-auto max-w-full max-h-[200px] sm:max-h-[250px] lg:max-h-[300px] xl:max-h-[350px] drop-shadow-2xl"
            priority
          />
        </div>

        {/* CTA Button */}
        <Button
          asChild
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/25 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 animate-shimmer inline-flex items-center gap-2"
          size="lg"
        >
          <a
            href="https://www.instagram.com/damaysk_?igsh=eDc0MnRrdWxweDZr" // Ganti username dengan username Instagram kamu
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="h-5 w-5" />
            Contact Us
          </a>
        </Button>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-gradient-to-b from-gold to-transparent opacity-50"></div>
      </div>
    </section>
  );
}
