// React
import { createContext, useCallback, useContext, useEffect, useState } from 'react'

// Next
import { useRouter } from 'next/router'

// Firebase
import { authentication } from '../firebase'

import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

// Helpers
import { getFirebaseDoc } from '../helpers/firebase'

// Hooks
import useLocalStorage from '../hooks/useLocalStorage'

// Create the User Context
const AuthContext = createContext({ user: null, loading: true })

const format = async (user) => {
  const existing = await getFirebaseDoc('users', user.uid)

  if (existing) {
    return existing
  }
}

const useAuth = () => {
  const router = useRouter()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const [userId, setUserId] = useLocalStorage('userId', '')

  const handle = async (raw) => {
    if (!raw) {
      localStorage.clear()
    } else {
      const user = await format(raw)

      setUser(user)

      return user
    }
  }

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(authentication, email, password)
        .then(async (response) => {
          await handle(response.user)

          setUserId(response.user.uid)

          resolve(true)

          return setLoading(false)
        })
        .catch((error) => {
          reject(error)

          return setLoading(false)
        })
    })
  }

  const logout = useCallback(async () => {
    await signOut(authentication)

    await handle()

    setLoading(false)
  })

  useEffect(() => {
    const fn = onAuthStateChanged(authentication, async (user) => {
      const u = await handle(user ?? null)

      if (u) {
        setLoading(false)

        return u
      } else {
        return router.push('/')
      }
    })

    return () => fn()
  }, [])

  return { user, loading, login, logout }
}

export const AuthProvider = ({ children }) => {
  let auth = useAuth()

  useEffect(() => {
    const fn = () => (auth = useAuth())

    return () => fn()
  }, [])

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)
