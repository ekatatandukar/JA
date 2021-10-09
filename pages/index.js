import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jina Alchemy</title>
        <meta name="description" content="Welcome to Jina Alchemy!" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Jina Alchemy!</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
