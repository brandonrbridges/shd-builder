// Hooks
import React, { useEffect, useState } from 'react'

// Firebase
import { updateFirebaseDoc } from '@/helpers/firebase'

// Components
import Button from '@/components/Button'
import { TextField } from '@/components/Form'

interface ProfileFormProps {
  profile: ProfileProps
}

interface ProfileProps {
  id: string
  email: string
  username?: string | undefined
}

const ProfileForm = ({ profile }: ProfileFormProps) => {
  const [data, setData] = useState<ProfileProps>({
    id: '',
    email: '',
  })

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    await updateFirebaseDoc('users', profile.id, data)
  }

  useEffect(() => {
    if (profile) {
      setData(profile)
    }
  }, [profile])

  return (
    <form onSubmit={handleSubmit} className='gap-4 grid grid-cols-3'>
      <div>
        <label>Email Address</label>
        <TextField value={data.email} />
      </div>
      <div>
        <label>Username</label>
        <TextField
          value={data.username}
          onChange={(value: string) => setData((prev) => ({ ...prev, username: value }))}
        />
      </div>
      <div className='col-span-full flex items-center justify-center'>
        <Button type='submit' variant='primary'>
          Update Profile
        </Button>
      </div>
    </form>
  )
}

export default ProfileForm
