import Link from 'next/link'

interface NavigationProps {
  user?: {
    email: string
  }
}

const Navigation = ({ user }: NavigationProps) => {
  return (
    <div className='bg-gray-900 mb-4 py-2'>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <a>
            <p className='text-white'>SHD Builder</p>
          </a>
        </Link>
        {user && <p className='text-white'>Logged in as {user.username ?? user.email}</p>}
      </div>
    </div>
  )
}

export default Navigation
