import { createContext } from 'react'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { api } from '../services/api'

type AuthContext = {
  isLoading: boolean
  session: null | UserAPIResponse
  save: (data: UserAPIResponse) => void
  remove: () => void
}

const LOCAL_STORAGE_KEY = '@refund'

export const AuthContext = createContext({} as AuthContext)

function loadUser() {
  const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`)
  const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`)

  if (token && user) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return {
      token,
      user: JSON.parse(user),
    }
  }
  return null
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<null | UserAPIResponse>(loadUser)
  const [isLoading] = useState(false)
  function save(data: UserAPIResponse) {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:user`, JSON.stringify(data.user))
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token)
    setSession(data)

    api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
  }

  function remove() {
    setSession(null)
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:user`)
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:token`)

    window.location.assign('/')
  }

  return (
    <AuthContext.Provider value={{ session, save, isLoading, remove }}>
      {children}
    </AuthContext.Provider>
  )
}
