import Image from 'next/image'
import Link from 'next/link'

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
            Dapatkan uang
            <br /> saat Anda tidur.
          </h2>
          <Image src="/images/clock_with_rp.png" width={195} height={160} alt="clock_with_rp" />
        </Centered>

        <div className="flex flex-col gap-3">
          <LandingDescriptionRow
            icon={<CalendarIcon />}
            title={'Poin (uang) bertambah\nsaat Anda tidur.'}
          />
          <LandingDescriptionRow
            icon={<ShoesIcon />}
            title={
              'Jika Anda bangun\npada waktu yang telah ditentukan,\nAnda akan mendapatkan lebih banyak poin.'
            }
          />
          <LandingDescriptionRow
            icon={<PencilIcon />}
            title={'Rata-rata, Anda bisa mendapatkan\n1.000 Rp dalam 2 minggu.'}
          />
        </div>
      </div>

      <Link href="/sign-up">
        <BottomFixedButton>Mulai Sekarang</BottomFixedButton>
      </Link>
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
