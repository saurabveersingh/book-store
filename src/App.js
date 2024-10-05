import { BrowserRouter, Routes, Route } from "react-router-dom"
import DeviceStore from "./stores/global/DeviceStore"
import Layout from "./components/Layout"
import Home from "./pages/home"
import Books from "./pages/books"
import Authors from "./pages/authors"
import AboutUs from "./pages/about-us"
import TermsAndConditions from "pages/terms-and-conditions"
import CookiesPolicy from "pages/cookies-policy"
import MutableStore from "./stores/global/MutableStore/MutableStore"

const App = () => {
  return (
    <DeviceStore>
      <MutableStore>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="books" element={<Books />} />
              <Route path="authors" element={<Authors />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="cookies-policy" element={<CookiesPolicy />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </MutableStore>
    </DeviceStore>
  )
}

export default App
