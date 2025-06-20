import { Instagram, Twitter, Youtube, Mail } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="text-silver-dark hover:text-gold transition-colors hover:scale-110 transform"
          aria-label={social.label}
        >
          <social.icon className="h-5 w-5 hover:icon-glow-soft" />
        </a>
      ))}
    </div>
  )
}
