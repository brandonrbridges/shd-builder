// React
import React from 'react'

// Next
import Link from 'next/link'
import { useRouter } from 'next/router'

// Context
import { useAuthContext } from '@/context/auth'

interface NavigationProps {
  user?: {
    email?: string
    username?: string
  } | null
}

const Navigation = ({ user }: NavigationProps) => {
  const router = useRouter()

  const { logout } = useAuthContext()

  const handleLogout = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    await logout()
    await router.reload()
  }

  return (
    <div className='bg-gray-900 mb-4 py-2'>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <a>
            <p className='text-white'>Division 2 Loadouts</p>
          </a>
        </Link>
        {user ? (
          <div className='flex items-center justify-center space-x-4'>
            <Link href='/profile'>
              <a className='text-white'>Logged in as {user.username ?? user.email}</a>
            </Link>
            <Link href='/data'>
              <a className='text-gray-400 hover:text-gray-200'>Edit Data</a>
            </Link>
            <a className='cursor-pointer text-gray-500 hover:text-gray-200' onClick={handleLogout}>
              Logout
            </a>
          </div>
        ) : (
          <div className='flex items-center justify-center space-x-4'>
            <Link href='/register'>
              <a className='text-gray-400 hover:text-gray-200'>Register</a>
            </Link>
            <Link href='/login'>
              <a className='text-gray-400 hover:text-gray-200'>Login</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navigation
