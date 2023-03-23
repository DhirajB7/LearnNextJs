import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function ThirdPost() {
    return (
        <>
            <Head>
                <title>third-post</title>
            </Head>
            <main>
                <h1 className={styles.title}>
                    Third Post Page
                </h1>
                <h4 className={styles.backLink}>
                    <Link href="/posts">Back to Posts</Link>
                </h4>
            </main>
        </>
    )
}
