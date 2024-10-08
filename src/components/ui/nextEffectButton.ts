// MyButton.tsx
"use client";

import { extendVariants } from "@nextui-org/system-rsc";
import { Button } from "@nextui-org/button";

export const NextEffectButton = extendVariants(Button, {
  variants: {
    variant: {
      snovvy:
        "text-lg font-light text-titanium-200 hover:bg-primary-500/30 hover:text-titanium-200 will-change-transform",
    },
    color: {
      poka: "text-lg font-light text-titanium-200 hover:bg-primary-500/30 hover:text-titanium-200 will-change-transform",
      orange: "bg-[#ff8c00] text-[#fff]",
      violet: "bg-[#8b5cf6] text-[#fff]",
    },
    isDisabled: {
      true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-7 h-9 rounded-full",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-small",
      xl: "px-8 min-w-28 h-14 text-large gap-4 rounded-medium",
    },
  },
  defaultVariants: {
    // <- modify/add default variants
    variant: "snovvy",
    size: "xs",
  },
});
