import Container from '../components/container'
import ScrollBtn from './scroll'


type headerVariants = {
  header: string;
  headercontact: string;
  headerportfolio: string;
}

type Props = {
  pic: keyof headerVariants;
  text: string;
}

const Header = ({ pic, text }: Props) => {

  const picVariants: headerVariants = {
    header: "flex bg-center bg-no-repeat bg-cover bg-[url('/assets/header.webp')] f-full-svh",
    headercontact: "flex bg-center bg-no-repeat bg-cover bg-[url('/assets/headercontact.webp')] f-full-svh",
    headerportfolio: "flex bg-center bg-no-repeat bg-cover bg-[url('/assets/headerportfolio.webp')] f-full-svh",
  }

  return (
    <header className={`${picVariants[pic]}`}>
      <Container>
        <div className='flex flex-col justify-end items-center h-full-svh pb-2.5'>
          <h2 className="font-amaticsc font-bold rounded-md bg-black/50 text-white text-5xl lg:text-7xl px-3 mb-[10vh]">{text}</h2>
          <ScrollBtn />
        </div>
      </Container>
    </header >
  )
}

export default Header
