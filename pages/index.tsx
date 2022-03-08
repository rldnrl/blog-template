import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/Header/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header>
        <Header.Logo />
        <Header.Content />
      </Header>
    </>
  )
}

export default Home
