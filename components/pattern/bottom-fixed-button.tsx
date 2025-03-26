'use client'

import { cn } from '@/lib/utils'
import React, { useEffect } from 'react'

import { MAX_MOBILE_SCREEN_WIDTH } from '@/components/mobile-screen'
import { Button } from '@/components/ui/button'

type BottomFixedButtonsProps = {} & React.ComponentProps<typeof Button>

const HEIGHT = 80

/**
 * 화면 하단에 고정된 버튼 영역 컴포넌트
 */
export const BottomFixedButton = ({ children, className, ...props }: BottomFixedButtonsProps) => {
  // 버튼 영역 높이에 맞게 body에 패딩 추가
  useEffect(() => {
    // body에 패딩 추가
    document.body.style.paddingBottom = `${HEIGHT}px`

    // 컴포넌트 언마운트 시 패딩 제거
    return () => {
      document.body.style.paddingBottom = ''
    }
  }, [])

  return (
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
  )
}
