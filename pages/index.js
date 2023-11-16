import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <p>get started by accessing slug like /hello1, /hello2 if sulg not fund 404 error page displays</p>
    </>
  )
}
