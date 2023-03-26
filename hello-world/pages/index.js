import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>/</title>
      </Head>
      <main>
        <h1><Link href="/users">USERS</Link></h1>
        <h1><Link href="/posts">POSTS</Link></h1>
      </main>
    </>
  )
}
