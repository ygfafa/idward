import { Screen } from '@/components/layout/screen'

import { GiftCardGroup } from '../_components/gift-card-group'

const Page = () => {
  return (
    <Screen nav={{ hasBackButton: true }}>
      <div className="flex flex-col gap-2 pt-4 pb-10">
        <h2 className="text-2xl font-bold">Which gift card would you like to receive?</h2>
        <p className="text-gray-600">Earn a free gift card while you sleep!</p>
      </div>

      <GiftCardGroup />
    </Screen>
  )
}

export default Page
