import { cn } from '@/lib/utils'

import { ScreenNav, ScreenNavProps } from './screen-nav'

type ScreenProps = {
  children: React.ReactNode
  nav?: ScreenNavProps
  noSidePadding?: boolean
  noHeaderPadding?: boolean
} & React.ComponentProps<'div'>

export const Screen = ({
  children,
  className,
  nav,
  noSidePadding = false,
  noHeaderPadding = false,
  ...props
}: ScreenProps) => {
  return (
    <div
      className={cn(
        'flex h-full flex-1 flex-col',
        noSidePadding ? '' : 'px-5',
        noHeaderPadding ? '' : 'pt-14',
        className,
      )}
      {...props}
    >
      {nav && <ScreenNav {...nav} />}
      {children}
    </div>
  )
}
