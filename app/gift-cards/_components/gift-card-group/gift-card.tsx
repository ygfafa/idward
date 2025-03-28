import Image from 'next/image'

import { Button } from '@/components/ui/button'

type GiftCardProps = {
  id: string
  name: string
  rp: number
  average: number
  onSelect: (id: string) => void
  imageSrc: string
}

export const GiftCard = ({ id, name, rp, average, onSelect, imageSrc }: GiftCardProps) => {
  return (
    <div className="rounded-lg border border-gray-300 px-1 pt-1 pb-5 shadow">
      <Image
        src={imageSrc}
        alt={name}
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full"
      />

      <div className="mb-5 p-2">
        <p className="leading-4">{name}</p>
        <h3 className="text-lg font-bold">Rp {rp}</h3>
        <span>Average: {average} days</span>
      </div>
      <div className="flex w-full justify-center">
        <Button className="h-8 rounded-full text-sm font-bold" onClick={() => onSelect(id)}>
          select
        </Button>
      </div>
    </div>
  )
}
