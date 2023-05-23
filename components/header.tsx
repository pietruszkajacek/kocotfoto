import Image from 'next/image'
import Container from '../components/container'

const Header = () => {
  return (
    <header className="flex h-auto bg-center bg-no-repeat bg-cover h-screen bg-[url('/assets/header.webp')]">
      <Container>
        <div className='flex justify-center items-end h-full'>
          <h2 className="bg-black/50 text-white lg:text-5xl p-3 mb-4">Kamil Kocot Fotografia</h2>
        </div>
      </Container>

    </header>
  )
}

export default Header
