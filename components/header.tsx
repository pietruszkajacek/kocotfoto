import Container from '../components/container'

type Props = {
  pic: string
  text: string
}

const Header = ({ pic, text }: Props) => {
  const picVariants = {
    header: "flex bg-center bg-no-repeat bg-cover h-screen bg-[url('/assets/header.webp')]",
    headercontact: "flex bg-center bg-no-repeat bg-cover h-screen bg-[url('/assets/headercontact.webp')]",
    headerportfolio: "flex bg-center bg-no-repeat bg-cover h-screen bg-[url('/assets/headerportfolio.webp')]",
  }  
  return (
    <header className={`${picVariants[pic]}`}>
      <Container>
        <div className='flex justify-center items-end h-full'>
          <h2 className="font-amaticsc font-bold rounded-md bg-black/50 text-white text-5xl lg:text-7xl px-3 mb-[20vh]">{text}</h2>
        </div>
      </Container>
    </header >
  )
}

export default Header
