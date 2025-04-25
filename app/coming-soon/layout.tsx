import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

const Layout = async ({ children }: { children: ReactNode }) => {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('user')

  if (!userCookie) {
    redirect('/login')
  }

  return <>{children}</>
}

export default Layout
