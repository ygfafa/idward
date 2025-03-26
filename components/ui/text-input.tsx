import * as React from 'react'

import { cn } from '@/utils/cn'

export type InputProps = {
  prefix?: string | React.ReactNode
  suffix?: string | React.ReactNode
  filled?: boolean
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'prefix'>

export const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, filled, prefix, suffix, ...props }, ref) => {
    return (
      <label
        className={cn(
          'border-input flex h-9 w-full items-center gap-2 overflow-hidden rounded-md border bg-transparent px-3',
          filled && 'bg-muted border-none',
          className,
        )}
      >
        {prefix && <div className="shrink-0">{prefix}</div>}
        <input
          type="text"
          className={cn(
            'placeholder:text-muted-foreground h-full w-full focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            filled && 'bg-muted',
          )}
          ref={ref}
          {...props}
        />
        {suffix && <div className="shrink-0">{suffix}</div>}
      </label>
    )
  },
)
TextInput.displayName = 'TextInput'
