import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Selamın Aleyküm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="justfiy-between lg: flex items-center border-y border-black bg-yellow-400 py-10 lg:py-0">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{' '}
            is a place to write, read and connect
          </h1>
          <h2>
            It's easy and free to post your thinking on any topi and connect
            with millions of readers
          </h2>
        </div>
        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        />
      </div>
    </div>
  )
}
