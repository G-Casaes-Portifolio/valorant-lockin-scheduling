import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ListView from '@/components/list'
import TableView from '@/components/table'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lock-in</title>
        <meta name="description" content="Valorant Lock-in 2023 Schedule" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="https://assets.valorantesports.com/val/vct-logo.21d0c9ddeb.svg" />
      </Head>
      <main className={styles.main}>
        <ListView />
        <TableView />
      </main>
    </>
  )
}
