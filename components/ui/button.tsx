import { type VariantProps, cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import React from 'react'

import { cn } from '@/utils/cn'

const buttonVariants = cva(
  'text-md inline-flex items-center justify-center rounded-md leading-none font-medium whitespace-nowrap transition-colors select-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white shadow',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm',
        ghost: '',
        outlined: 'border bg-white',
      },
      size: {
        default: 'h-12 px-4 py-2',
        sm: 'h-10 rounded-md px-3 text-xs',
        lg: 'h-14 rounded-md px-8',
        icon: 'h-9 w-9',
      },
      danger: {
        true: 'border-danger-foreground bg-danger text-white',
      },
      loading: {
        true: 'pointer-events-none opacity-50',
      },
      block: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, block, loading, danger, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, danger, className, block, loading }))}
        ref={ref}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
