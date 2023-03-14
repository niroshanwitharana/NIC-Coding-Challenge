import Head from 'next/head'
import styles from '../styles/About.module.css'

const about = () => {
  return (
    <>
    <Head>
      <title>Nic | About</title>
      <meta name='keywords'  />
    </Head>
    <div className={styles.title}>
      <h1>about</h1>
    </div>
    </>
  );
};

export default about;

