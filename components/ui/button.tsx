import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

const buttonVariants = {
  default: "bg-violet text-white hover:bg-violet-soft",
  outline: "border border-line bg-white text-navy hover:bg-soft",
};

const buttonSizes = {
  default: "h-10 px-4 text-[14px]",
  sm: "h-9 px-3 text-[13px]",
  lg: "h-11 px-6 text-[15px]",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button };
