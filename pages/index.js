import Head from 'next/head'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <hr/>
      <Main />

      <Footer />

    </div>
  )
}
