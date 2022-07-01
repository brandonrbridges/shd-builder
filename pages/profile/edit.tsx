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
import PageHeader from '@/components/PageHeader'
import ProfileForm from '@/components/ProfileForm'

const EditProfile: NextPage = () => {
  const router = useRouter()

  const { user, loading } = useAuthContext()

  const [profile, setProfile] = useState<any>({
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
        <PageHeader title='Edit Profile' />
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
