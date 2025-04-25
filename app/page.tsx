'use client'

import { LucideChevronRight } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useState } from 'react'

import { Screen } from '@/components/layout/screen'
import { BottomFixedButton } from '@/components/pattern/bottom-fixed-button'

const Page = () => {
  redirect('/landing')
  return
  const [isWokeUp, setIsWokeUp] = useState(false)

  return (
    <Screen background={isWokeUp ? '#44A2F7' : '#1B0B46'} noHeaderPadding>
      <Image
        src={isWokeUp ? '/images/sun.png' : '/images/moon.png'}
        width={0}
        height={0}
        sizes="100vw"
        alt="hero"
        className="w-full"
      />

      <div className="mb-4 flex flex-col text-white">
        <span>10:00~</span>
        <span className="text-4xl font-bold">1h 25min 😴</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="row-span-2 flex items-center justify-between gap-1 rounded-lg bg-white px-3 py-4 shadow">
          <div className="flex flex-col">
            <span className="font-semibold text-gray-400">My coupon</span>
            <span className="text-xl font-bold">☕️ 21%</span>
          </div>

          <LucideChevronRight />
        </div>
        <div className="row-span-2 flex items-center justify-between rounded-lg bg-white px-3 py-4 shadow">
          <span className="text-xl font-bold">Reviews</span>
          <LucideChevronRight />
        </div>
        <div className="col-span-2 rounded-lg bg-white px-3 py-4 shadow">
          <div className="flex flex-col">
            <span className="font-semibold text-gray-400">My bedtime</span>
            <span className="truncate text-xl font-bold">10:00 PM ~ 기도시간 20분 전</span>
          </div>
        </div>
      </div>

      {isWokeUp ? (
        <BottomFixedButton className="bg-[#F5C13D] font-bold" onClick={() => setIsWokeUp(false)}>
          Start sleeping
        </BottomFixedButton>
      ) : (
        <BottomFixedButton className="bg-blue-600 font-bold" onClick={() => setIsWokeUp(true)}>
          ☀️ I woke up.
        </BottomFixedButton>
      )}
    </Screen>
  )
}

export default Page
