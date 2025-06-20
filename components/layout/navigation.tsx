"use client"

interface NavigationProps {
  className?: string
  onLinkClick?: () => void
}

export function Navigation({ className = "", onLinkClick }: NavigationProps) {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#members", label: "Members" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className={className}>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-silver hover:text-gold transition-all duration-300 hover:scale-105"
          onClick={onLinkClick}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
