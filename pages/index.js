import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from "next/link"
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.title}>
      <h1> Home Page</h1>      
    </div>
  )
}
