import Image from 'next/image'
import { Footer, Header, Nav } from '../components'

export default function Home() {
  return (
    <div >
      <Header />
    <Nav/>
      <main >
        <h1 >
          Welcome to Andgo<a href="https://nextjs.org">Next.Js </a> <a href='https://strapi.io'>and Strapi Blog!</a>
        </h1>

      </main>
      <Footer />

    </div>
  )
}
