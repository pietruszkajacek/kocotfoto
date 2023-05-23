import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Menu from '../components/menu'
import Header from '../components/header'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const navigation = [
  { name: 'Portfolio', href: '#', current: false },
  { name: 'Wasze historie', href: '#', current: true },
  { name: 'Blog', href: '#', current: false },
  { name: 'Kontakt', href: '#', current: false },
]

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Menu itemsMenu={navigation} />
      <Header />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
