import { useRef, useState } from 'react'

export type TimePickerValue = {
  hour: number
  minute: number
}

type TimePickerProps = {
  value?: TimePickerValue
  onChange?: (value: TimePickerValue) => void
}

const ITEM_HEIGHT = 40

export const TimePicker = ({ value, onChange }: TimePickerProps) => {
  const [selectedHour, setSelectedHour] = useState(value?.hour || 0)
  const [selectedMinute, setSelectedMinute] = useState(value?.minute || 0)

  const hours = Array.from({ length: 24 }, (_, i) => i)
  const minutes = Array.from({ length: 60 }, (_, i) => i)

  const hourRef = useRef<HTMLDivElement>(null)
  const minuteRef = useRef<HTMLDivElement>(null)

  const handleScroll = (
    ref: HTMLDivElement,
    items: number[],
    setValue: (value: number) => void,
  ) => {
    const scrollTop = ref.scrollTop
    const index = Math.round(scrollTop / ITEM_HEIGHT)
    const value = items[Math.min(Math.max(index, 0), items.length - 1)]
    setValue(value)
    onChange?.({ hour: selectedHour, minute: selectedMinute })
  }

  return (
    <div className="flex gap-4 py-4">
      {/* 시간 선택 */}
      <div className="relative flex-1">
        <div
          ref={hourRef}
          className="scrollbar-hide h-[200px] snap-y snap-mandatory overflow-auto"
          onScroll={() => {
            if (hourRef.current) {
              handleScroll(hourRef.current, hours, setSelectedHour)
            }
          }}
        >
          <div style={{ height: `${ITEM_HEIGHT * 2}px` }} />
          {hours.map((hour) => {
            const { hour: displayHour, period } = convertTo12Hour(hour)
            return (
              <div
                key={hour}
                className="flex h-[40px] cursor-pointer snap-start items-center justify-center gap-1 text-lg"
                onClick={() => {
                  if (hourRef.current) {
                    hourRef.current.scrollTo({
                      top: hour * ITEM_HEIGHT,
                      behavior: 'smooth',
                    })
                    setSelectedHour(hour)
                    onChange?.({ hour, minute: selectedMinute })
                  }
                }}
              >
                <span>{String(displayHour).padStart(2, '0')}</span>
                <span className="text-sm text-gray-500">{period}</span>
              </div>
            )
          })}
          <div style={{ height: `${ITEM_HEIGHT * 2}px` }} />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
          <div className="border-primary h-[40px] rounded-lg border-2" />
        </div>
      </div>

      {/* 분 선택 */}
      <div className="relative flex-1">
        <div
          ref={minuteRef}
          className="scrollbar-hide h-[200px] snap-y snap-mandatory overflow-auto"
          onScroll={() => {
            if (minuteRef.current) {
              handleScroll(minuteRef.current, minutes, setSelectedMinute)
            }
          }}
        >
          <div style={{ height: `${ITEM_HEIGHT * 2}px` }} />
          {minutes.map((minute) => (
            <div
              key={minute}
              className="flex h-[40px] cursor-pointer snap-start items-center justify-center gap-1 text-lg"
              onClick={() => {
                if (minuteRef.current) {
                  minuteRef.current.scrollTo({
                    top: minute * ITEM_HEIGHT,
                    behavior: 'smooth',
                  })
                  setSelectedMinute(minute)
                  onChange?.({ hour: selectedHour, minute })
                }
              }}
            >
              <span>{String(minute).padStart(2, '0')}</span>
              <span className="text-sm text-gray-500">min</span>
            </div>
          ))}
          <div style={{ height: `${ITEM_HEIGHT * 2}px` }} />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
          <div className="border-primary h-[40px] rounded-lg border-2" />
        </div>
      </div>
    </div>
  )
}

export const convertTo12Hour = (hour: number) => {
  if (hour === 0) return { hour: 12, period: 'AM' }
  if (hour === 12) return { hour: 12, period: 'PM' }
  if (hour > 12) return { hour: hour - 12, period: 'PM' }
  return { hour, period: 'AM' }
}
