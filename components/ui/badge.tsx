import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/cn'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors select-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground border-transparent shadow',
        secondary: 'bg-secondary text-secondary-foreground border-transparent',
        danger: 'bg-danger text-danger-foreground border-transparent shadow',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type BadgeProps = VariantProps<typeof badgeVariants> & React.ComponentProps<'div'>

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}
