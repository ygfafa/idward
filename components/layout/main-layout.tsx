import { cn } from '@/lib/utils'
import React from 'react'

export const MAX_MOBILE_SCREEN_WIDTH = 440

type MainLayoutProps = {
  width?: number
} & React.ComponentProps<'div'>

export const MainLayout = ({ className, style, children, ...props }: MainLayoutProps) => {
  return (
    <div
      className={cn('mx-auto flex min-h-full w-full flex-1 flex-col items-start', className)}
      style={{
        maxWidth: MAX_MOBILE_SCREEN_WIDTH,
        ...style,
      }}
      {...props}
    >
      <main className="flex w-full flex-1 flex-col">{children}</main>
    </div>
  )
}
