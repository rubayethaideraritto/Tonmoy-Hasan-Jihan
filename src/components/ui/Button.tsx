import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
                    {
                        // Variants
                        "bg-gradient-to-br from-accent to-accent-hover text-background hover:brightness-110 shadow-2xl shadow-accent/20 hover:shadow-accent/40 active:scale-95":
                            variant === "primary",
                        "glass-card text-foreground hover:bg-white/10 border border-white/10 hover:border-accent/40 active:scale-95":
                            variant === "secondary",
                        "text-foreground hover:bg-white/5 active:scale-95": variant === "ghost",
                        // Sizes
                        "px-5 py-3 text-sm font-bold tracking-wide uppercase": size === "sm",
                        "px-8 py-4 text-base font-bold tracking-wide uppercase": size === "md",
                        "px-10 py-5 text-lg font-black tracking-widest uppercase": size === "lg",
                    },
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
