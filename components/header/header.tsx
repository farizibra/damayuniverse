"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Crown } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-amber-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              DAMAY UNIVERSE
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-sm font-medium hover:text-amber-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-amber-500 transition-colors"
            >
              About
            </a>
            <a
              href="#members"
              className="text-sm font-medium hover:text-amber-500 transition-colors"
            >
              Members
            </a>
            <a
              href="#events"
              className="text-sm font-medium hover:text-amber-500 transition-colors"
            >
              Events
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-amber-500 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button className="hidden md:inline-flex bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600">
              Join Family
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
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
          <div className="md:hidden py-4 border-t border-border/40">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-sm font-medium hover:text-amber-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm font-medium hover:text-amber-500 transition-colors"
              >
                About
              </a>
              <a
                href="#members"
                className="text-sm font-medium hover:text-amber-500 transition-colors"
              >
                Members
              </a>
              <a
                href="#events"
                className="text-sm font-medium hover:text-amber-500 transition-colors"
              >
                Events
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-amber-500 transition-colors"
              >
                Contact
              </a>
              <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600">
                Join Family
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
