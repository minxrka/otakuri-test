'use client';

import { extendVariants } from '@nextui-org/system-rsc';
import { Button } from '@nextui-org/button';

export const RippleButton = extendVariants(Button, {
  variants: {
    variant: {
      header:
        'text-lg font-light text-titanium-200 hover:bg-primary-400/80 hover:text-titanium-200 will-change-transform !outline-none',
      mode: 'text-lg font-light text-titanium-200 bg-primary-400/20 hover:bg-primary-500/40 hover:text-titanium-200 will-change-transform !outline-none',
      sortButton:
        'text-titanium-200 bg-primary-400/70 shadow-[rgb(0_0_0_/_10%_)_0_0_8px] will-change-transform !outline-none',
      default:
        'text-titanium-200 !transition-[background-color,_box-shadow,_color,_background,_transform,_fill,_stroke,_opacity,_text-decoration-color] bg-primary-400/70 hover:bg-primary-hover active:bg-primary-500 active:duration-100 active:-translate-y-0.5 shadow-[rgb(0_0_0_/_10%_)_0_0_8px] hover:shadow-[rgb(248,_60,_146)_0_5px_15px] active:shadow-[rgb(231,_23,_108)_0_5px_15px] will-change-transform !outline-none',
    },
    color: {
      poka: 'text-lg font-light text-titanium-200 hover:bg-primary-400/30 hover:text-titanium-200 will-change-transform',
      orange: 'bg-[#ff8c00] text-[#fff]',
      violet: 'bg-[#8b5cf6] text-[#fff]',
    },
    isDisabled: {
      true: 'text-titanium-200 bg-primary-700/70 hover:bg-primary-hover outline-none cursor-not-allowed opacity-40',
    },
    size: {
      '3xs': 'h-6 min-w-5 px-2 rounded-full',
      '2xs': 'h-8 min-w-8 px-3 rounded-full',
      xs: 'h-8 px-7 rounded-full',
      md: 'h-10 min-w-10 px-12 rounded-[25px]',
      xl: 'px-8 min-w-28 h-14 text-large gap-4 rounded-medium',
      icon: 'h-10 min-w-[42px] px-0 rounded-[25px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'xs',
  },
});
