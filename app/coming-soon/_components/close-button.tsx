'use client'

import { X } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const CloseButton = () => {
  return (
    <Button
      size="icon"
      className="fixed top-4 right-4 bg-transparent text-white"
      onClick={window.close}
    >
      <X />
    </Button>
  )
}
