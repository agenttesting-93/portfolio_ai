import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-parrot-400 text-slate-950 hover:bg-parrot-300 shadow-[0_0_0_1px_rgba(124,252,0,0.24),0_12px_40px_rgba(124,252,0,0.22)]",
        secondary: "bg-foreground/8 text-foreground border border-border hover:bg-foreground/12",
        ghost: "text-muted-foreground hover:bg-foreground/8 hover:text-foreground",
        outline: "border border-parrot-400/30 bg-transparent text-foreground hover:bg-parrot-400/10 hover:border-parrot-400/50",
        glow:
          "bg-gradient-to-r from-parrot-400 via-parrot-500 to-parrot-600 text-slate-950 font-semibold shadow-[0_0_24px_rgba(124,252,0,0.4)] hover:brightness-110 hover:shadow-[0_0_32px_rgba(124,252,0,0.6)]"
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-full px-4",
        lg: "h-12 rounded-full px-6 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };