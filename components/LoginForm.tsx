// Hooks
import React, { useState } from 'react'

// Context
import { useAuthContext } from '@/context/auth'

// Components
import { TextField } from '@/components/Form'

const LoginForm = () => {
  const { login } = useAuthContext()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState(null)

  const handleLogin = (event: React.SyntheticEvent) => {
    event.preventDefault()

    login(username, password).catch((error: string) => setError(null))
  }

  return (
    <form onSubmit={handleLogin} className='gap-4 grid grid-cols-2'>
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
        <button type='submit'>Login</button>
      </div>
    </form>
  )
}

export default LoginForm
