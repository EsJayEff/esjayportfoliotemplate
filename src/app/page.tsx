import { Inter } from 'next/font/google'
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
    <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className='h-[1200px]'></div> */}
      </div>
      )
}
