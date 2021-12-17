import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>&#65279;</title>
                <meta name="description" content="Optimize"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <i className={styles.eye}/>
            <h1 className={styles.title}>STAY TUNED</h1>
        </div>
    )
}

export default Home
