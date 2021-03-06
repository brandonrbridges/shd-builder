// Types
import type { NextPage } from 'next'

// Next
import Head from 'next/head'
import Link from 'next/link'

// Context
import { useAuthContext } from '@/context/auth'

// Components
import SHDBuilder from '@/components/SHDBuilder'

const Home: NextPage = () => {
  const { user } = useAuthContext()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col space-y-4'>
        <div className='container border p-4 rounded'>
          <p className='font-bold'>Welcome to the SHD Builder.</p>
        </div>
        <SHDBuilder />
      </div>
    </>
  )
}

export default Home
