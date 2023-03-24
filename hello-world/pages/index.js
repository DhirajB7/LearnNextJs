import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>/</title>
      </Head>
      <main>
        <h1>INDEX JS</h1>
      </main>
    </>
  )
}
