import { Crown } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <Crown className="h-8 w-8 text-gold icon-glow" />
      <span className="text-2xl font-bold text-gradient-gold font-display tracking-tight">DAMAY UNIVERSE</span>
    </div>
  )
}
