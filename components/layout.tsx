import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Menu from '../components/menu'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const navigation = [
  { name: 'Portfolio', href: '#', current: true },
  { name: 'Wasze historie', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Kontakt', href: '#', current: false },
]

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Menu itemsMenu={navigation} />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
