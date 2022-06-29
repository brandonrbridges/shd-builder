// Types
import type { NextPage } from 'next'

// Hooks
import { useEffect } from 'react'

// Next
import Link from 'next/link'
import { useRouter } from 'next/router'

// Context
import { useAuthContext } from '@/context/auth'

const Profile: NextPage = () => {
  const router = useRouter()

  const { user, loading } = useAuthContext()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [router, user, loading])

  if (!loading && user) {
    return (
      <>
        <div className='bg-gray-200 h-56 -mt-4 w-full'></div>
        <div className='flex flex-col space-y-4'>
          <div className='container mt-4'>
            <div className='flex items-center justify-between'>
              <h1>{user.username ?? user.email}</h1>
              <Link href='/profile/edit'>
                <a>Edit Profile</a>
              </Link>
            </div>
          </div>
          <div className='container'>
            <div className='grid grid-cols-2'>
              <div className='border p-4 rounded'>
                <p>My Builds</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return null
  }
}

export default Profile
