'use client'

import { GiftCard } from './gift-card'

const giftCards = [
  {
    id: 'alfamart_10000',
    name: 'Alfa mart',
    rp: 10000,
    average: 8,
    imageSrc: '/images/giftcard_alfamart_10000.png',
  },
  {
    id: 'shopee_30000',
    name: 'Shopee',
    rp: 30000,
    average: 23,
    imageSrc: '/images/giftcard_shopee_30000.png',
  },
  {
    id: 'grabfood_10000',
    name: 'Grab food',
    rp: 10000,
    average: 14,
    imageSrc: '/images/giftcard_grab_10000.png',
  },
  {
    id: 'grabfood_25000',
    name: 'Grab food',
    rp: 25000,
    average: 18,
    imageSrc: '/images/giftcard_grab_25000.png',
  },
]
export const GiftCardGroup = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {giftCards.map((c) => (
        <GiftCard
          key={c.id}
          onSelect={(id) => {
            alert(id)
          }}
          {...c}
        />
      ))}
    </div>
  )
}
