// Hooks
import React, { useState } from 'react'

// Next
import { useRouter } from 'next/router'

// Helpers
import { createUser } from '@/helpers/firebase'

// Components
import { TextField } from '@/components/Form'

const RegisterForm = () => {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (event: React.SyntheticEvent) => {
    event.preventDefault()

    console.log('[App] Registering user: ' + username)

    createUser(username, password)
      .then((user) => {
        if (user) {
          router.push('/')
        }
      })
      .catch((error) => router.push(`/register?error=${error}`))
  }

  return (
    <form onSubmit={handleRegister} className='gap-4 grid grid-cols-2'>
      <TextField
        value={username}
        onChange={(value: string) => setUsername(value)}
        placeholder='Email Address'
      />
      <TextField
        value={password}
        onChange={(value: string) => setPassword(value)}
        placeholder='Password'
      />
      <div className='col-span-full flex items-center justify-center'>
        <button type='submit'>Register</button>
      </div>
    </form>
  )
}

export default RegisterForm
