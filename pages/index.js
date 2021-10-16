import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Coding from '../public/coding.jpg'
import Loader from '../components/loader/loader';
import Header from '../components/header/header'
import Contact from '../components/contact/contact';
import Resume from '../components/resume/resume';
import Skills from '../container/skills/skills';
import styles from '../styles/Home.module.css'

const Home = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => { setLoading(false); }, [2015]);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Abhil</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/titleIcon.svg" />
      </Head>
      <main className={styles.main} id="home">
        {loading && <Loader />}
        <Header />
        <div className={styles.codingBgImage}>
          <Image src={Coding} alt="Vercel Logo" height={1800} className={styles.bgImage}/>
        </div>
        <div className={styles.contentWrapper}>
          <Contact />
          <Resume />

          <Skills />
        </div>
        <div className={styles.professionalDetails}>
        </div>
      </main>
    </div>
  )
}

export default Home;