import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Books from "./pages/Books"

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
