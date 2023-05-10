import Header from '@/components/Header'
import MainHome from '@/components/MainHome'

export const metadata = {
  title: 'Home - VR Auto Peças',
  description: 'Listen your favorite music',
}

export default function Home() {
  return (
    <main className='h-screen w-full bg-white-body flex flex-col relative'>
    {/* // <main> */}
      <Header />
      <MainHome />
    </main>
  )
}
