import Image from 'next/image'

import { Screen } from '@/components/layout/screen'
import { BottomFixedButton } from '@/components/pattern/bottom-fixed-button'
import { Centered } from '@/components/pattern/centered'
import { ProgressBar } from '@/components/ui/ProgressBar'

const Page = () => {
  return (
    <Screen>
      <h2 className="pt-4 text-center text-2xl font-bold">Subin&apos;s coupon is 21% completed.</h2>

      <Centered className="mt-8 mb-6">
        <div className="w-[80%]">
          <Image
            src="/images/giftcard_grab_10000.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="gift-card"
            className="h-auto w-full"
          />
        </div>
      </Centered>
      <ProgressBar percent={21} />

      <BottomFixedButton>Enter the email to receive the gift card</BottomFixedButton>
    </Screen>
  )
}

export default Page
