import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import PublicPage from "../layout/PublicPage"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Work from "../pages/Work"
import Credentials from "../pages/Credentials"
import Offer from "../pages/Offer"
import Error from "../pages/Error"

const token = localStorage.getItem('token')


export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PublicPage />}>
                <Route index path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/work' element={<Work />} />
                <Route path="credential" element={<Credentials />} />
                <Route path="offer" element={<Offer />} />
                <Route path="*" element={<Error />} />
            </Route>
        </>
    )
)