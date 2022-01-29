import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='page-wrapper w-full flex flex-col items-center bg-gray-500'>
      <Head>
        <meta charSet='utf-8'/>
      </Head>
      <Layout>
        <Component {...pageProps} />                
      </Layout>
    </div>
  ) 
}

export default MyApp
