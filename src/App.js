import { BrowserRouter, Routes, Route } from "react-router-dom"
import DeviceStore from "./stores/global/DeviceStore"
import Layout from "./components/Layout"
import Home from "./pages/home"
import Books from "./pages/books"
import Authors from "./pages/authors"
import AboutUs from "./pages/about-us"
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
            </Routes>
          </BrowserRouter>
        </Layout>
      </MutableStore>
    </DeviceStore>
  )
}

export default App
