'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '../ui/button'
import { MAX_MOBILE_SCREEN_WIDTH } from './main-layout'

export const SCREEN_NAV_HEIGHT = 56
export type ScreenNavProps = {
  title?: string
  hasBackButton?: boolean
}
export const ScreenNav = ({ title, hasBackButton = true }: ScreenNavProps) => {
  const router = useRouter()
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-center bg-white">
      <nav
        className="relative flex w-full items-center px-3"
        style={{ height: SCREEN_NAV_HEIGHT, maxWidth: MAX_MOBILE_SCREEN_WIDTH }}
      >
        {hasBackButton && (
          <Button size="icon" variant="ghost" onClick={router.back}>
            <ArrowLeft />
          </Button>
        )}

        {title && <h1 className="absolute left-1/2 -translate-x-1/2 font-bold">{title}</h1>}
      </nav>
    </div>
  )
}
