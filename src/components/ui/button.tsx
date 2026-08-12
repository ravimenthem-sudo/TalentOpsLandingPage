import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm shadow-brand-500/20",
      secondary: "bg-brand-50 text-brand-700 hover:bg-brand-100",
      outline: "border border-white/10 bg-transparent hover:bg-transparent/5 text-white",
      ghost: "hover:bg-white/10 text-slate-400 hover:text-white",
    }
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    }
    
    return (
      <button
        suppressHydrationWarning
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
