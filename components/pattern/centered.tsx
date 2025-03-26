import { cn } from '@/lib/utils'

export const Centered = ({
  children,
  className,
  ...props
}: { children: React.ReactNode } & React.ComponentProps<'div'>) => {
  return (
    <div className={cn('flex w-full items-center justify-center', className)} {...props}>
      {children}
    </div>
  )
}
