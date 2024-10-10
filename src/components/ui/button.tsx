import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/src/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors-transform select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'text-titanium-200 bg-primary-500/75 hover:bg-primary-hover active:bg-primary-500 duration-500 active:duration-100 active:-translate-y-0.5 border border-transparent hover:border-[#6533ff] active:border-primary-500 shadow-[rgb(0_0_0_/_10%_)_0_0_8px] hover:shadow-[rgb(101_51_255)_0_5px_15px] active:shadow-[rgb(116_89_255)_0_5px_15px] will-change-transform',
        destructive:
          'text-titanium-200 bg-primary-500/75 hover:bg-primary-hover hover:scale-[1.02] duration-200 active:scale-[0.98] active:opacity-[0.95] active:outline-none will-change-transform',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'text-lg font-light text-titanium-200  hover:bg-primary-500/30',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-12 rounded-[25px]',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-12 rounded-full px-[13px]',
        ghostsize: 'px-6 h-9 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
