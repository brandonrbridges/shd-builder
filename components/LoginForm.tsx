// Hooks
import React, { useState } from 'react'

// Components
import { TextField } from '@/components/Form'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event: React.SyntheticEvent) => {
    event.preventDefault()
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
    </form>
  )
}

export default LoginForm
