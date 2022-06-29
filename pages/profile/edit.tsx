// Types
import type { NextPage } from 'next'

// Hooks
import { useEffect, useState } from 'react'

// Next
import Link from 'next/link'
import { useRouter } from 'next/router'

// Context
import { useAuthContext } from '@/context/auth'

// Components
import ProfileForm from '@/components/ProfileForm'

const EditProfile: NextPage = () => {
  const router = useRouter()

  const { user, loading } = useAuthContext()

  const [profile, setProfile] = useState({
    id: '',
    email: '',
  })

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    } else {
      setProfile(user)
    }
  }, [router, user, loading])

  if (!loading && user) {
    return (
      <div className='container'>
        <h1>Profile</h1>
        <div className='border p-4 rounded'>
          <ProfileForm profile={profile} />
        </div>
        <Link href='/profile/'>
          <a>Return to your Profile</a>
        </Link>
      </div>
    )
  } else {
    return null
  }
}

export default EditProfile
