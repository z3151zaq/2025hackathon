import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

const elementButtonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-white border border-gray-300 text-black hover:bg-gray-100",
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        warning: "bg-yellow-400 text-white hover:bg-yellow-500",
        danger: "bg-red-500 text-white hover:bg-red-600",
        info: "bg-cyan-500 text-white hover:bg-cyan-600",
        text: "bg-transparent text-blue-500 hover:bg-blue-50",
      },
      plain: {
        true: "bg-white border border-current text-inherit hover:bg-gray-50",
        false: "",
      },
      size: {
        sm: "text-sm px-3 h-8",
        md: "text-base px-4 h-10",
        lg: "text-lg px-5 h-12",
      },
      round: {
        true: "rounded-full",
        false: "rounded-md",
      },
      circle: {
        true: "rounded-full p-0 w-10 h-10",
        false: "",
      },
    },
    compoundVariants: [
      {
        plain: true,
        variant: "primary",
        class: "text-blue-500 border-blue-500 bg-blue-50 hover:bg-blue-100",
      },
      {
        plain: true,
        variant: "danger",
        class: "text-red-500 border-red-500 bg-red-50 hover:bg-red-100",
      },
      {
        plain: true,
        variant: "success",
        class: "text-green-500 border-green-500 bg-green-50 hover:bg-green-100",
      },
      // 可添加更多类型
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      plain: false,
      round: false,
      circle: false,
    },
  }
);

export interface ElementButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof elementButtonVariants> {}

const ElementButton = forwardRef<HTMLButtonElement, ElementButtonProps>(
  ({ className, variant, plain, size, round, circle, ...props }, ref) => {
    return (
      <button
        className={cn(
          elementButtonVariants({ variant, plain, size, round, circle }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);


ElementButton.displayName = "ElementButton";

export { ElementButton, elementButtonVariants };
