import './App.css'
import About from './components/About/About'
import Cart from './components/Cart/Cart'
import Catalog from './components/Catalog/Catalog'
import Contacts from './components/Contacts/Contacts'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Header from './components/Header/Header'
import Item from './components/Item/Item'
import MainPage from './components/MainPage/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'

function App() {

  return (
    <>
    <Header/>
    <Banner/>
      <BrowserRouter>
        <div>
          <div className="page">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/catalog.html" element={<Catalog />} />
              <Route path="/about.html" element={<About />} />
              <Route path=" /catalog/:id.html" element={<Item />} />
              <Route path="/cart.html" element={<Cart />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/contacts.html" element={<Contacts />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
