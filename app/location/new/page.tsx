'use client'

import { Check } from 'lucide-react'
import { useState } from 'react'

import { Screen } from '@/components/layout/screen'
import { BottomFixedButton } from '@/components/pattern/bottom-fixed-button'
import { BottomSheet } from '@/components/ui/bottom-sheet'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const INDONESIA_CITIES = [
  { id: 'jakarta', name: '자카르타' },
  { id: 'surabaya', name: '수라바야' },
  { id: 'bandung', name: '반둥' },
  { id: 'medan', name: '메단' },
  { id: 'semarang', name: '세마랑' },
  { id: 'makassar', name: '마카사르' },
  { id: 'palembang', name: '팔렘방' },
  { id: 'denpasar', name: '덴파사르' },
  { id: 'batam', name: '바탐' },
  { id: 'pekanbaru', name: '페칸바루' },
] as const

type IndonesiaCity = (typeof INDONESIA_CITIES)[number]['id']

const Page = () => {
  const [isLocationBottomSheetOpen, setIsLocationBottomSheetOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState<IndonesiaCity>('jakarta')

  const selectedCityName = INDONESIA_CITIES.find((city) => city.id === selectedCity)?.name

  return (
    <Screen nav={{ hasBackButton: true }}>
      <div className="pt-4 pb-10">
        <h2 className="text-2xl font-bold">Share your location to check prayer times.</h2>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="location">My location</Label>
        <Input
          id="location"
          readOnly
          value={selectedCityName}
          onFocus={() => setIsLocationBottomSheetOpen(true)}
        />
      </div>

      <BottomSheet
        isOpen={isLocationBottomSheetOpen}
        onClose={() => setIsLocationBottomSheetOpen(false)}
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">인도네시아 주요 도시</h3>
          <div className="flex flex-col">
            {INDONESIA_CITIES.map((city) => (
              <div
                key={city.id}
                className="flex cursor-pointer items-center justify-between px-1 py-4"
                onClick={() => {
                  setSelectedCity(city.id)
                  setIsLocationBottomSheetOpen(false)
                }}
              >
                <span>{city.name}</span>
                {selectedCity === city.id && <Check size={20} />}
              </div>
            ))}
          </div>
        </div>
      </BottomSheet>

      <BottomFixedButton>Complete</BottomFixedButton>
    </Screen>
  )
}

export default Page
