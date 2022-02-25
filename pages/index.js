import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Coding from '../public/coding.jpg'
import Loader from '../components/loader/loader';
import Header from '../components/header/header'
import Contact from '../components/contact/contact';
import Resume from '../components/resume/resume';
import Skills from '../container/skills/skills';
import Experience from '../container/experience/experience';
import Educetion from '../container/education/education'
import styles from '../styles/Home.module.css'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

const Home = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { setLoading(false); }, [2015]);
    new WOW().init();
    console.log(<h1>Abhil</h1>)
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Abhil</title>
        <link rel="icon" href="/titleIcon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
      </Head>
      <main className={styles.main} id="home">
        {loading && <Loader />}
        <Header />
        <div className={styles.codingBgImage}>
          <Image src={Coding} alt="Vercel Logo" height={3000} className={styles.bgImage}/>
        </div>
        <div className={styles.contentWrapper}>
          <Contact />
          <Resume />
          <Skills />
          <Experience />
          <Educetion />
        </div>
        <div className={styles.professionalDetails}>
        </div>
      </main>
    </div>
  )
}

export default Home;