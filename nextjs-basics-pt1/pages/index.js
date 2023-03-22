import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Index.JS Page
        </h1>

        <h2 className={styles.backLink}><Link href="/posts">GO TO POSTS</Link></h2>
      </main>
    </>
  )
}
