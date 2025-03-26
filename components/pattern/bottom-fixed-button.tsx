'use client'

import { cn } from '@/lib/utils'
import React from 'react'

import { MAX_MOBILE_SCREEN_WIDTH } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'

type BottomFixedButtonsProps = {} & React.ComponentProps<typeof Button>

const HEIGHT = 80

/**
 * 화면 하단에 고정된 버튼 영역 컴포넌트
 */
export const BottomFixedButton = ({ children, className, ...props }: BottomFixedButtonsProps) => {
  return (
    <section>
      <div style={{ height: HEIGHT }}></div>
      <div
        className={cn('fixed right-0 bottom-0 left-0 z-50 flex w-full items-center justify-center')}
      >
        <div
          className="flex w-full items-center px-5"
          style={{ maxWidth: MAX_MOBILE_SCREEN_WIDTH, height: HEIGHT }}
        >
          <Button className={cn('w-full', className)} {...props}>
            {children}
          </Button>
        </div>
      </div>
    </section>
  )
}
