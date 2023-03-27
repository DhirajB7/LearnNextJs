import Head from 'next/head'
import Link from 'next/link'

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
