// Types
import type { NextPage } from 'next'

// Next
import Link from 'next/link'

const Data: NextPage = () => {
  return (
    <div className='container'>
      <p>Modify Data</p>

      <Link href='/data/weapons'>
        <a>Weapons</a>
      </Link>
      <Link href='/data/gear'>
        <a>Gear</a>
      </Link>
    </div>
  )
}

export default Data
