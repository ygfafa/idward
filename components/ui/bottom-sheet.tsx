import { AnimatePresence, motion } from 'framer-motion'
import { type PropsWithChildren, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { MAX_MOBILE_SCREEN_WIDTH } from '../layout/main-layout'

type Props = PropsWithChildren<{
  isOpen: boolean
  onClose: () => void
}>

export const BottomSheet = ({ children, isOpen, onClose }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (typeof window === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/25"
          />

          <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center p-5">
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.2 }}
              style={{ maxWidth: MAX_MOBILE_SCREEN_WIDTH }}
              className="flex max-h-[90vh] w-full flex-col rounded-2xl bg-white p-6"
            >
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  )
}
