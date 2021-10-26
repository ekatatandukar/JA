import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
      <Head>
        <title>Jina Alchemy</title>
        <meta name="description" content="Welcome to Jina Alchemy!" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
