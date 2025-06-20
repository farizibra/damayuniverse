import { Button } from "@/components/ui/button"

interface JoinButtonProps {
  className?: string
  size?: "default" | "sm" | "lg"
}

export function JoinButton({ className = "", size = "default" }: JoinButtonProps) {
  return (
    <Button
      size={size}
      className={`bg-gradient-gold hover:shadow-gold text-dark-navy font-bold transition-all duration-300 hover:scale-105 animate-shimmer ${className}`}
    >
      Join Family
    </Button>
  )
}
