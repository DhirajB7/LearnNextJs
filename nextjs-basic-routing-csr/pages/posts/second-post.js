import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function SecondPost() {
    return (
        <>
            <Head>
                <title>second-post</title>
            </Head>
            <main>
                <h1 className={styles.title}>
                    Second Post Page
                </h1>
                <h4 className={styles.backLink}>
                    <Link href="/posts">Back to Posts</Link>
                </h4>
            </main>
        </>
    )
}
