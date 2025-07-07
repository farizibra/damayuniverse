"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Crown } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold/20 bg-dark-navy backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/damay-logo.png" // Ganti dengan path logo Anda
              alt="DAMAY UNIVERSE"
              width={140} // Lebar logo (sesuaikan dengan kebutuhan)
              height={80} // Tinggi logo (rasio 2:1)
              className="h-auto w-auto max-h-10 sm:max-h-12" // Responsive sizing
              priority // Untuk loading yang lebih cepat
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/football"
              className="text-sm font-medium text-silver hover:text-gold transition-all duration-300 hover:scale-105"
            >
              Football
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-silver hover:text-gold transition-all duration-300 hover:scale-105"
            >
              About
            </a>
            <a
              href="/merchandise"
              className="text-sm font-medium text-silver hover:text-gold transition-all duration-300 hover:scale-105"
            >
              Merchandise
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* <Button className="hidden md:inline-flex bg-gradient-gold hover:shadow-gold text-dark-navy font-bold transition-all duration-300 hover:scale-105 animate-shimmer">
              Join Family
            </Button> */}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-silver hover:text-gold hover:bg-transparent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gold/20 bg-dark-navy">
            <nav className="flex flex-col space-y-6">
              <a
                href="/"
                className="text-base font-medium text-silver hover:text-gold transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/football"
                className="text-base font-medium text-silver hover:text-gold transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Football
              </a>
              <a
                href="#about"
                className="text-base font-medium text-silver hover:text-gold transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/merchandise"
                className="text-base font-medium text-silver hover:text-gold transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Merchandise
              </a>
              <div className="pt-4 border-t border-gold/20">
                {/* <Button
                  className="w-full bg-gradient-gold text-dark-navy font-bold hover:shadow-gold transition-all duration-300 hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Family
                </Button> */}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
