import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LTO Moonbase</title>
        <meta name="description" content="LTO Moonbase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-blue-100 w-full max-w-hd h-screen">
        <h1 className="uppercase text-center text-7xl py-10">Moonbase</h1>
      </main>
    </>
  )
}

export default Home
