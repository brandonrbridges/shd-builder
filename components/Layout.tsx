// Types
import { ReactNode } from 'react'

// Context
import { useAuthContext } from '../context/auth'

// Components
import Navigation from './Navigation'

// Interface
interface LayoutProps {
  children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { user } = useAuthContext()

  return (
    <>
      <div id='body'>
        <Navigation user={user} />
        {children}
      </div>
    </>
  )
}

export default Layout
