'use client'

import { TimePicker, TimePickerValue } from '@/app/components/common/time-picker'
import { useState } from 'react'

import { BottomSheet } from '@/components/ui/bottom-sheet'

type BedtimeBottomSheetSelectorProps = {
  isOpen: boolean
  onClose: () => void
  onOk: (value: TimePickerValue) => void
}

export const BedtimeBottomSheetSelector = ({
  isOpen,
  onClose,
  onOk,
}: BedtimeBottomSheetSelectorProps) => {
  const [value, setValue] = useState<TimePickerValue>()

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">Bedtime</h3>
        <TimePicker value={value} onChange={setValue} />

        <button
          onClick={() => {
            if (value) {
              onOk(value)
            }
          }}
          className="bg-primary mt-4 rounded-lg px-4 py-3 text-white"
        >
          Done
        </button>
      </div>
    </BottomSheet>
  )
}
