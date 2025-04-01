import Image from 'next/image'

import { Screen } from '@/components/layout/screen'
import { Centered } from '@/components/pattern/centered'

const Page = () => {
  return (
    <Screen
      nav={{ hasBackButton: true }}
      className="text-white"
      background={'linear-gradient(360deg, rgb(207, 226, 255) 16.98%, rgb(59, 132, 238) 100%)'}
    >
      <div className="flex flex-col items-center justify-center gap-3 py-8">
        <div className="rounded-full bg-[#0C54BD] px-3 py-1 font-bold text-white">
          Regular sleeping
        </div>
        <Centered className="flex-col gap-3 text-center text-white">
          <h4 className="text-4xl font-bold">Earned 10 points.</h4>
          <p className="font-semibold">Bonus points have been added for regular sleeping. 🎉</p>
        </Centered>
      </div>

      <Image
        alt="point"
        src="/images/receive_point.png"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full"
      />
    </Screen>
  )
}

export default Page
