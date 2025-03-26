import Image from 'next/image'

import { Screen } from '@/components/layout/screen'
import { BottomFixedButton } from '@/components/pattern/bottom-fixed-button'
import { Centered } from '@/components/pattern/centered'

import CalendarIcon from './_assets/calendar.svg'
import PencilIcon from './_assets/pencil.svg'
import ShoesIcon from './_assets/shoes.svg'

const Page = () => {
  return (
    <Screen>
      <div className="flex flex-1 flex-col justify-between gap-10">
        <Centered className="flex-col gap-4">
          <h2 className="text-center text-3xl leading-10 font-bold">
            Earn money
            <br /> while you sleep.
          </h2>
          <Image src="/images/clock_with_rp.png" width={195} height={160} alt="clock_with_rp" />
        </Centered>

        <div className="flex flex-col gap-3">
          <LandingDescriptionRow icon={<CalendarIcon />} title="Earn points while you sleep." />
          <LandingDescriptionRow
            icon={<ShoesIcon />}
            title={'Wake up at your set time\nand earn additional bonus points'}
          />
          <LandingDescriptionRow
            icon={<PencilIcon />}
            title={'Earn an average of 1,000 Rp\nevery two weeks.'}
          />
        </div>
      </div>

      <BottomFixedButton>Start Now</BottomFixedButton>
    </Screen>
  )
}

type LandingDescriptionRowProps = {
  icon: React.ReactNode
  title: string
}
const LandingDescriptionRow = ({ icon, title }: LandingDescriptionRowProps) => {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-5">
      {icon}
      <p className="font-semibold whitespace-pre-line">{title}</p>
    </div>
  )
}

export default Page
