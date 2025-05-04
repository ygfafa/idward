'use client'

import { createUser } from '@/actions/user/user.action'
import { zodResolver } from '@hookform/resolvers/zod'
import { setCookie } from 'cookies-next/client'
import { isValidPhoneNumber } from 'libphonenumber-js'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Screen } from '@/components/layout/screen'
import { BottomFixedButton } from '@/components/pattern/bottom-fixed-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signupSchema = z
  .object({
    phoneNumber: z.string().refine((val) => isValidPhoneNumber(val, 'ID'), {
      message: 'Masukkan nomor telepon Indonesia yang valid',
    }),
    nickname: z
      .string()
      .min(1, 'Masukkan Nomor Telepon Anda')
      .min(2, 'Nomor Telepon harus terdiri dari setidaknya 2 karakter')
      .max(10, 'Nomor Telepon harus terdiri maksimal 10 karakter'),
    password: z
      .string()
      .min(1, 'Masukkan kata sandi Anda')
      .min(8, 'Kata sandi harus terdiri dari setidaknya 8 karakter')
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        'Kata sandi harus mengandung huruf, angka, dan karakter khusus',
      ),
    confirmPassword: z.string().min(1, 'Konfirmasi kata sandi Anda'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Kata sandi tidak cocok',
    path: ['confirmPassword'],
  })

type SignupFormData = z.infer<typeof signupSchema>

const Page = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  })

  useEffect(() => {
    router.prefetch('/coming-soon')
  }, [router])

  const onSubmit = async (data: SignupFormData) => {
    try {
      const users = await createUser({
        nickname: data.nickname,
        password: data.password,
        phone_number: data.phoneNumber,
      })

      setCookie('user', users)
      router.replace('/coming-soon')
    } catch {
      // 다국어 처리
      toast.warning('Pengguna sudah terdaftar.')
    }
  }

  return (
    <Screen nav={{ hasBackButton: true }}>
      <div className="flex flex-col gap-2 pt-4 pb-10">
        <h2 className="text-2xl font-bold">
          Daftar dan dapatkan uang
          <br />
          sambil tidur setiap hari!
        </h2>
        {/* <p className="text-gray-600">
          Saat ini, 89 pengguna <br />
          sedang mendapatkan uang.
        </p> */}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Nomor Telepon</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Masukkan nomor telepon Anda (e.g. 812-3456-7890)"
            {...register('phoneNumber')}
            error={errors.phoneNumber?.message}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="nickname">Nickname</Label>
          <Input
            id="nickname"
            type="text"
            placeholder="Masukkan 2-10 karakter"
            {...register('nickname')}
            error={errors.nickname?.message}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Kata sandi</Label>
          <Input
            id="password"
            type="password"
            placeholder="Masukkan setidaknya 8 karakter dengan huruf, angka, dan karakter khusus"
            {...register('password')}
            error={errors.password?.message}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="confirmPassword">Konfirmasi kata sandi</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Masukkan kembali kata sandi Anda"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
        </div>

        <BottomFixedButton type="submit" disabled={isSubmitting} loading={isSubmitting}>
          Selesaikan pendaftaran
        </BottomFixedButton>
      </form>
    </Screen>
  )
}

export default Page
