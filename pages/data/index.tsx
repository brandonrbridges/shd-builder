// Types
import type { NextPage } from 'next'

// Next
import Link from 'next/link'

// Components
import PageHeader from '@/components/PageHeader'

const Data: NextPage = () => {
  return (
    <div className='container'>
      <PageHeader title='Data Management' />

      <p>
        <Link href='/data/weapons'>
          <a>Weapons</a>
        </Link>
      </p>
      <p>
        <Link href='/data/gear'>
          <a>Gear</a>
        </Link>
      </p>
    </div>
  )
}

export default Data
