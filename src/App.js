import { BrowserRouter, Routes, Route } from "react-router-dom"
import DeviceStore from "./stores/global/DeviceStore"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Books from "./pages/Books"
import Authors from "./pages/Authors"
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
            </Routes>
          </BrowserRouter>
        </Layout>
      </MutableStore>
    </DeviceStore>
  )
}

export default App
