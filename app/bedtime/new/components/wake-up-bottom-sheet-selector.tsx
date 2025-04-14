'use client'

import { TimePicker, TimePickerValue } from '@/app/components/common/time-picker'
import dayjs from 'dayjs'
import { Check } from 'lucide-react'
import { useState } from 'react'

import { BottomSheet } from '@/components/ui/bottom-sheet'
import { Button } from '@/components/ui/button'

type WakeUpType = 'prayer' | 'custom'

type WakeUpBottomSheetSelectorProps = {
  isOpen: boolean
  onClose: () => void
  onOk: (value: TimePickerValue) => void
}

export const WakeUpBottomSheetSelector = ({
  isOpen,
  onClose,
  onOk,
}: WakeUpBottomSheetSelectorProps) => {
  const [step, setStep] = useState<'type' | 'time'>('type')
  const [selectedWakeUpType, setSelectedWakeUpType] = useState<WakeUpType>('prayer')
  const [selectedWakeUpTime, setSelectedWakeUpTime] = useState<TimePickerValue>({
    hour: 0,
    minute: 0,
  })
  const [selectedWakeUpMinutes, setSelectedWakeUpMinutes] = useState(1)
  const minutes = Array.from({ length: 6 }, (_, i) => (i + 1) * 10) // 10, 20, 30, 40, 50, 60

  const handleComplete = () => {
    if (selectedWakeUpType === 'custom') {
      onOk(selectedWakeUpTime)
    } else {
      // 타겟 시간을 오전 5시 20분으로 설정
      const targetTime = dayjs().set('hour', 5).set('minute', 20)
      // 타겟 시간에서 선택된 분을 뺀 시간을 계산
      const alarmTime = targetTime.subtract(selectedWakeUpMinutes, 'minute')
      onOk({
        hour: alarmTime.hour(),
        minute: alarmTime.minute(),
      })
    }

    onClose()
    setStep('type')
  }

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">일어나는 시간 유형을 선택해주세요</h3>

        {step === 'type' && (
          <div className="flex flex-col">
            <CheckListItem
              label="기도 시간"
              isSelected={selectedWakeUpType === 'prayer'}
              onClick={() => setSelectedWakeUpType('prayer')}
            />
            <CheckListItem
              label="시간 지정"
              isSelected={selectedWakeUpType === 'custom'}
              onClick={() => setSelectedWakeUpType('custom')}
            />
          </div>
        )}

        {step === 'time' && (
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-medium">일어나는 시간을 선택해주세요.</h4>

            {selectedWakeUpType === 'custom' && (
              <TimePicker
                value={selectedWakeUpTime}
                onChange={(value) => setSelectedWakeUpTime(value)}
              />
            )}

            {selectedWakeUpType === 'prayer' && (
              <div className="flex flex-col">
                {minutes.map((minute) => (
                  <CheckListItem
                    key={minute}
                    label={`${minute}분 전`}
                    isSelected={selectedWakeUpMinutes === minute}
                    onClick={() => setSelectedWakeUpMinutes(minute)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {step === 'type' ? (
          <Button
            onClick={() => {
              setStep('time')
            }}
          >
            다음
          </Button>
        ) : (
          <Button onClick={handleComplete}>선택 완료</Button>
        )}
      </div>
    </BottomSheet>
  )
}

const CheckListItem = ({
  label,
  isSelected,
  onClick,
}: {
  label: string
  isSelected: boolean
  onClick: () => void
}) => {
  return (
    <div className="flex cursor-pointer items-center justify-between px-1 py-4" onClick={onClick}>
      <span>{label}</span>
      {isSelected && <Check size={20} />}
    </div>
  )
}
