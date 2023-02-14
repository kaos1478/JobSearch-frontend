import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NextJS ts template" />
      </Head>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/test/jobs',
      permanent: false
    }
  }
}
