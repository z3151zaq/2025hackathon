"use client";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes, forwardRef } from "react";

// 定义样式变体
const elementLinkVariants = cva(
  "inline-flex items-center transition-colors cursor-pointer focus:outline-none",
  {
    variants: {
      variant: {
        default: "text-blue-600 hover:underline",
        primary: "text-blue-600 hover:text-blue-800",
        success: "text-green-600 hover:text-green-800",
        warning: "text-yellow-600 hover:text-yellow-800",
        danger: "text-red-600 hover:text-red-800",
        info: "text-cyan-600 hover:text-cyan-800",
      },
      underline: {
        true: "underline",
        false: "no-underline",
      },
      disabled: {
        true: "pointer-events-none opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      underline: false,
      disabled: false,
    },
  }
);

export interface ElementLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof elementLinkVariants> {
      href: string;
    }

const ElementLink = forwardRef<HTMLAnchorElement, ElementLinkProps>(
  ({ className, variant, underline, disabled, href, ...props }, ref) => {
    return (
      <Link
        href={href}
        className={cn(
          elementLinkVariants({ variant, underline, disabled }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

ElementLink.displayName = "ElementLink";

export { ElementLink, elementLinkVariants };
