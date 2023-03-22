import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Posts() {
    return (
        <>
            <Head>
                <title>PostsPage</title>
            </Head>
            <main>
                <ul>
                    <li><Link href='/posts/first-post'>first-post</Link></li>
                    <li><Link href='/posts/second-post'>second-post</Link></li>
                    <li><Link href='/posts/third-post'>third-post</Link></li>
                </ul>
                <h4 className={styles.backLink}>
                    <Link href="/">Back To Home Page</Link>
                </h4>
            </main>
        </>
    )
}
