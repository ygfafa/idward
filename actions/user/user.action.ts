'use server'

import { createClient } from '@/lib/supabase/server'
import { TablesInsert } from '@/types/supabase'

export const getUsers = async () => {
  const supabase = await createClient()

  const res = await supabase.from('users').select('*')

  return res.data
}

export const createUser = async (user: TablesInsert<'users'>) => {
  const supabase = await createClient()

  const users = await getUsers()

  const isExist = users?.some(
    (existUser) =>
      existUser.phone_number === user.phone_number || existUser.nickname === user.nickname,
  )

  if (isExist) {
    throw new Error('User already exists')
  }

  const res = await supabase.from('users').insert(user).select()

  return res.data
}
