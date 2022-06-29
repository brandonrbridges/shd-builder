import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import { AuthProvider } from '../context/auth'

import '../styles/globals.css'

function Application({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default Application
