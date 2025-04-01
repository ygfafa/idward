'use client'

import { useState } from 'react'

import { Screen } from '@/components/layout/screen'
import { BottomFixedButton } from '@/components/pattern/bottom-fixed-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Page = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
  }

  const handleSubmit = () => {
    if (!email) {
      setError('Please enter your email.')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    alert(email)
    setError('')
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

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError('')
          }}
          placeholder="Enter your email"
          error={error}
        />
      </div>

      <BottomFixedButton onClick={handleSubmit}>complete</BottomFixedButton>
    </Screen>
  )
}

export default Page
