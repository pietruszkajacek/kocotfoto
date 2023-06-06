import Image from 'next/image'
import Container from '../components/container'

const Header = () => {
  return (
    <header className="flex bg-center bg-no-repeat bg-cover h-screen bg-[url('/assets/header.webp')]">
      <Container>
        <div className='flex justify-center items-end h-full'>
          <h2 className="font-amaticsc rounded-md bg-black/50 text-white text-5xl lg:text-7xl px-3 mb-[20vh]">Kamil Kocot Fotografia</h2>
        </div>
      </Container>

    </header>
  )
}

export default Header
