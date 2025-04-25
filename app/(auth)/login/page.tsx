'use client'

import { createUser } from '@/actions/user/user.action'
import { zodResolver } from '@hookform/resolvers/zod'
import { setCookie } from 'cookies-next/client'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Screen } from '@/components/layout/screen'
import { BottomFixedButton } from '@/components/pattern/bottom-fixed-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signupSchema = z
  .object({
    phoneNumber: z
      .string()
      .min(1, 'Please enter your phone number')
      .regex(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/, 'Please enter a valid phone number'),
    nickname: z
      .string()
      .min(1, 'Please enter your nickname')
      .min(2, 'Nickname must be at least 2 characters')
      .max(10, 'Nickname must be at most 10 characters'),
    password: z
      .string()
      .min(1, 'Please enter your password')
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        'Password must contain letters, numbers, and special characters',
      ),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
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
      toast.warning('이미 등록되어 있는 사용자입니다.')
    }
  }

  return (
    <Screen nav={{ hasBackButton: true }}>
      <div className="flex flex-col gap-2 pt-4 pb-10">
        <h2 className="text-2xl font-bold">
          Sign up and earn money <br />
          while you sleep every day!
        </h2>
        <p className="text-gray-600">Right now, 89 users are earning money.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number (e.g. 010-1234-5678)"
            {...register('phoneNumber')}
            error={errors.phoneNumber?.message}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="nickname">Nickname</Label>
          <Input
            id="nickname"
            type="text"
            placeholder="Enter 2-10 characters"
            {...register('nickname')}
            error={errors.nickname?.message}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="At least 8 characters with letters, numbers, and special characters"
            {...register('password')}
            error={errors.password?.message}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
        </div>

        <BottomFixedButton type="submit" disabled={isSubmitting} loading={isSubmitting}>
          Sign up
        </BottomFixedButton>
      </form>
    </Screen>
  )
}

export default Page
