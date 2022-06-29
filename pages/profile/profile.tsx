// Types
import type { NextPage } from 'next'

// Hooks
import { useEffect } from 'react'

// Next
import Link from 'next/link'
import { useRouter } from 'next/router'

// Context
import { useAuthContext } from '../../context/auth'

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
      <div className='container'>
        <h1>Profile</h1>
        <p>{user.email}</p>
        <Link href='/profile/edit'>
          <a>Edit Profile</a>
        </Link>
      </div>
    )
  } else {
    return null
  }
}

export default Profile
