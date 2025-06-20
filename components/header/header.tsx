"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Crown } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold/20 bg-dark-navy backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Crown className="h-8 w-8 text-gold icon-glow" />
            <span className="text-2xl font-bold text-gradient-gold font-display tracking-tight">
              DAMAY UNIVERSE
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-sm font-medium text-silver hover:text-gold transition-all duration-300 hover:scale-105"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-silver hover:text-gold transition-all duration-300 hover:scale-105"
            >
              About
            </a>
            <a
              href="#members"
              className="text-sm font-medium text-silver hover:text-gold transition-all duration-300 hover:scale-105"
            >
              Members
            </a>
            <a
              href="#events"
              className="text-sm font-medium text-silver hover:text-gold transition-all duration-300 hover:scale-105"
            >
              Events
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-silver hover:text-gold transition-all duration-300 hover:scale-105"
            >
              Contact
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button className="hidden md:inline-flex bg-gradient-gold hover:shadow-gold text-dark-navy font-bold transition-all duration-300 hover:scale-105 animate-shimmer">
              Join Family
            </Button>

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
                href="#home"
                className="text-base font-medium text-silver hover:text-gold transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base font-medium text-silver hover:text-gold transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#members"
                className="text-base font-medium text-silver hover:text-gold transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Members
              </a>
              <a
                href="#events"
                className="text-base font-medium text-silver hover:text-gold transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </a>
              <a
                href="#contact"
                className="text-base font-medium text-silver hover:text-gold transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-gold/20">
                <Button
                  className="w-full bg-gradient-gold text-dark-navy font-bold hover:shadow-gold transition-all duration-300 hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Family
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
