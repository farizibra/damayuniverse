interface FooterLinksProps {
  title: string
  links: Array<{ href: string; label: string }>
}

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gradient-gold font-display">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-silver-dark hover:text-silver transition-colors hover:translate-x-1 transform inline-block"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
