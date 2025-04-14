'use client'

import { convertTo12Hour } from '@/app/components/common/time-picker'
import { useState } from 'react'

import { Screen } from '@/components/layout/screen'
import { BottomFixedButton } from '@/components/pattern/bottom-fixed-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { BedtimeBottomSheetSelector } from './components/bedtime-bottom-sheet-selector'
import { WakeUpBottomSheetSelector } from './components/wake-up-bottom-sheet-selector'

const Page = () => {
  const [isBedtimeBottomSheetOpen, setIsBedtimeBottomSheetOpen] = useState(false)
  const [isWakeUpBottomSheetOpen, setIsWakeUpBottomSheetOpen] = useState(false)
  const [bedTime, setBedTime] = useState<{ hour: number; minute: number }>()
  const [wakeUpTime, setWakeUpTime] = useState<{ hour: number; minute: number }>()

  return (
    <Screen nav={{ hasBackButton: true }}>
      <div className="flex flex-col gap-2 pt-4 pb-10">
        <h2 className="text-2xl font-bold">Tell us your bedtime.</h2>
        <p className="text-gray-600">
          Stick to your sleep and wake-up times to earn money twice as fast!
        </p>

        {/* <button
          onClick={() => setIsOpen(true)}
          className="bg-primary mt-4 rounded-lg px-4 py-3 text-white"
        >
          {selectedTime
            ? `${String(selectedTime.hour).padStart(2, '0')}:${String(selectedTime.minute).padStart(2, '0')}`
            : '시간 선택하기'}
        </button> */}
      </div>

      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <Label htmlFor="bedtime">Bedtime</Label>
          <Input
            readOnly
            value={formatTime(bedTime)}
            onFocus={() => setIsBedtimeBottomSheetOpen(true)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="wakeup">Wake-up time</Label>
          <Input
            readOnly
            value={formatTime(wakeUpTime)}
            onFocus={() => setIsWakeUpBottomSheetOpen(true)}
          />
        </div>
      </div>

      <BedtimeBottomSheetSelector
        isOpen={isBedtimeBottomSheetOpen}
        onClose={() => setIsBedtimeBottomSheetOpen(false)}
        onOk={(value) => {
          setBedTime(value)
          setIsBedtimeBottomSheetOpen(false)
        }}
      />

      <WakeUpBottomSheetSelector
        isOpen={isWakeUpBottomSheetOpen}
        onClose={() => setIsWakeUpBottomSheetOpen(false)}
        onOk={(value) => {
          setWakeUpTime(value)
          setIsWakeUpBottomSheetOpen(false)
        }}
      />
      <BottomFixedButton>Complete</BottomFixedButton>
    </Screen>
  )
}

const formatTime = (time?: { hour: number; minute: number }) => {
  if (!time) return ''
  const { hour: displayHour, period } = convertTo12Hour(time.hour)
  return `${String(displayHour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')} ${period}`
}

export default Page
