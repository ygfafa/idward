import { X } from 'lucide-react'
import Image from 'next/image'

import { Screen } from '@/components/layout/screen'
import { Button } from '@/components/ui/button'

const Page = () => {
  return (
    <Screen background="#1B0B46">
      <Button size="icon" className="fixed top-4 right-4 bg-transparent text-white">
        <X />
      </Button>
      <div className="flex flex-col items-center justify-center pt-4 text-white">
        <p>TidurCuan, menghasilkan uang saat tidur</p>
        <h2 className="text-center text-4xl font-bold">
          Resmi dibuka
          <br />
          pada bulan Mei
        </h2>
      </div>
      <div className="relative">
        <Image
          src={'/images/moon.png'}
          width={0}
          height={0}
          sizes="100vw"
          alt="hero"
          className="w-full"
        />
        <Image
          src="/images/money.png"
          alt="money"
          width={106}
          height={165}
          className="absolute right-[30px] bottom-[30px]"
        />
      </div>

      <div className="rounded-lg bg-gray-300 p-4">
        Kami akan beri tahu Anda pertama
        <br /> saat layanan dibuka
      </div>
    </Screen>
  )
}

export default Page
