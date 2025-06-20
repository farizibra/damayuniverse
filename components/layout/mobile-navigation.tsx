"use client"

import { Button } from "@/components/ui/button"

interface MobileNavigationProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#members", label: "Members" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Contact" },
  ]

  if (!isOpen) return null

  return (
    <div className="md:hidden py-6 border-t border-gold/20 bg-dark-navy">
      <nav className="flex flex-col space-y-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-base font-medium text-silver hover:text-gold transition-all duration-300 hover:translate-x-2"
            onClick={onClose}
          >
            {link.label}
          </a>
        ))}
        <div className="pt-4 border-t border-gold/20">
          <Button
            className="w-full bg-gradient-gold text-dark-navy font-bold hover:shadow-gold transition-all duration-300 hover:scale-105"
            onClick={onClose}
          >
            Join Family
          </Button>
        </div>
      </nav>
    </div>
  )
}
