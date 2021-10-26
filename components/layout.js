import Header from './header'
import Footer from './footer'

export default function Layout(props) {
  return (
    <div className="container mx-auto min-h-screen">
      <Header />

      <main>{props.children}</main>

      <Footer />
    </div>
  )
}
