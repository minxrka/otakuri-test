'use client';

import { extendVariants } from '@nextui-org/system-rsc';
import { Button } from '@nextui-org/button';

export const RippleButton = extendVariants(Button, {
  variants: {
    variant: {
      header:
        'text-lg font-light text-titanium-200 hover:bg-primary-500/80 hover:text-titanium-200 will-change-transform outline-none',
      sort: 'text-lg font-light text-titanium-200 bg-primary-500/20 hover:bg-primary-500/40 hover:text-titanium-200 will-change-transform outline-none',
      default:
        'text-titanium-200 bg-primary-500/70 hover:bg-primary-hover active:bg-primary-500 active:duration-100 active:-translate-y-0.5 shadow-[rgb(0_0_0_/_10%_)_0_0_8px] hover:shadow-[rgb(101_51_255)_0_5px_15px] active:shadow-[rgb(116_89_255)_0_5px_15px] will-change-transform outline-none',
    },
    color: {
      poka: 'text-lg font-light text-titanium-200 hover:bg-primary-500/30 hover:text-titanium-200 will-change-transform',
      orange: 'bg-[#ff8c00] text-[#fff]',
      violet: 'bg-[#8b5cf6] text-[#fff]',
    },
    isDisabled: {
      true: 'bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed',
    },
    size: {
      xxs: 'h-8 min-w-0 px-3 rounded-full',
      xs: 'h-8 px-7 rounded-full',
      md: 'px-4 min-w-20 h-10 text-small gap-2 rounded-small',
      xl: 'px-8 min-w-28 h-14 text-large gap-4 rounded-medium',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'xs',
  },
});
