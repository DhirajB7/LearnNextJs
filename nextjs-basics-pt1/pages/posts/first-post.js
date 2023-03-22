import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styles from '../../styles/Post.module.css';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>first-post</title>
            </Head>
            <main>
                <h1 className={styles.title}>
                    First Post Page
                </h1>
                <h4 className={styles.backLink}>
                    <Link href="/posts">Back to Posts</Link>
                </h4>
                <div className={styles.imageContainer} >
                <Image src="/test.png" height={400} width={400} alt="one" />
                <Image src="/test.png" height={400} width={400} alt="one" />
                <Image src="/test.png" height={400} width={400} alt="one" />
                <Image src="/test.png" height={400} width={400} alt="one" />
                <Image src="/test.png" height={400} width={400} alt="one" />
                </div>
            </main>
        </>
    )
}
