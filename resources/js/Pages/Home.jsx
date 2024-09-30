import { Head } from '@inertiajs/react'
import React from 'react'

const Home = ({user}) => {
  return (
    <div className="text-3xl">
        <Head>
          <title>Home</title>
          <meta name="description" content="Dashboard" />
        </Head>
        <h1> Home {user}</h1>
    </div>
  )
}

export default Home