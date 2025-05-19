import './App.css'
import About from './components/About/About'
import Cart from './components/Cart/Cart'
import Catalog from './components/Catalog/Catalog'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Item from './components/Item/Item'
import MainPage from './components/MainPage/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <div>
      <div className="page">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog.html" element={<Catalog />} />
          <Route path="/about.html" element={<About />} />
          <Route path=" /catalog/:id.html" element={<Item />} />
          <Route path="/cart.html" element={<Cart />} />
          <Route path="/404.html" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
