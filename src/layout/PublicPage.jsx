import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import ContactPopup from '../Component/ContactPopup'

function PublicPage() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
        <ContactPopup />
    </>
  )
}

export default PublicPage